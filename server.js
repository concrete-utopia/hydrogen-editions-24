// @ts-ignore
// Virtual entry point for the app
import * as remixBuild from 'virtual:remix/server-build'
import {
  cartGetIdDefault,
  cartSetIdDefault,
  createCartHandler,
  createStorefrontClient,
  storefrontRedirect,
  createCustomerAccountClient,
} from '@shopify/hydrogen'
import {
  createRequestHandler,
  getStorefrontHeaders,
} from '@shopify/remix-oxygen'
import { AppSession } from '~/lib/session'
import { CART_QUERY_FRAGMENT } from '~/lib/fragments'
import { getLoadContext } from 'server-context-getter'

/**
 * Export a fetch handler in module format.
 */
export default {
  /**
   * @param {Request} request
   * @param {Env} env
   * @param {ExecutionContext} executionContext
   */
  async fetch(request, env, executionContext) {
    try {
      /**
       * Open a cache instance in the worker and a custom session instance.
       */
      if (!env?.SESSION_SECRET) {
        throw new Error(
          'SESSION_SECRET environment variable is not set',
        )
      }

      // this is pretty ugly but we need to pre-create the Remix Context to have access to the storefront later in this function
      const loadContext = getLoadContext(
        env,
        executionContext,
      )(request)

      /**
       * Create a Remix request handler and pass
       * Hydrogen's Storefront client to the loader context.
       */
      const handleRequest = createRequestHandler({
        build: remixBuild,
        mode: process.env.NODE_ENV,
        getLoadContext: () => loadContext,
      })

      const response = await handleRequest(request)

      if (response.status === 404) {
        /**
         * Check for redirects only when there's a 404 from the app.
         * If the redirect doesn't exist, then `storefrontRedirect`
         * will pass through the 404 response.
         */
        return storefrontRedirect({
          request,
          response,
          storefront: loadContext.storefront,
        })
      }

      return response
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
      return new Response('An unexpected error occurred', {
        status: 500,
      })
    }
  },
}

/** @typedef {import('@shopify/remix-oxygen').AppLoadContext} AppLoadContext */
