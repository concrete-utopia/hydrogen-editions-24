import {
  Container,
  Section,
  Background,
  Grid,
  Row,
  Column,
} from '@h2/new/Layout'
import { Heading, Text } from '@h2/new/Text'
import { useLoaderData } from '@remix-run/react'
import { Image } from '@shopify/hydrogen'

export default function HighlightDetails() {
  const { details } = useLoaderData()

  if (details?.features == null) return null

  const { highlights } = JSON.parse(
    details.features.reference.content.value,
  )

  return (
    <Section className='items-center text-white py-44 bg-darkGray'>
      <Container resizeY='fill'>
        <Grid resizeY='fill'>
          <Column resizeY='fill' justify='center' gap={9}>
            {highlights.map((highlight) => (
              <Column gap={5} key={highlight.title}>
                <Heading
                  font='text'
                  size={4}
                  weight='bold'
                  color='white'
                >
                  {highlight.title}
                </Heading>
                <Column as='ul' gap={2}>
                  {highlight.listItems.map((item) => (
                    <Row
                      key={item}
                      gap={4}
                      as='li'
                      className='flex items-center'
                    >
                      <span className='bg-accent inline-block w-10 h-[2px]' />
                      <Text size='xl' color='white'>
                        {item}
                      </Text>
                    </Row>
                  ))}
                </Column>
              </Column>
            ))}
          </Column>
        </Grid>
      </Container>
      <Background columns={2}>
        <div className='w-full h-full'></div>
        <div className='w-full h-full bg-accent'>
          <Image
            className='w-full h-full'
            data={
              details.features.reference.image.reference
                .image
            }
          />
        </div>
      </Background>
    </Section>
  )
}
