import { ProductCard } from '@h2/ProductCard'
import { Heading, Span } from '@h2/new/Text'
import {
  Container,
  Row,
  Grid,
  Section,
} from '@h2/new/Layout'
import { useLoaderData } from '@remix-run/react'
import { flattenConnection } from '@shopify/hydrogen'

export default function BestSellers() {
  const { bestSellers } = useLoaderData()

  const products = flattenConnection(bestSellers.products)

  return (
    <Section className='pt-32' style={{ height: 1880 }}>
      <Container
        as='header'
        className='z-20 pointer-events-none'
      >
        <Heading
          weight='regular'
          uppercase
          size={8}
          className='relative -mx-1 -mb-8'
        >
          <Row as='span' justify='between'>
            <Span font='display'>Best</Span>
            <Span
              font='sans'
              className='-mr-2 scale-95 translate-y-1'
            >
              Sellers
            </Span>
          </Row>
        </Heading>
      </Container>
      <Container>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns:
              'repeat(12, minmax(0, 1fr))',
            gridTemplateRows: 'repeat(10, minmax(0, 1fr))',
            columnGap: 32,
            rowGap: 48,
            aspectRatio: '5/7',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}
        >
          <ProductCard
            product={products[0]}
            className='pr-12'
            style={{
              gridColumn: '1 / 6',
              gridRow: '1',
            }}
          />
          <ProductCard
            product={products[1]}
            style={{
              gridColumn: '7 / 10',
              gridRow: '2',
            }}
          />
          <ProductCard
            product={products[2]}
            style={{
              gridColumn: '10 / 13',
              gridRow: '1',
            }}
          />
          <ProductCard
            product={products[3]}
            style={{
              gridColumn: '1 / 4',
              gridRow: '6',
            }}
          />
          <ProductCard
            product={products[4]}
            style={{
              gridColumn: '4 / 7',
              gridRow: '5',
            }}
          />
          <ProductCard
            product={products[5]}
            className='mt-8'
            style={{
              gridColumn: '9 / 13',
              gridRow: '5',
            }}
          />
        </div>
      </Container>
    </Section>
  )
}
