import * as React from 'react'
import { useLogRerender } from '~/helpers/logging'

export default function Hero() {
  useLogRerender('Hero')

  return (
    <section className='w-full relative min-h-8 h-svh max-h-[64rem] bg-darkGray text-white'>
      <div className='min-h-inherit h-full mx-auto px-4 md:px-8 lg:px-10 w-full relative z-10 max-w-7xl pb-24 pt-36'>
        <div
          className='w-auto min-h-inherit h-full items-start justify-between flex flex-col'
          style={{
            top: 158,
            left: 96,
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
  const renderCount = useLogRerender('Counter')

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
