import { Suspense } from 'react'
import { Await, useLoaderData } from '@remix-run/react'
import { Image, VariantSelector } from '@shopify/hydrogen'
import {
  ShopPayButton,
  AddToCartButton,
} from '@h2/new/Button'
import { Heading, Text } from '@h2/new/Text'
import { Price, PriceCompareAt } from '@h2/Price'
import {
  Background,
  Row,
  Column,
  Grid,
  Section,
} from '@h2/new/Layout'
import Link from '@h2/Link'
import Accordion from '@h2/new/Accordion'
import { businessDaysFromNow } from '@h2/new/utils'

export default function Hero() {
  const { product } = useLoaderData()
  const { featuredImage } = product
  return (
    <Section className='relative'>
      <Grid
        columns={2}
        position='relative'
        resizeY='fill'
        align='center'
        gap={0}
        py='3xl'
        className='z-20'
      >
        <div className='product-image'>
          <Image
            aspectRatio='1/1'
            data={featuredImage}
            sizes='(min-width: 45em) 50vw, 100vw'
            className='object-fill'
          />
        </div>
        <Row
          align='stretch'
          justify='center'
          className='items-center'
        >
          <ProductSummary />
        </Row>
      </Grid>
      <Background columns={2}>
        <div className='bg-accent'></div>
        <div className='bg-lightGray'></div>
      </Background>
      <Background>
        <Column
          align='center'
          justify='center'
          className='absolute w-full h-full -translate-x-1/2 left-1/2'
        >
          <span className='leading-none text-white whitespace-nowrap font-display text-[25rem]'>
            BUILDERS BUILDERS
          </span>
          <span className='leading-none text-white font-display whitespace-nowrap text-[25rem]'>
            BUILDERS BUILDERS BUILDERS
          </span>
        </Column>
      </Background>
    </Section>
  )
}

function ProductSummary() {
  const { product, variants } = useLoaderData()
  const { selectedVariant, title, description } = product

  const accordionData = [
    {
      title: 'Materials',
      content: product.materials?.value,
    },
    {
      title: 'Care Instructions',
      content: product.care_guide?.value,
    },
    {
      title: 'Fit',
      content: product.fit?.value,
    },
  ]

  return (
    <div
      id='product-summary'
      className='rounded-card max-w-[28rem] bg-white shadow-card overflow-hidden'
    >
      <div
        id='product-info'
        className='grid gap-6 px-10 pt-14 pb-9 min-h-80'
      >
        <Heading align='left' className='-mt-2 -mb-5'>
          {title}
        </Heading>

        <div
          id='product-info-content'
          className='grid gap-3'
        >
          <div id='product-price' className='flex gap-4'>
            <Price
              size='xl'
              weight='medium'
              price={selectedVariant?.price}
            />
            <PriceCompareAt
              size='xl'
              weight='medium'
              className='strike opacity-40'
              price={selectedVariant?.price}
              compareAtPrice={
                selectedVariant?.compareAtPrice
              }
            />
          </div>
          <Text align='left' id='product-description'>
            {description}
          </Text>
        </div>

        <Suspense
          fallback={
            <ProductForm
              product={product}
              selectedVariant={selectedVariant}
              variants={[]}
            />
          }
        >
          <Await
            errorElement='There was a problem loading product variants'
            resolve={variants}
          >
            {(data) => (
              <ProductForm
                product={product}
                selectedVariant={selectedVariant}
                variants={
                  data.product?.variants.nodes || []
                }
              />
            )}
          </Await>
        </Suspense>
      </div>
      <Column
        justify='center'
        gap={5}
        className='px-10 py-8 min-h-80 bg-lighterGray'
      >
        <div className='grid gap-3'>
          <Row gap={3}>
            <IconBox />
            <Text className='flex items-center gap-3'>
              <span>
                Receive it by{' '}
                <strong className='font-medium'>
                  {businessDaysFromNow(7)}
                </strong>
              </span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='69'
                height='21'
                fill='none'
                className='inline'
              >
                <rect
                  width='69'
                  height='19.7'
                  y='.4'
                  fill='#E5E5E3'
                  rx='6'
                />
                <path
                  fill='#000'
                  d='M6.4 6.5a5 5 0 0 1 2.8-.9c3 0 5 2 5 4.8 0 2.6-1.8 4.5-4.3 4.5-2.2 0-3.7-1.5-3.7-3.6C6.2 10 7 9 8 8.6l.9 1.6c-.7.2-.9.7-.9 1.2 0 .9.7 1.5 1.8 1.5 1.2 0 2.2-1 2.2-2.4 0-1.7-1.2-2.9-2.9-2.9-.7 0-1.3.2-1.9.6l-.9-1.7Zm15.3-1.1H18v9.1h1.4V11h2.2c2 0 3.1-1.2 3.1-2.9s-1-2.7-3.1-2.7Zm-.3 4.2h-2V6.7h2c1.3 0 2 .6 2 1.5s-.7 1.4-2 1.4Zm4.3 4.9v-6H27v1.1c.4-.8 1.3-1.2 2.5-1.2v1.3C28 9.7 27 10 27 11v3.4h-1.3Zm4.2-3c0-2 1.3-3.2 3.1-3.2a3 3 0 0 1 3.2 3.2c0 1.8-1.3 3.2-3.2 3.2-1.8 0-3.1-1.3-3.1-3.2Zm5 0c0-1.2-.8-2-1.9-2-1 0-1.7.8-1.7 2s.7 2 1.7 2 1.8-.8 1.8-2Zm2.3 3v-6h1.4v1c.4-.8 1-1.2 2-1.2s1.8.4 2.1 1.2c.6-.8 1.3-1.2 2.4-1.2 1.5 0 2.2.9 2.2 2.6v3.6h-1.4V11c0-1-.5-1.6-1.3-1.6-1 0-1.7.9-1.7 2v3.1h-1.4V11c0-1-.4-1.6-1.3-1.6-1 0-1.6.9-1.6 2v3.1h-1.4Zm11.1-7.9c0-.5.4-.9 1-.9.5 0 1 .4 1 1 0 .5-.5.9-1 .9-.6 0-1-.4-1-1Zm.3 8V8.3h1.3v6.1h-1.3Zm2.4-2h1.4c0 .7.7 1 1.6 1 .7 0 1.2-.3 1.2-.8 0-1.4-4 0-4-2.6 0-1.2 1-2 2.8-2 1.5 0 2.5.9 2.6 2.2h-1.4c0-.7-.5-1.2-1.4-1.2-.7 0-1.2.4-1.2 1 0 1.3 4 0 4 2.6 0 1.2-1 1.9-2.7 1.9-1.7 0-2.8-.8-2.8-2.1Zm6.5-1.1c0-2 1.2-3.2 3-3.2 1.6 0 2.8 1.1 2.8 3.1v.5H59c0 1 .6 1.7 1.6 1.7.8 0 1.3-.5 1.4-1h1.4c-.2 1.2-1.3 2-2.8 2-1.8 0-3-1.2-3-3.1Zm4.4-.6c0-.8-.6-1.5-1.4-1.5-1 0-1.4.6-1.6 1.5h3Z'
                  opacity='.6'
                />
              </svg>
            </Text>
          </Row>
          <Row gap={3}>
            <IconShipping />
            <Text>Free shipping over $50</Text>
          </Row>
          <Row gap={3}>
            <IconReturns />
            <Text>Free 30-day returns</Text>
          </Row>
        </div>
        <Accordion data={accordionData} />
      </Column>
    </div>
  )
}

/**
 * @param {{
 *   product: ProductFragment;
 *   selectedVariant: ProductFragment['selectedVariant'];
 *   variants: Array<ProductVariantFragment>;
 * }}
 */
function ProductForm({
  product,
  selectedVariant,
  variants,
}) {
  return (
    <div className='product-form'>
      <VariantSelector
        handle={product.handle}
        options={product.options}
        variants={variants}
      >
        {({ option }) => (
          <div
            className='product-options'
            key={option.name}
          >
            <h5>{option.name}</h5>
            <div className='product-options-grid'>
              {option.values.map(
                ({ value, isAvailable, isActive, to }) => {
                  return (
                    <Link
                      className='product-options-item'
                      key={option.name + value}
                      prefetch='intent'
                      preventScrollReset
                      replace
                      to={to}
                      style={{
                        border: isActive
                          ? '1px solid black'
                          : '1px solid transparent',
                        opacity: isAvailable ? 1 : 0.3,
                      }}
                    >
                      {value}
                    </Link>
                  )
                },
              )}
            </div>
          </div>
        )}
      </VariantSelector>

      <Grid columns={2} gap={3}>
        <ShopPayButton variant={selectedVariant} />
        <AddToCartButton
          color='accent'
          className='w-full'
          disabled={
            !selectedVariant ||
            !selectedVariant.availableForSale
          }
          onClick={() => {
            window.location.href =
              window.location.href.split('#')[0] +
              '#cart-aside'
          }}
          lines={
            selectedVariant
              ? [
                  {
                    merchandiseId: selectedVariant.id,
                    quantity: 1,
                  },
                ]
              : []
          }
        >
          {selectedVariant?.availableForSale
            ? 'Add to cart'
            : 'Sold out'}
        </AddToCartButton>
      </Grid>
    </div>
  )
}

function IconBox() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='21'
      fill='none'
    >
      <path
        fill='#0A142F'
        d='m3.9 14.6-.8-.7a2 2 0 0 1-.2-1V7.1c0-.3 0-.6.2-.9l.7-.6 5-2.8a2 2 0 0 1 1.2-.4c.4 0 .8.1 1.3.4l5 2.8.6.6.2 1v5.5c0 .5 0 .9-.2 1.1l-.8.7-5.5 3.1-.6.2c-.2 0-.4 0-.6-.2l-5.4-3Zm.6-1 5 2.8v-5.8L4 7.5v5.8l.5.3Zm11 0c.2 0 .3-.2.4-.3l.1-.5V7.5l-5.4 3.1v5.8l4.9-2.8Zm-5.5-4 2.2-1.2-5.5-3.1-2.1 1.2L10 9.6Zm3.3-1.9 2.1-1.2L10.8 4c-.5-.3-1-.3-1.6 0L8 4.7l5.4 3Z'
        opacity='.6'
      />
    </svg>
  )
}
function IconShipping() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='21'
      fill='none'
    >
      <path
        stroke='#666'
        strokeWidth='1.1'
        d='M3.4 4h7.3C12 4 13 5 13 6.4v7.8H3.4c-1.3 0-2.4-1-2.4-2.3V6.4C1 5 2.1 4 3.4 4Zm13.2 10.2H13V7.3h1.8c.7 0 1.4.3 1.8.9l1.8 2.1c.4.4.6 1 .6 1.5 0 1.4-1.1 2.4-2.4 2.4Z'
      />
      <circle
        cx='5.3'
        cy='14.2'
        r='2'
        fill='#fff'
        stroke='#666'
        strokeWidth='1.1'
      />
      <circle
        cx='15'
        cy='14.2'
        r='2'
        fill='#fff'
        stroke='#666'
        strokeWidth='1.1'
      />
    </svg>
  )
}
function IconReturns() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='21'
      fill='none'
    >
      <path
        fill='#545558'
        d='M11 3a.5.5 0 0 0 0 1h1a4.3 4.3 0 0 1 0 8.6H4.3l3-3a.5.5 0 0 0-.6-.7l-3.9 3.8a.5.5 0 0 0 0 .7l3.9 3.8a.5.5 0 1 0 .7-.6l-3-3h7.4A5.3 5.3 0 0 0 12 3h-1Z'
      />
    </svg>
  )
}
