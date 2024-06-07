import { AddToCartButton } from '@h2/new/Button'
import { Heading, Text } from '@h2/new/Text'
import {
  Background,
  Column,
  Grid,
  Section,
  HalfAndHalf,
} from '@h2/new/Layout'
import { Image } from '@shopify/hydrogen'
import { Price, PriceCompareAt } from '@h2/Price'
import { cx } from '@h2/new/utils'

function SaleCard({ className, ...props }) {
  return (
    <div className={cx('relative', className)} {...props}>
      <Column
        align='center'
        justify='center'
        gap={6}
        position='relative'
        className='z-10'
        resizeY='fill'
        p={8}
        {...props}
      >
        {props.children}
      </Column>
      <Background justify='center' align='center'>
        <Heading
          color='white'
          uppercase
          className='text-[25rem] z-0 absolute left-1/2 -translate-x-1/2'
          align='center'
        >
          Sale
        </Heading>
      </Background>
    </div>
  )
}

export function SaleBadge({ price, compareAtPrice }) {
  return (
    <Column
      gap={0}
      align='center'
      justify='center'
      className='absolute top-0 right-0 z-20 w-40 pb-2 text-center translate-x-8 translate-y-16 bg-white rounded-full rotate-12 shadow-badge aspect-square'
    >
      <PriceCompareAt
        align='center'
        as={Heading}
        className='opacity-40'
        size={3}
        price={price}
        compareAtPrice={compareAtPrice}
        withoutTrailingZeros
      />
      <Price
        align='center'
        as={Heading}
        size={4}
        price={price}
        withoutTrailingZeros
      />
    </Column>
  )
}

export default function FeaturedProducts() {
  return (
    <Section>
      <HalfAndHalf
        left={
          <SaleCard className='bg-lightGray'>
            <div className='relative'>
              <SaleBadge
                price={{
                  amount: '39.00',
                  currencyCode: 'CAD',
                }}
                compareAtPrice={{
                  amount: '42.00',
                  currencyCode: 'CAD',
                }}
              />
              <Image
                crop='center'
                width={450}
                height={380}
                src='https://cdn.shopify.com/s/files/1/0657/3811/3197/files/01-DevMode-Buildertote_PDP_3_fa8b6520-484a-47e7-818d-b217b04d31e6.png'
              />
            </div>
            <Column gap={4} align='center' justify='center'>
              <Heading font='text' weight='medium' size='l'>
                Builders Tote
              </Heading>
              <Text
                width='narrow'
                color='black'
                className='opacity-60'
              >
                Sofie Pavitt Face is an intentional edit of
                skincare essentials designed for acne-prone
                skin.
              </Text>
            </Column>
            <Column style={{ height: 120 }}>
              <AddToCartButton color='accent'>
                Add to cart
              </AddToCartButton>
            </Column>
          </SaleCard>
        }
        right={
          <Image
            className='object-cover w-full h-full'
            width={633}
            height={555}
            src='https://cdn.shopify.com/s/files/1/0657/3811/3197/files/spotlight-image-home-1.jpg?v=1716832099'
          />
        }
      />
      <HalfAndHalf
        left={
          <Image
            className='object-cover w-full h-full'
            width={633}
            height={555}
            src='https://cdn.shopify.com/s/files/1/0657/3811/3197/files/spotlight-image-home-2.jpg?v=1716832296'
          />
        }
        right={
          <SaleCard className='bg-accent'>
            <div className='relative'>
              <SaleBadge
                price={{
                  amount: '39.00',
                  currencyCode: 'CAD',
                }}
                compareAtPrice={{
                  amount: '42.00',
                  currencyCode: 'CAD',
                }}
              />
              <Image
                crop='center'
                width={450}
                height={380}
                className='translate-y-12'
                src='https://cdn.shopify.com/s/files/1/0657/3811/3197/files/01-GSD-Hat-PDP.webp'
              />
            </div>
            <Column gap={4} align='center' justify='center'>
              <Heading font='text' weight='medium' size='l'>
                Get Ship Done Hat 2.0
              </Heading>
              <Text
                width='narrow'
                color='black'
                className='opacity-60'
              >
                Sofie Pavitt Face is an intentional edit of
                skincare essentials designed for acne-prone
                skin.
              </Text>
            </Column>
            <Column style={{ height: 120 }}>
              <AddToCartButton color='white'>
                Add to cart
              </AddToCartButton>
            </Column>
          </SaleCard>
        }
      />
    </Section>
  )
}
