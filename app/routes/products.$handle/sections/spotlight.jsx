import { AddToCartButton } from '@h2/new/Button'
import { Heading, Text } from '@h2/new/Text'
import {
  Column,
  Container,
  Grid,
  Section,
} from '@h2/new/Layout'
import { Image } from '@shopify/hydrogen'
import { useLoaderData } from '@remix-run/react'

export default function Spotlight() {
  return (
    <Section padding className='mb-24'>
      <Container as='header' className='pb-16'>
        <Column gap={4}>
          <Heading size={9} uppercase weight='regular'>
            New
          </Heading>
          <Text
            size={6}
            color='black'
            weight='medium'
            className='opacity-50'
          >
            Just Dropped
          </Text>
        </Column>
      </Container>
      <Container>
        <div className='absolute top-0 flex items-center justify-center w-40 translate-x-1/2 -translate-y-1/2 bg-white rounded-full text-7xl -rotate-12 right-10 shadow-badge aspect-square'>
          👀
        </div>
        <Grid columns={2} gap={0}>
          <Column
            align='center'
            justify='center'
            gap={6}
            className='bg-offWhite'
            p={8}
          >
            <div className='w-[22rem] h-[15rem] flex items-end justify-center'>
              <Image
                crop='center'
                width={380}
                height={250}
                src='https://cdn.shopify.com/s/files/1/0657/3811/3197/files/01-GSD-Hat-PDP.webp'
              />
            </div>
            <Column gap={4} align='center' justify='center'>
              <Heading size='l' font='text' weight='medium'>
                Get Ship Done Hat 2.0
              </Heading>
              <Text width='narrow'>
                Back by popular demand, the GSD Hat 2.0
                features premium materials and adjustable
                strap.
              </Text>
            </Column>
            <AddToCartButton>Add to cart</AddToCartButton>
          </Column>
          <div className='self-stretch bg-accent'>
            <Image
              className='object-cover h-full'
              width={633}
              height={555}
              src='https://cdn.shopify.com/s/files/1/0657/3811/3197/files/spotlight-image-home-2.jpg?v=1716832296'
            />
          </div>
        </Grid>
      </Container>
    </Section>
  )
}
