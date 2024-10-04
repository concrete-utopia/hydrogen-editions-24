import React from 'react'

import { Column } from '@h2/new/Layout'
import Hero from './sections/hero'
import { useLogRerender } from '~/helpers/logging'

export default function Homepage() {
  useLogRerender('Homepage')

  // this seems to break inside Utopia:
  const [ID] = React.useState(
    Math.random().toString(36).substring(2, 6),
  )
  const renderCount = React.useRef(0)
  renderCount.current = renderCount.current + 1
  console.log(
    `root route ${ID} render ${renderCount.current}`,
  )
  React.useEffect(() => {
    console.log(
      `root route ${ID} mount ${renderCount.current}`,
    )
    return () => {
      console.log(
        `root route ${ID} unmount ${renderCount.current}`,
      )
    }
  }, [])

  return (
    <Column>
      <Hero />
    </Column>
  )
}
