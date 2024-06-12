import {
  Heading,
  HighlightText,
  Span,
  Text,
} from '@h2/new/Text'
import { useLoaderData } from '@remix-run/react'
import { Button } from '@h2/new/Button'
import { Image } from '@shopify/hydrogen'
import {
  Row,
  Column,
  Section,
  Container,
  Background,
  Grid,
} from '/app/components/hydrogen/new/Layout'

export default function HighlightSolution() {
  const data = useLoaderData()

  if (data.solution == null) return null

  const { featuredImage } = data.product
  const { title, description, learn_more } =
    data.solution.reference

  return (
    <Section className='aspect-[2/1]'>
      <Row
        className='relative z-10 h-full'
        justify='center'
        align='center'
      >
        <Container className='h-full'>
          <Grid columns={2} className='h-full'>
            <div></div>
            <Column
              className='pl-8'
              resizeY='fill'
              direction='down'
              align='start'
              justify='center'
              gap={9}
            >
              <Heading uppercase wrap='balance'>
                <HighlightText text={title.value} />
              </Heading>
              <Text
                wrap='balance'
                size='xl'
                className='opacity-70'
              >
                {description.value}
              </Text>
              <Button color='white'>Learn more</Button>
            </Column>
          </Grid>
        </Container>
      </Row>
      <Background
        overflow='visible'
        columns={2}
        className='bg-offWhite'
      >
        <div className='h-full'>
          <Image
            className='object-fill w-auto scale-[118%] -translate-y-14 -translate-x-6 pointer-events-none mix-blend-darken rotate-12'
            data={featuredImage}
          />
        </div>
      </Background>
      <div className='absolute bottom-0 right-0 flex justify-around w-1/2 translate-y-7'>
        <span className='-translate-x-4 translate-y-4 aspect-square w-14 bg-offWhite'></span>
        <span className='-translate-x-2 aspect-square w-14 bg-offWhite'></span>
        <span className='-translate-x-11 translate-y-14 aspect-square w-14 bg-offWhite'></span>
        <span className='-translate-x-4 translate-y-4 aspect-square w-14 bg-offWhite'></span>
        <span className='bg-white aspect-square w-14 -translate-y-7'></span>
      </div>
    </Section>
  )
}
