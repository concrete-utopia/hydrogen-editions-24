import React from 'react'

import { Column } from '@h2/new/Layout'
import Hero from './sections/hero'

export default function Homepage() {
  const renderCount = React.useRef(Math.random())
  renderCount.current = renderCount.current + 1
  console.log('Homepage render', renderCount.current)

  if (
    typeof performance !== 'undefined' &&
    typeof performance.measure !== 'undefined'
  ) {
    performance.measure(
      `Homepage route render ${renderCount.current}`,
      {
        start: performance.now(),
        duration: 50,
      },
    )
  }

  React.useEffect(() => {
    return function cleanup() {
      // we are about to unmount!
      console.log('Homepage unmount', renderCount.current)
      if (
        typeof performance !== 'undefined' &&
        typeof performance.measure !== 'undefined'
      ) {
        performance.measure(
          `Homepage route unmount ${renderCount.current}`,
          {
            start: performance.now(),
            duration: 50,
          },
        )
      }
    }
  }, [])

  return (
    <Column>
      <Hero />
    </Column>
  )
}
