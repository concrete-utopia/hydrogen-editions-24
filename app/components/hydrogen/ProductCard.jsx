import { flattenConnection, Image } from '@shopify/hydrogen'

import { Button, AddToCartButton } from '@h2/new/Button'
import { cx } from '@h2/new/utils'
import { Column, Grid, Row } from '@h2/new/Layout'
import { Heading, Text } from '@h2/new/Text'
import { Price, PriceCompareAt } from '@h2/Price'
import Link from '@h2/Link'

export function ProductCard({
  product,
  className,
  loading,
  onClick,
  quickAdd,
}) {
  const nonNullProduct = product ?? {
    handle: 'builder-tote',
    title: 'Builders Tote',
    variants: {
      nodes: [
        {
          availableForSale: true,
          price: {
            amount: '38.00',
            currencyCode: 'CAD',
          },
          compareAtPrice: {
            amount: '42.00',
            currencyCode: 'CAD',
          },
          image: {
            id: 'gid://Shopify/placeholder/1234',
            altText: 'Placeholder',
            height: '600',
            width: '400',
            url: 'https://cdn.shopify.com/s/files/1/0657/3811/3197/files/01-DevMode-Buildertote_PDP_3_fa8b6520-484a-47e7-818d-b217b04d31e6.png',
          },
        },
      ],
    },
  }

  if (!nonNullProduct?.variants?.nodes?.length) return null

  const firstVariant = flattenConnection(
    nonNullProduct.variants,
  )[0]

  if (!firstVariant) return null
  const { image } = firstVariant

  return (
    <div
      className={cx(
        'flex w-full flex-col gap-2',
        className,
      )}
    >
      <Link
        onClick={onClick}
        to={`/products/${nonNullProduct.handle}`}
        prefetch='viewport'
      >
        <Column gap={4} resizeX='fill'>
          <div className='aspect-[4/5] bg-offWhite w-full'>
            {image && (
              <Image
                className='object-cover w-full fadeIn'
                sizes='(min-width: 64em) 25vw, (min-width: 48em) 30vw, 45vw'
                aspectRatio='4/5'
                data={image}
                alt={
                  image.altText ||
                  `Picture of ${nonNullProduct.title}`
                }
                loading={loading}
              />
            )}
          </div>
          <Grid gap={0} justify='start'>
            <Heading
              font='text'
              truncate
              size='m'
              as='h3'
              leading='none'
            >
              {nonNullProduct.title}
            </Heading>
            <Row gap={3} justify='start' align='baseline'>
              <Price
                withoutTrailingZeros
                color='black'
                className='opacity-60'
                as={Text}
                price={firstVariant?.price}
              />
              <PriceCompareAt
                withoutTrailingZeros
                as={Text}
                color='black'
                className='opacity-60'
                price={firstVariant?.price}
                compareAtPrice={
                  firstVariant?.compareAtPrice
                }
              />
            </Row>
          </Grid>
        </Column>
      </Link>
      {quickAdd && firstVariant.availableForSale && (
        <AddToCartButton
          lines={[
            {
              quantity: 1,
              merchandiseId: firstVariant.id,
            },
          ]}
          variant='secondary'
          className='mt-2'
        >
          <Text
            as='span'
            className='flex items-center justify-center gap-2'
          >
            Add to Cart
          </Text>
        </AddToCartButton>
      )}
      {quickAdd && !firstVariant.availableForSale && (
        <Button
          variant='secondary'
          className='mt-2'
          disabled
        >
          <Text
            as='span'
            className='flex items-center justify-center gap-2'
          >
            Sold out
          </Text>
        </Button>
      )}
    </div>
  )
}
