import { Button } from '@h2/Button'
import Link from '@h2/Link'
import { Heading, Text, Span } from '@h2/new/Text'
import {
  Background,
  Container,
  Section,
} from '@h2/new/Layout'

export default function CTA() {
  return (
    <Section className='bg-accent aspect-video'>
      <Container resizeY='fill'>
        <Column
          gap='m'
          py='xl'
          align='center'
          justify='end'
          resizeY='fill'
        >
          <Heading weight='regular' leading='normal'>
            <Span font='display'>
              <Span pill className='bg-white'>
                CTRL
              </Span>{' '}
              YOUR PRODUCTIVITY,
            </Span>
            <br />
            <Span
              font='sans'
              className='block mt-2 scale-95'
            >
              <Span pill className='bg-white'>
                ALT
              </Span>{' '}
              YOUR WORK GAME.
            </Span>
          </Heading>
          <Button>Pre-order</Button>
          <Text>
            See <Link to='/'>FAQs</Link> for more details on
            pre-orders
          </Text>
        </Column>
      </Container>
      <Background></Background>
    </Section>
  )
}
