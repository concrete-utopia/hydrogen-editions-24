import React from 'react'

import { Column } from '@h2/new/Layout'
import Hero from './sections/hero'
import { useLogRerender } from '~/helpers/logging'

export default function Homepage() {
  useLogRerender('Homepage')

  return (
    <Column>
      <Hero />
    </Column>
  )
}
