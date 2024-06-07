import { Button } from '@h2/new/Button'
import { Heading, Text } from '@h2/new/Text'
import { Image } from '@shopify/hydrogen'

export default function Hero() {
  return (
    <section
      className='w-full relative min-h-8 h-svh max-h-[64rem] bg-darkGray'
      data-uid='bqy'
    >
      <div
        className='min-h-inherit h-full mx-auto px-4 md:px-8 lg:px-10 w-full relative z-10 max-w-7xl pb-24 pt-36'
        data-uid='bqi'
      >
        <div
          className='w-auto min-h-inherit h-full items-start justify-between flex flex-col'
          data-uid='89a'
        >
          <div
            className='w-auto h-auto gap-4 items-start justify-center flex flex-col pt-[10vh]'
            data-uid='bqc'
          >
            <Text
              uppercase
              size={6}
              font='display'
              color='accent'
              className='pl-1'
              data-uid='bpq'
            >
              Summer 2024
            </Text>
            <Heading
              font='text'
              size='8'
              color='white'
              data-uid='bqa'
            >
              Building <br data-uid='6ff' />
            </Heading>
            <Heading
              font='display'
              size='8'
              color='white'
              data-uid='1f5'
              style={{ height: 106 }}
            >
              Essentials
            </Heading>
          </div>
          <Button
            to='/products/builder-tote'
            data-uid='f3e'
          >
            Shop now
          </Button>
        </div>
      </div>
      <div
        className='grid absolute z-0 inset-0 pointer-events-none grid-cols-2'
        data-uid='bqv'
      >
        <div data-uid='b0a' />
        <div className='relative' data-uid='bqr'>
          <div
            className='absolute inset-0 bg-gradient-to-r from-darkGray to-transparent to-50% z-0'
            data-uid='cee'
          />
          <Image
            src='https://cdn.shopify.com/s/files/1/0657/3811/3197/files/home-hero.jpg?v=1716832320'
            className='object-cover w-full h-full -z-10'
            data-uid='089'
          />
        </div>
      </div>
    </section>
  )
}
