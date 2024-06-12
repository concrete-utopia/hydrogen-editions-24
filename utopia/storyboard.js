import * as React from 'react'
import { Storyboard, RemixScene } from 'utopia-api'

import { getLoadContext } from '../server-context-getter'

const contextGetter = getLoadContext(
  {
    PUBLIC_STORE_DOMAIN: '438c73-58.myshopify.com',
    PUBLIC_STOREFRONT_API_TOKEN:
      'f9ee7cc0a41218b2ce1a5b76ac72cfd5',
  },
  {
    waitUntil: () => {},
  },
  // Demo cart ID logged from a locally running store
  'gid://shopify/Cart/Z2NwLWV1cm9wZS13ZXN0MTowMUhaUzVXRDFHMEpLQVQ5OVdaSkhEMzcwSA?key=90a8b665c9521e8ee9b4c514fc44319b',
)

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
      getLoadContext={contextGetter}
      commentId='bjt'
    />
  </Storyboard>
)
