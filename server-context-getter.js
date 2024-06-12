import {
  cartGetIdDefault,
  cartSetIdDefault,
  createCartHandler,
  createCustomerAccountClient,
  createStorefrontClient,
} from '@shopify/hydrogen'
import { getStorefrontHeaders } from '@shopify/remix-oxygen'
import { CART_QUERY_FRAGMENT } from '~/lib/fragments'
import { AppSession } from '~/lib/session'

import * as Hydrogen from '@shopify/hydrogen'

console.log('Hydrogen', Hydrogen)

/** The getLoadContext is used both in server.js, and by Utopia's storyboard.js */
export const getLoadContext =
  (env, executionContext, mockCartID) =>
  async (request) => {
    const waitUntil = executionContext.waitUntil.bind(
      executionContext,
    )
    const [cache, session] = await Promise.all([
      caches.open('hydrogen'),
      AppSession.init(request, [env.SESSION_SECRET]),
    ])

    /**
     * Create Hydrogen's Storefront client.
     */
    const { storefront } = createStorefrontClient({
      cache,
      waitUntil,
      i18n: { language: 'EN', country: 'US' },
      publicStorefrontToken:
        env.PUBLIC_STOREFRONT_API_TOKEN,
      privateStorefrontToken:
        env.PRIVATE_STOREFRONT_API_TOKEN,
      storeDomain: env.PUBLIC_STORE_DOMAIN,
      storefrontId: env.PUBLIC_STOREFRONT_ID,
      storefrontHeaders: getStorefrontHeaders(request),
    })

    // /**
    //  * Create a client for Customer Account API.
    //  */
    // const customerAccount = createCustomerAccountClient({
    //   waitUntil,
    //   request,
    //   session,
    //   customerAccountId: env.PUBLIC_CUSTOMER_ACCOUNT_API_CLIENT_ID,
    //   customerAccountUrl: env.PUBLIC_CUSTOMER_ACCOUNT_API_URL,
    // });

    /*
     * Create a cart handler that will be used to
     * create and update the cart in the session.
     */

    const IS_TEST_ENVIRONMENT =
      typeof window !== 'undefined'

    const cart = createCartHandler({
      storefront,
      getCartId:
        mockCartID != null
          ? () => mockCartID
          : cartGetIdDefault(request.headers),
      setCartId: IS_TEST_ENVIRONMENT
        ? () => {}
        : cartSetIdDefault(),
      cartQueryFragment: CART_QUERY_FRAGMENT,
    })

    console.log(
      'Logging CartID for Utopia',
      cart.getCartId(),
    )

    return {
      session,
      storefront,
      // customerAccount,  // TODO UTOPIA createCustomerAccountClient is unavailable in the hydrogen import in the browser
      cart,
      env,
      waitUntil,
    }
  }
