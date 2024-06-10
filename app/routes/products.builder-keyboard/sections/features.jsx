import { Heading, Text } from '@h2/new/Text'
import { Container, Grid, Section } from '@h2/new/Layout'
import { Image } from '@shopify/hydrogen'

function Feature({ number, title, description, image }) {
  return (
    <Grid columns={9}>
      <div className='col-span-2'>
        <Heading
          leading='none'
          size='5xl'
          color='white'
          className='-mt-[0.125em]'
        >
          {number}
        </Heading>
      </div>
      <Column gap='m' className='col-span-3'>
        <Heading font='text' size='m' color='accent'>
          {title}
        </Heading>
        <Text className='text-white/70' as='p'>
          {description}
        </Text>
      </Column>
      <div className='col-span-3 col-start-7 bg-offWhite'>
        <Image
          src={image.src}
          width={370}
          height={257}
          crop='center'
        />
      </div>
    </Grid>
  )
}

const data = [
  {
    number: '01',
    title: 'Type at lightning speed',
    description:
      'Type at lightning speed Build faster than ever with the Shopify Keyboard thanks to its ultra-slim design, featuring low-profile switches (0.2 ms latency). These switches are 31% thinner than those found on average mechanical keyboards, allowing you to type, work, and play faster. Listen to the smooth sound of the Gatreon low-profile red switch.',
    image: {
      src: 'https://cdn.shopify.com/s/files/1/0657/3811/3197/files/01-DevMode-Buildertote_PDP_3_fa8b6520-484a-47e7-818d-b217b04d31e6.png',
    },
  },
  {
    number: '02',
    title: 'Illuminate your work station',
    description:
      'Pair your keyboard’s backlights with your preferences. Whether you’re coding, gaming, or creating—adjust the hue, saturation, and brightness of your backlight using a range of over 22 dynamic RGB settings.',
    image: {
      src: 'https://cdn.shopify.com/s/files/1/0657/3811/3197/files/01-DevMode-Buildertote_PDP_3_fa8b6520-484a-47e7-818d-b217b04d31e6.png',
    },
  },
  {
    number: '03',
    title: 'Wired or wireless? Connect your way',
    description:
      'Whether you’re updating inventory on your laptop or shipping code on your desktop—seamlessly transition between platforms. The Shopify Keyboard can pair with up to 3 Bluetooth devices, but if you prefer to connect via cable, make the switch in seconds with the toggle function. Whatever your preference, experience a keyboard that adapts to your needs.',
    image: {
      src: 'https://cdn.shopify.com/s/files/1/0657/3811/3197/files/01-DevMode-Buildertote_PDP_3_fa8b6520-484a-47e7-818d-b217b04d31e6.png',
    },
  },
]

export default function Features() {
  return (
    <Section className='bg-darkGray'>
      <Container>
        <Column gap={9} py='3xl'>
          {data.map((feature) => (
            <Feature key={feature.number} {...feature} />
          ))}
        </Column>
      </Container>
    </Section>
  )
}
