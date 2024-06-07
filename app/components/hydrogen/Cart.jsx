import React from 'react'
import clsx from 'clsx'
import { useRef } from 'react'
import useScroll from 'react-use/esm/useScroll'
import {
  flattenConnection,
  CartForm,
  Image,
  Money,
  useOptimisticData,
  OptimisticInput,
} from '@shopify/hydrogen'

import { Button } from '~/components/Button'
import { Text, Heading } from '~/components/Text'
import { Link } from '~/components/Link'
import { IconRemove } from '~/components/Icon'
import { FeaturedProducts } from '~/components/FeaturedProducts'
import { getInputStyleClasses } from '~/lib/utils'

/**
 * @param {{
 *   layout: Layouts;
 *   onClose?: () => void;
 *   cart: CartReturn | null;
 * }}
 */
export function Cart({ layout, onClose, cart }) {
  const linesCount = Boolean(
    cart?.lines?.edges?.length || 0,
  )

  return (
    <>
      <CartEmpty
        hidden={linesCount}
        onClose={onClose}
        layout={layout}
      />
      <CartDetails cart={cart} layout={layout} />
    </>
  )
}

/**
 * @param {{
 *   layout: Layouts;
 *   cart: CartType | null;
 * }}
 */
export function CartDetails({ layout, cart }) {
  // @todo: get optimistic cart cost
  const cartHasItems = !!cart && cart.totalQuantity > 0
  const container = {
    drawer:
      'grid grid-cols-1 h-screen-no-nav grid-rows-[1fr_auto]',
    page: 'w-full pb-12 grid md:grid-cols-2 md:items-start gap-8 md:gap-8 lg:gap-12',
  }

  return (
    <div className={container[layout]}>
      <CartLines lines={cart?.lines} layout={layout} />
      {cartHasItems && (
        <CartSummary cost={cart.cost} layout={layout}>
          <CartDiscounts
            discountCodes={cart.discountCodes}
          />
          <CartCheckoutActions
            checkoutUrl={cart.checkoutUrl}
          />
        </CartSummary>
      )}
    </div>
  )
}

/**
 * Temporary discount UI
 * @todo rework when a design is ready
 * @param {{
 *   discountCodes: CartType['discountCodes'];
 * }}
 */
function CartDiscounts({ discountCodes }) {
  const codes =
    discountCodes
      ?.filter((discount) => discount.applicable)
      ?.map(({ code }) => code) || []

  return (
    <>
      {/* Have existing discount, display it with a remove option */}
      <dl
        className={
          codes && codes.length !== 0 ? 'grid' : 'hidden'
        }
      >
        <div className='flex items-center justify-between font-medium'>
          <Text as='dt'>Discount(s)</Text>
          <div className='flex items-center justify-between'>
            <UpdateDiscountForm>
              <button>
                <IconRemove
                  aria-hidden='true'
                  style={{ height: 18, marginRight: 4 }}
                />
              </button>
            </UpdateDiscountForm>
            <Text as='dd'>{codes?.join(', ')}</Text>
          </div>
        </div>
      </dl>

      {/* Show an input to apply a discount */}
      <UpdateDiscountForm discountCodes={codes}>
        <div
          className={clsx(
            'flex',
            'items-center gap-4 justify-between text-copy',
          )}
        >
          <input
            className={getInputStyleClasses()}
            type='text'
            name='discountCode'
            placeholder='Discount code'
          />
          <button className='flex justify-end font-medium whitespace-nowrap'>
            Apply Discount
          </button>
        </div>
      </UpdateDiscountForm>
    </>
  )
}

/**
 * @param {{
 *   discountCodes?: string[];
 *   children: React.ReactNode;
 * }}
 */
function UpdateDiscountForm({ discountCodes, children }) {
  return (
    <CartForm
      route='/cart'
      action={CartForm.ACTIONS.DiscountCodesUpdate}
      inputs={{
        discountCodes: discountCodes || [],
      }}
    >
      {children}
    </CartForm>
  )
}

/**
 * @param {{
 *   layout: Layouts;
 *   lines: CartType['lines'] | undefined;
 * }}
 */
function CartLines({
  layout = 'drawer',
  lines: cartLines,
}) {
  const currentLines = cartLines
    ? flattenConnection(cartLines)
    : []
  const scrollRef = useRef(null)
  const { y } = useScroll(scrollRef)

  const className = clsx([
    y > 0 ? 'border-t' : '',
    layout === 'page'
      ? 'flex-grow md:translate-y-4'
      : 'px-6 pb-6 sm-max:pt-2 overflow-auto transition md:px-12',
  ])

  return (
    <section
      ref={scrollRef}
      aria-labelledby='cart-contents'
      className={className}
    >
      <ul className='grid gap-6 md:gap-10'>
        {currentLines.map((line) => (
          <CartLineItem key={line.id} line={line} />
        ))}
      </ul>
    </section>
  )
}

/**
 * @param {{checkoutUrl: string}}
 */
function CartCheckoutActions({ checkoutUrl }) {
  if (!checkoutUrl) return null

  return (
    <div className='flex flex-col mt-2'>
      <a href={checkoutUrl} target='_self'>
        <Button as='span' width='full'>
          Continue to Checkout
        </Button>
      </a>
      {/* @todo: <CartShopPayButton cart={cart} /> */}
    </div>
  )
}

/**
 * @param {{
 *   children?: React.ReactNode;
 *   cost: CartCost;
 *   layout: Layouts;
 * }}
 */
function CartSummary({ cost, layout, children = null }) {
  const summary = {
    drawer: 'grid gap-4 p-6 border-t md:px-12',
    page: 'sticky top-nav grid gap-6 p-4 md:px-6 md:translate-y-4 bg-primary/5 rounded w-full',
  }

  return (
    <section
      aria-labelledby='summary-heading'
      className={summary[layout]}
    >
      <h2 id='summary-heading' className='sr-only'>
        Order summary
      </h2>
      <dl className='grid'>
        <div className='flex items-center justify-between font-medium'>
          <Text as='dt'>Subtotal</Text>
          <Text as='dd' data-test='subtotal'>
            {cost?.subtotalAmount?.amount ? (
              <Money data={cost?.subtotalAmount} />
            ) : (
              '-'
            )}
          </Text>
        </div>
      </dl>
      {children}
    </section>
  )
}

/**
 * @param {{line: CartLine}}
 */
function CartLineItem({ line }) {
  const optimisticData = useOptimisticData(line?.id)

  if (!line?.id) return null

  const { id, quantity, merchandise } = line

  if (
    typeof quantity === 'undefined' ||
    !merchandise?.product
  )
    return null

  return (
    <li
      key={id}
      className='flex gap-4'
      style={{
        // Hide the line item if the optimistic data action is remove
        // Do not remove the form from the DOM
        display:
          optimisticData?.action === 'remove'
            ? 'none'
            : 'flex',
      }}
    >
      <div className='flex-shrink'>
        {merchandise.image && (
          <Image
            width={110}
            height={110}
            data={merchandise.image}
            className='object-cover object-center w-24 h-24 border rounded md:w-28 md:h-28'
            alt={merchandise.title}
          />
        )}
      </div>

      <div className='flex justify-between flex-grow'>
        <div className='grid gap-2'>
          <Heading as='h3' size='copy'>
            {merchandise?.product?.handle ? (
              <Link
                to={`/products/${merchandise.product.handle}`}
              >
                {merchandise?.product?.title || ''}
              </Link>
            ) : (
              <Text>
                {merchandise?.product?.title || ''}
              </Text>
            )}
          </Heading>

          <div className='grid pb-2'>
            {(merchandise?.selectedOptions || []).map(
              (option) => (
                <Text color='subtle' key={option.name}>
                  {option.name}: {option.value}
                </Text>
              ),
            )}
          </div>

          <div className='flex items-center gap-2'>
            <div className='flex justify-start text-copy'>
              <CartLineQuantityAdjust line={line} />
            </div>
            <ItemRemoveButton lineId={id} />
          </div>
        </div>
        <Text>
          <CartLinePrice line={line} as='span' />
        </Text>
      </div>
    </li>
  )
}

/**
 * @param {{lineId: CartLine['id']}}
 */
function ItemRemoveButton({ lineId }) {
  return (
    <CartForm
      route='/cart'
      action={CartForm.ACTIONS.LinesRemove}
      inputs={{
        lineIds: [lineId],
      }}
    >
      <button
        className='flex items-center justify-center w-10 h-10 border rounded'
        type='submit'
      >
        <span className='sr-only'>Remove</span>
        <IconRemove aria-hidden='true' />
      </button>
      <OptimisticInput
        id={lineId}
        data={{ action: 'remove' }}
      />
    </CartForm>
  )
}

/**
 * @param {{line: CartLine}}
 */
function CartLineQuantityAdjust({ line }) {
  const optimisticId = line?.id
  const optimisticData = useOptimisticData(optimisticId)

  if (!line || typeof line?.quantity === 'undefined')
    return null

  const optimisticQuantity =
    optimisticData?.quantity || line.quantity

  const { id: lineId } = line
  const prevQuantity = Number(
    Math.max(0, optimisticQuantity - 1).toFixed(0),
  )
  const nextQuantity = Number(
    (optimisticQuantity + 1).toFixed(0),
  )

  return (
    <>
      <label
        htmlFor={`quantity-${lineId}`}
        className='sr-only'
      >
        Quantity, {optimisticQuantity}
      </label>
      <div className='flex items-center border rounded'>
        <UpdateCartButton
          lines={[{ id: lineId, quantity: prevQuantity }]}
        >
          <button
            name='decrease-quantity'
            aria-label='Decrease quantity'
            className='w-10 h-10 transition text-primary/50 hover:text-primary disabled:text-primary/10'
            value={prevQuantity}
            disabled={optimisticQuantity <= 1}
          >
            <span>&#8722;</span>
            <OptimisticInput
              id={optimisticId}
              data={{ quantity: prevQuantity }}
            />
          </button>
        </UpdateCartButton>

        <div
          className='px-2 text-center'
          data-test='item-quantity'
        >
          {optimisticQuantity}
        </div>

        <UpdateCartButton
          lines={[{ id: lineId, quantity: nextQuantity }]}
        >
          <button
            className='w-10 h-10 transition text-primary/50 hover:text-primary'
            name='increase-quantity'
            value={nextQuantity}
            aria-label='Increase quantity'
          >
            <span>&#43;</span>
            <OptimisticInput
              id={optimisticId}
              data={{ quantity: nextQuantity }}
            />
          </button>
        </UpdateCartButton>
      </div>
    </>
  )
}

/**
 * @param {{
 *   children: React.ReactNode;
 *   lines: CartLineUpdateInput[];
 * }}
 */
function UpdateCartButton({ children, lines }) {
  return (
    <CartForm
      route='/cart'
      action={CartForm.ACTIONS.LinesUpdate}
      inputs={{
        lines,
      }}
    >
      {children}
    </CartForm>
  )
}

/**
 * @param {{
 *   line: CartLine;
 *   priceType?: 'regular' | 'compareAt';
 *   [key: string]: any;
 * }}
 */
function CartLinePrice({
  line,
  priceType = 'regular',
  ...passthroughProps
}) {
  if (
    !line?.cost?.amountPerQuantity ||
    !line?.cost?.totalAmount
  )
    return null

  const moneyV2 =
    priceType === 'regular'
      ? line.cost.totalAmount
      : line.cost.compareAtAmountPerQuantity

  if (moneyV2 == null) {
    return null
  }

  return (
    <Money
      withoutTrailingZeros
      {...passthroughProps}
      data={moneyV2}
    />
  )
}

/**
 * @param {{
 *   hidden: boolean;
 *   layout?: Layouts;
 *   onClose?: () => void;
 * }}
 */
export function CartEmpty({
  hidden = false,
  layout = 'drawer',
  onClose,
}) {
  const scrollRef = useRef(null)
  const { y } = useScroll(scrollRef)

  const container = {
    drawer: clsx([
      'content-start gap-4 px-6 pb-8 transition overflow-y-scroll md:gap-12 md:px-12 h-screen-no-nav md:pb-12',
      y > 0 ? 'border-t' : '',
    ]),
    page: clsx([
      hidden ? '' : 'grid',
      `pb-12 w-full md:items-start gap-4 md:gap-8 lg:gap-12`,
    ]),
  }

  return (
    <div
      ref={scrollRef}
      className={container[layout]}
      hidden={hidden}
    >
      <section className='grid gap-6'>
        <Text format>
          Looks like you haven&rsquo;t added anything yet,
          let&rsquo;s get you started!
        </Text>
        <div>
          <Button onClick={onClose}>
            Continue shopping
          </Button>
        </div>
      </section>
      <section className='grid gap-8 pt-16'>
        <FeaturedProducts
          count={4}
          heading='Shop Best Sellers'
          layout={layout}
          onClose={onClose}
          sortKey='BEST_SELLING'
        />
      </section>
    </div>
  )
}

/** @typedef {'page' | 'drawer'} Layouts */
/**
 * @typedef {{
 *   action?: string;
 *   quantity?: number;
 * }} OptimisticData
 */

/** @typedef {import('@shopify/hydrogen').CartReturn} CartReturn */
/** @typedef {import('@shopify/hydrogen/storefront-api-types').Cart} Cart */
/** @typedef {import('@shopify/hydrogen/storefront-api-types').CartCost} CartCost */
/** @typedef {import('@shopify/hydrogen/storefront-api-types').CartLine} CartLine */
/** @typedef {import('@shopify/hydrogen/storefront-api-types').CartLineUpdateInput} CartLineUpdateInput */
