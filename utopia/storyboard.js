import * as React from 'react'
import { Storyboard, RemixScene } from 'utopia-api'

import { getLoadContext } from '../server-context-getter'
import { Image } from '@shopify/hydrogen'

const contextGetter = getLoadContext(
  {
    PUBLIC_STORE_DOMAIN: '438c73-58.myshopify.com',
    PUBLIC_STOREFRONT_API_TOKEN:
      'f9ee7cc0a41218b2ce1a5b76ac72cfd5',
  },
  {
    waitUntil: () => {},
  },
  // Demo cart ID obtained from https://mock.shop/create-cart
  'gid://shopify/Cart/Z2NwLXVzLWNlbnRyYWwxOjAxSEhKQ0I3RFoySlY3Mk5ORlhUVEo2RjhU',
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
