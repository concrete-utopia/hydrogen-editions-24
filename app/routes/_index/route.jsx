import { useLoaderData } from '@remix-run/react'
import { json } from '@shopify/remix-oxygen'
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
  const { bestSellers } = await storefront.query(
    BEST_SELLERS_QUERY,
  )

  return json({ bestSellers })
}

export default function Homepage() {
  /** @type {LoaderReturnData} */
  const data = useLoaderData()
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

/*
{
  handle: 'builder-tote',
  title: 'Builders Tote',
  variants: {
    nodes: [
      {
        availableForSale: true,
        price: {
          amount: '38.00',
          currencyCode: 'CAD',
        },
        compareAtPrice: {
          amount: '42.00',
          currencyCode: 'CAD',
        },
        image: {
          id: 'gid://Shopify/placeholder/1234',
          altText: 'Placeholder',
          height: '600',
          width: '400',
          url: 'https://cdn.shopify.com/s/files/1/0657/3811/3197/files/01-DevMode-Buildertote_PDP_3_fa8b6520-484a-47e7-818d-b217b04d31e6.png',
        },
      },
    ],
  },
*/

const BEST_SELLERS_QUERY = `#graphql
query BestSellers(
$country: CountryCode
$language: LanguageCode
) @inContext(country: $country, language: $language) {
bestSellers: collection(handle: "best-sellers") {
  id
  handle
  title
  description
  products(
    first: 6
  ) {
    nodes {
      id
      title
      handle
      variants (first: 1) {
        nodes {
          availableForSale
          price {
            amount
            currencyCode
          }
          compareAtPrice {
            amount
            currencyCode
          }
          image {
            id
            altText
            height
            width
            url
          }
        }
      }
    }
  }
}
}
`

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @template T @typedef {import('@remix-run/react').MetaFunction<T>} MetaFunction */
/** @typedef {import('storefrontapi.generated').FeaturedCollectionFragment} FeaturedCollectionFragment */
/** @typedef {import('storefrontapi.generated').RecommendedProductsQuery} RecommendedProductsQuery */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
