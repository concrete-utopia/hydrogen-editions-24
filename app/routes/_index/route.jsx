import { defer } from '@shopify/remix-oxygen'
import {
  Await,
  useLoaderData,
  Link,
} from '@remix-run/react'
import { Suspense } from 'react'
import { Image, Money } from '@shopify/hydrogen'
import { Column } from '@h2/new/Layout'
import Hero from './sections/hero'
import BestSellers from './sections/best-sellers'
import Collections from './sections/collections'
import FeaturedProducts from './sections/featured-products'
import OurPromise from './sections/our-promise'

/**
 * @type {MetaFunction}
 */
export const meta = () => {
  return [{ title: 'Builder Supply | Home' }]
}

/**
 * @param {LoaderFunctionArgs}
 */
export async function loader({ context: { storefront } }) {
  return null
}

export default function Homepage() {
  /** @type {LoaderReturnData} */
  // const data = useLoaderData();
  return (
    <Column>
      <Hero />
      <BestSellers />
      <Collections />
      <FeaturedProducts />
      <OurPromise />
    </Column>
  )
}

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @template T @typedef {import('@remix-run/react').MetaFunction<T>} MetaFunction */
/** @typedef {import('storefrontapi.generated').FeaturedCollectionFragment} FeaturedCollectionFragment */
/** @typedef {import('storefrontapi.generated').RecommendedProductsQuery} RecommendedProductsQuery */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
