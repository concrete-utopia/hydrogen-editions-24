import { ProductCard } from '@h2/ProductCard'
import { Heading, Span } from '@h2/new/Text'
import {
  Container,
  Flex,
  Grid,
  Section,
} from '@h2/new/Layout'

export default function BestSellers() {
  return (
    <Section className='pt-32'>
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
          <Flex as='span' justify='between'>
            <Span font='display'>Best</Span>
            <Span
              font='sans'
              className='-mr-2 scale-95 translate-y-1'
            >
              Sellers
            </Span>
          </Flex>
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
          <ProductCard className='col-span-5 col-start-1 row-start-1 pr-12' />
          <ProductCard className='col-span-3 col-start-7 row-start-2' />
          <ProductCard className='col-span-3 col-start-10 row-start-1' />
          <ProductCard className='col-span-3 col-start-1 row-start-6' />
          <ProductCard className='col-span-3 col-start-4 row-start-5' />
          <ProductCard className='col-span-4 col-start-9 row-start-5 mt-8' />
        </Grid>
      </Container>
    </Section>
  )
}
