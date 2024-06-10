import { Button } from '@h2/new/Button'
import Link from '@h2/Link'
import { Price } from '@h2/Price'
import { Heading, Span, Text } from '@h2/new/Text'
import {
  Background,
  Container,
  Section,
} from '@h2/new/Layout'
import { useLoaderData } from '@remix-run/react'
import { Image } from '@shopify/hydrogen'

export default function Hero() {
  const { product } = useLoaderData()
  const { selectedVariant } = product
  return (
    <Section className='min-h-screen text-white bg-darkGray'>
      <Container resizeY='fill'>
        <Column justify='between' py='2xl' resizeY='fill'>
          <Column gap={6}>
            <Row
              size='3xl'
              uppercase
              color='accent'
              font='display'
              className='pt-16 pl-1'
            >
              Coming Soon
            </Row>
            <Heading font='text' size='5xl' leading='tight'>
              Builder
              <br />
              <Span font='display' uppercase>
                Keyboard
              </Span>
            </Heading>
            <Price
              color='white'
              className='opacity-60'
              font='display'
              as={Text}
              size='6xl'
              price={selectedVariant?.price}
            />
          </Column>
          <Column gap={4}>
            <Button color='accent'>Pre-order</Button>
            <Text
              width='narrow'
              color='white'
              className='opacity-70'
            >
              See{' '}
              <Link
                className='border-b border-white/45'
                to='/'
              >
                FAQs
              </Link>{' '}
              for more details on pre-orders
            </Text>
          </Column>
        </Column>
      </Container>
      <Background columns={1}>
        <Image />
      </Background>
    </Section>
  )
}
