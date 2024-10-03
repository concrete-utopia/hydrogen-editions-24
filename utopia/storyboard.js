import * as React from 'react'
import { Storyboard, RemixScene } from 'utopia-api'

export var storyboard = (
  <Storyboard>
    <RemixScene
      data-label='Desktop'
      style={{
        position: 'absolute',
        width: 1440,
        height: 'max-content',
        left: 0,
        top: 0,
        overflow: 'hidden',
      }}
      commentId='bjt'
    />
    <div
      style={{
        backgroundColor: '#aaaaaa33',
        position: 'absolute',
        left: 1607,
        top: 190,
        width: 320,
        height: 130,
      }}
    />
  </Storyboard>
)
