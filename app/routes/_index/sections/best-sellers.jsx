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
        <Grid
          columns={12}
          rows={10}
          gapY='xl'
          gap='l'
          className='aspect-[5/7]'
        >
          <ProductCard
            product={products[0]}
            className='col-span-5 col-start-1 row-start-1 pr-12'
          />
          <ProductCard
            product={products[1]}
            className='col-span-3 col-start-7 row-start-2'
          />
          <ProductCard
            product={products[2]}
            className='col-span-3 col-start-10 row-start-1'
          />
          <ProductCard
            product={products[3]}
            className='col-span-3 col-start-1 row-start-6'
          />
          <ProductCard
            product={products[4]}
            className='col-span-3 col-start-4 row-start-5'
          />
          <ProductCard
            product={products[5]}
            className='col-span-4 col-start-9 row-start-5 mt-8'
          />
          s
        </Grid>
      </Container>
    </Section>
  )
}
