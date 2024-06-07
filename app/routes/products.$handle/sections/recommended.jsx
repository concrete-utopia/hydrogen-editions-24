import { ProductCard } from '@h2/ProductCard'
import { Heading } from '@h2/new/Text'
import {
  Container,
  Column,
  Grid,
  Section,
} from '@h2/new/Layout'
import { useLoaderData } from '@remix-run/react'

export default function Recommended({
  title = 'You may also like',
  ...props
}) {
  const data = useLoaderData()

  const relatedProducts =
    data.relatedProducts.references.nodes

  return (
    <Section padding className='w-screen' {...props}>
      <Container as='header' className='-mb-10'>
        <Column gap='m'>
          <Heading
            size={9}
            uppercase
            weight='regular'
            wrap='balance'
            className='max-w-2xl'
          >
            {title}
          </Heading>
        </Column>
      </Container>
      <Grid gap='l' className='swimlane'>
        {relatedProducts.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
            className='snap-start w-80'
          />
        ))}
      </Grid>
    </Section>
  )
}
