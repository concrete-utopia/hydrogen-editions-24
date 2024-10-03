import { Heading, Text } from '@h2/new/Text'
import { Container } from '@h2/new/Layout'
import { cx } from '@h2/new/utils'

export const PromiseCard = ({
  heading,
  description,
  style,
  borderRadius = 0,
  color = 'gray',
  icon = 'guarantee',
  dropShadow = 'off',
  rotation = 0,
  offset = null,
}) => {
  const bg = {
    black: 'bg-black',
    accent: 'bg-accent',
    gray: 'bg-lightGray',
  }

  const renderedIcon = renderIcon(icon)

  return (
    <div
      className={`p-10 gap-2 items-start justify-start flex flex-col bg-accent aspect-square overflow-hidden ${bg[color]}`}
      style={{
        width: 360,
        height: 360,
        flexShrink: 0,
        borderRadius: borderRadius,
        boxShadow:
          dropShadow === 'soft'
            ? '0px 16px 36px rgba(0, 0, 0, 0.3), 0px 8px 12px rgba(0, 0, 0, 0.2)'
            : dropShadow === 'hard'
            ? '0px 16px 36px rgba(0, 0, 0, 0.3), 0px 16px 12px rgba(0, 0, 0, 0.4), 0px 8px 8px rgba(0, 0, 0, 0.4)'
            : undefined,
        transform:
          offset == null
            ? `rotate(${rotation}deg)`
            : `translate(${offset[0]}px, ${offset[1]}px) rotate(${rotation}deg)`,
        ...style,
      }}
    >
      <div className='aspect-[4/3] w-full relative'>
        <div className='absolute w-56 -right-4 -top-16'>
          {renderedIcon}
        </div>
      </div>
      <Heading
        color={color === 'black' ? 'white' : 'black'}
        size={3}
        uppercase
        weight='regular'
        className='tracking-wide'
        font='text'
      >
        {heading}
      </Heading>
      <Text
        color={color === 'black' ? 'white' : undefined}
        width='narrow'
        className='opacity-60'
        wrap='balance'
      >
        {description}
      </Text>
    </div>
  )
}

export default function OurPromise() {
  return (
    <section className='w-full relative min-h-8 py-16'>
      <Container as='header' className='z-20 pt-16 -mb-6'>
        <Heading uppercase size={9}>
          Our
          <br />
          Promise
        </Heading>
        <div
          style={{
            backgroundColor: '#aaaaaa33',
            position: 'absolute',
            left: 587,
            top: 121,
            width: 158,
            height: 126,
          }}
        >
          <div
            style={{
              backgroundColor: '#aaaaaa33',
              position: 'absolute',
              left: 44,
              top: 34,
              width: 70,
              height: 32,
            }}
          />
        </div>
      </Container>
      <div className='h-auto mx-auto px-4 md:px-8 lg:px-10 w-full relative z-10 max-w-7xl pb-36'>
        <div
          style={{
            display: 'flex',
            gap: 50,
            contain: 'layout',
          }}
        >
          <div
            style={{
              backgroundColor: '#aaaaaa33',
              contain: 'layout',
              width: 0,
              height: 642,
            }}
          />
          <PromiseCard
            heading='Guaranteed For Life'
            description='Every one of our products comes with a limited lifetime warranty.'
            color='accent'
            icon='guarantee'
            borderRadius={0}
            rotation={0}
            offset={[0, 0]}
            style={{
              opacity: '100%',
              width: 296,
              height: 360,
            }}
          />
          <PromiseCard
            heading='100 days to try'
            description='Try it out for 100 days. If you don’t love it, send it back.'
            color='gray'
            icon='trial'
          />
          <PromiseCard
            heading='Guaranteed For Life'
            description='Every one of our products comes with a limited lifetime warranty.'
            color='accent'
            icon='guarantee'
            borderRadius={0}
            rotation={0}
            offset={[0, 0]}
            style={{
              opacity: '100%',
              width: 390,
              contain: 'layout',
            }}
          />
          <PromiseCard
            heading='Free shipping'
            description='We’ll cover shipping on all orders to the contiguous US and Canada.'
            color='black'
            icon='shipping'
          />
        </div>
      </div>
    </section>
  )
}

function renderIcon(iconName) {
  // icon 'guarantee'
  if (iconName[0] === 'g') {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 191 181'
      >
        <rect
          width='155.6'
          height='18.4'
          x='17.9'
          y='.7'
          fill='#fff'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          x='.7'
          y='19.1'
          fill='#fff'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          x='167.9'
          y='19.1'
          fill='#fff'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          x='.7'
          y='37.1'
          fill='#fff'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          x='167.9'
          y='37.1'
          fill='#fff'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          x='.7'
          y='55.1'
          fill='#fff'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          x='167.9'
          y='55.1'
          fill='#fff'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          x='.7'
          y='73.1'
          fill='#fff'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          x='167.9'
          y='73.1'
          fill='#fff'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          x='8.2'
          y='92.6'
          fill='#fff'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          x='20.2'
          y='112.5'
          fill='#fff'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          x='160.4'
          y='92.6'
          fill='#fff'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          x='146.9'
          y='112.5'
          fill='#fff'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          x='38.2'
          y='129'
          fill='#fff'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          x='128.9'
          y='129'
          fill='#fff'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          x='53.2'
          y='148.5'
          fill='#fff'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          x='115.4'
          y='148.5'
          fill='#fff'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          x='73.3'
          y='162'
          fill='#fff'
          rx='9'
        />
        <rect
          width='43.3'
          height='18.4'
          x='73.3'
          y='162'
          fill='#fff'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          x='64.7'
          y='73.5'
          fill='#fff'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          x='91.5'
          y='73.5'
          fill='#fff'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          x='105.8'
          y='57.1'
          fill='#fff'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          x='78.2'
          y='91.5'
          fill='#fff'
          rx='9'
        />
      </svg>
    )
  }
  // icon 'trial'
  if (iconName[0] === 't') {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 211 203'
      >
        <rect
          width='170.6'
          height='18.4'
          x='18.6'
          y='21.5'
          fill='#fff'
          rx='9'
        />
        <rect
          width='175.5'
          height='18.4'
          x='17.5'
          y='184.3'
          fill='#fff'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          x='.5'
          y='39.9'
          fill='#fff'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          x='.5'
          y='58.3'
          fill='#fff'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          x='187.3'
          y='58.3'
          fill='#fff'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          x='187.3'
          y='39.9'
          fill='#fff'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          x='138.7'
          y='.1'
          fill='#fff'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          x='46.9'
          y='.1'
          fill='#fff'
          rx='9'
        />
        <rect
          width='133.2'
          height='18.4'
          x='37.4'
          y='57.9'
          fill='#fff'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          x='.5'
          y='75.9'
          fill='#fff'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          x='187.3'
          y='75.9'
          fill='#fff'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          x='.5'
          y='93.9'
          fill='#fff'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          x='187.3'
          y='93.9'
          fill='#fff'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          x='.5'
          y='111.9'
          fill='#fff'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          x='187.3'
          y='111.9'
          fill='#fff'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          x='.5'
          y='129.9'
          fill='#fff'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          x='42.5'
          y='102.9'
          fill='#fff'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          x='42.5'
          y='120.9'
          fill='#fff'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          x='42.5'
          y='138.9'
          fill='#fff'
          rx='9'
        />
        <rect
          width='43.2'
          height='18.4'
          x='72.5'
          y='102.9'
          fill='#fff'
          rx='9'
        />
        <rect
          width='43.2'
          height='18.4'
          x='122.6'
          y='102.9'
          fill='#fff'
          rx='9'
        />
        <rect
          width='18.1'
          height='18.4'
          x='72.5'
          y='120.9'
          fill='#fff'
          rx='9'
        />
        <rect
          width='18.1'
          height='18.4'
          x='122.6'
          y='120.9'
          fill='#fff'
          rx='9'
        />
        <rect
          width='18.1'
          height='18.4'
          x='97.5'
          y='120.9'
          fill='#fff'
          rx='9'
        />
        <rect
          width='18.1'
          height='18.4'
          x='147.6'
          y='120.9'
          fill='#fff'
          rx='9'
        />
        <rect
          width='43.2'
          height='18.4'
          x='72.5'
          y='138.9'
          fill='#fff'
          rx='9'
        />
        <rect
          width='43.2'
          height='18.4'
          x='122.6'
          y='138.9'
          fill='#fff'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          x='187.3'
          y='129.9'
          fill='#fff'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          x='.5'
          y='147.9'
          fill='#fff'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          x='187.3'
          y='147.9'
          fill='#fff'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          x='.5'
          y='165.9'
          fill='#fff'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          x='187.3'
          y='165.9'
          fill='#fff'
          rx='9'
        />
      </svg>
    )
  }
  // icon 'shipping'
  if (iconName[0] === 's') {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 281 197'
      >
        <rect
          width='158.6'
          height='18.4'
          x='15.2'
          fill='#EEFF37'
          rx='9'
        />
        <rect
          width='90.4'
          height='18.4'
          x='95.4'
          y='145.1'
          fill='#EEFF37'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          y='18.4'
          fill='#EEFF37'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          x='166.9'
          y='18.4'
          fill='#EEFF37'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          y='90.8'
          fill='#EEFF37'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          x='166.9'
          y='90.8'
          fill='#EEFF37'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          x='257.1'
          y='90.8'
          fill='#EEFF37'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          y='36.4'
          fill='#EEFF37'
          rx='9'
        />
        <rect
          width='74'
          height='18.4'
          x='166.9'
          y='36.4'
          fill='#EEFF37'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          y='108.8'
          fill='#EEFF37'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          x='166.9'
          y='108.8'
          fill='#EEFF37'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          x='257.1'
          y='108.8'
          fill='#EEFF37'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          y='54.4'
          fill='#EEFF37'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          x='166.9'
          y='54.4'
          fill='#EEFF37'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          x='234'
          y='54.4'
          fill='#EEFF37'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          y='126.8'
          fill='#EEFF37'
          rx='9'
        />
        <rect
          width='28.5'
          height='18.4'
          x='41.3'
          y='129.8'
          fill='#EEFF37'
          rx='9'
        />
        <rect
          width='28.5'
          height='18.4'
          x='209.9'
          y='129.8'
          fill='#EEFF37'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          x='65.6'
          y='145.1'
          fill='#EEFF37'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          x='234.2'
          y='145.1'
          fill='#EEFF37'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          x='23.1'
          y='145.1'
          fill='#EEFF37'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          x='191.8'
          y='145.1'
          fill='#EEFF37'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          x='23.1'
          y='163.5'
          fill='#EEFF37'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          x='191.8'
          y='163.5'
          fill='#EEFF37'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          x='65.6'
          y='163.5'
          fill='#EEFF37'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          x='234.2'
          y='163.5'
          fill='#EEFF37'
          rx='9'
        />
        <rect
          width='28.5'
          height='18.4'
          x='41.3'
          y='178.5'
          fill='#EEFF37'
          rx='9'
        />
        <rect
          width='28.5'
          height='18.4'
          x='209.9'
          y='178.5'
          fill='#EEFF37'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          x='166.9'
          y='126.8'
          fill='#EEFF37'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          x='257.1'
          y='126.8'
          fill='#EEFF37'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          y='72.4'
          fill='#EEFF37'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          x='166.9'
          y='72.4'
          fill='#EEFF37'
          rx='9'
        />
        <rect
          width='23.1'
          height='18.4'
          x='250.1'
          y='72.4'
          fill='#EEFF37'
          rx='9'
        />
      </svg>
    )
  }
  return null
}
