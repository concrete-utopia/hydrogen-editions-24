import React from 'react'
import { Await } from '@remix-run/react'
import { Suspense } from 'react'
import { Aside } from '~/components/Aside'
import { Footer } from '~/components/Footer'
import { Header, NavLinks } from '~/components/Header'
import { CartMain } from '~/components/Cart'
import {
  PredictiveSearchForm,
  PredictiveSearchResults,
} from '~/components/Search'
import { useLogRerender } from '~/helpers/logging'

/**
 * @param {LayoutProps}
 */
export function Layout({
  cart,
  children = null,
  footer,
  header,
  isLoggedIn,
}) {
  useLogRerender('Layout')
  return (
    <div>
      <CartAside cart={cart} />
      <SearchAside />
      <MobileMenuAside
        menu={header?.menu}
        shop={header?.shop}
      />
      {header && (
        <Header
          header={header}
          cart={cart}
          isLoggedIn={isLoggedIn}
        />
      )}
      <main>{children}</main>
      <Suspense>
        <Await resolve={footer}>
          {(footer) => (
            <Footer
              menu={footer?.menu}
              shop={header?.shop}
            />
          )}
        </Await>
      </Suspense>
    </div>
  )
}

/**
 * @param {{cart: LayoutProps['cart']}}
 */
function CartAside({ cart }) {
  return (
    <Aside id='cart-aside' heading='CART'>
      <Suspense fallback={<p>Loading cart ...</p>}>
        <Await resolve={cart}>
          {(cart) => {
            return <CartMain cart={cart} layout='aside' />
          }}
        </Await>
      </Suspense>
    </Aside>
  )
}

function SearchAside() {
  return (
    <Aside id='search-aside' heading='SEARCH'>
      <div className='predictive-search'>
        <br />
        <PredictiveSearchForm>
          {({ fetchResults, inputRef }) => (
            <div>
              <input
                name='q'
                onChange={fetchResults}
                onFocus={fetchResults}
                placeholder='Search'
                ref={inputRef}
                type='search'
              />
              &nbsp;
              <button
                onClick={() => {
                  window.location.href = inputRef?.current
                    ?.value
                    ? `/search?q=${inputRef.current.value}`
                    : `/search`
                }}
              >
                Search
              </button>
            </div>
          )}
        </PredictiveSearchForm>
        <PredictiveSearchResults />
      </div>
    </Aside>
  )
}

/**
 * @param {{
 *   menu: HeaderQuery['menu'];
 *   shop: HeaderQuery['shop'];
 * }}
 */
function MobileMenuAside({ menu, shop }) {
  return (
    menu &&
    shop?.primaryDomain?.url && (
      <Aside id='mobile-menu-aside' heading='MENU'>
        <NavLinks
          menu={menu}
          viewport='mobile'
          primaryDomainUrl={shop.primaryDomain.url}
        />
      </Aside>
    )
  )
}

/**
 * @typedef {{
 *   cart: Promise<CartApiQueryFragment | null>;
 *   children?: React.ReactNode;
 *   footer: Promise<FooterQuery>;
 *   header: HeaderQuery;
 *   isLoggedIn: Promise<boolean>;
 * }} LayoutProps
 */

/** @typedef {import('storefrontapi.generated').CartApiQueryFragment} CartApiQueryFragment */
/** @typedef {import('storefrontapi.generated').FooterQuery} FooterQuery */
/** @typedef {import('storefrontapi.generated').HeaderQuery} HeaderQuery */
