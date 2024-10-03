import * as React from 'react'

export default function Hero() {
  return (
    <section className='w-full relative min-h-8 h-svh max-h-[64rem] bg-darkGray text-white'>
      <div className='min-h-inherit h-full mx-auto px-4 md:px-8 lg:px-10 w-full relative z-10 max-w-7xl pb-24 pt-36'>
        <div
          className='w-auto h-auto gap-4 items-start justify-center flex flex-col pt-[10vh]'
          style={{
            top: 196,
            left: 84,
            position: 'absolute',
            width: 309,
            height: 324,
          }}
        >
          <span>Summer 2024</span>
          <span>Building</span>
          <span style={{ height: 106 }}>Essentials</span>
        </div>
        <div
          className='w-auto min-h-inherit h-full items-start justify-between flex flex-col'
          style={{
            top: 158,
            left: 96,
            position: 'absolute',
            width: 71,
            height: 723,
          }}
        >
          <Counter />
        </div>
      </div>
    </section>
  )
}

function Counter() {
  const [clickCount, setClickCount] = React.useState(0)
  const renderCount = React.useRef(0)
  renderCount.current += 1

  return (
    <div style={{ contain: 'layout' }}>
      <div>Render count:{renderCount.current}</div>
      <div
        style={{
          width: 186,
          height: 116,
          backgroundColor: 'red',
        }}
      />
      <button
        onClick={() => {
          setClickCount((prev) => prev + 1)
        }}
        style={{
          cursor: 'pointer',
          backgroundColor: '#aaaaaa33',
          position: 'absolute',
          left: 26,
          top: 45,
          width: 134,
          height: 45,
        }}
      >
        click me {clickCount}
      </button>
    </div>
  )
}
