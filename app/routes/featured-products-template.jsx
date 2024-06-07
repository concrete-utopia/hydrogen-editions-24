import React from 'react'
import { defer, redirect } from '@shopify/remix-oxygen'
import { getSelectedProductOptions } from '@shopify/hydrogen'
import { getVariantUrl } from '~/lib/variants'
import Hero from './products.$handle/sections/hero'
import HighlightDetails from './products.$handle/sections/highlight-details'
import HighlightSolution from './products.$handle/sections/highlight-solution'
import { ReviewsSkeleton } from './products.$handle/sections/reviews'
import Spotlight from './products.$handle/sections/spotlight'
import Recommended from './products.$handle/sections/recommended'
import Marquee from './products.$handle/sections/marquee'
import { Await, useLoaderData } from '@remix-run/react'
import { Suspense } from 'react'

export const meta = ({ data }) => {
  return [
    {
      title: `Builder Supply | ${
        data?.product.title ?? ''
      }`,
    },
  ]
}

export async function loader(args) {
  const argsWithBuilderTote = {
    ...args,
    params: {
      ...args.params,
      handle: 'builder-tote',
    },
  }
  return defer({
    ...(await primaryData(argsWithBuilderTote)),
    ...secondaryData(argsWithBuilderTote),
  })
}

/**
 * Load data necessary for rendering content above the fold. This is the primary data
 * needed to render the page. If it's unavailable, the whole page should 400 or 500 error.
 */
async function primaryData({ context, params, request }) {
  const { handle } = params
  const { storefront } = context

  if (!handle) {
    throw new Error('Expected product handle to be defined')
  }

  const [{ product }, { details }] = await Promise.all([
    storefront.query(PRODUCT_QUERY, {
      variables: {
        handle,
        selectedOptions: getSelectedProductOptions(request),
      },
    }),
    // Add other queries here, so that they are loaded in parallel
    storefront.query(DETAILS_QUERY, {
      variables: { handle },
    }),
  ])

  if (!product?.id) {
    throw new Response(null, { status: 404 })
  }

  const firstVariant = product.variants.nodes[0]
  const firstVariantIsDefault = Boolean(
    firstVariant.selectedOptions.find(
      (option) =>
        option.name === 'Title' &&
        option.value === 'Default Title',
    ),
  )

  if (firstVariantIsDefault) {
    product.selectedVariant = firstVariant
  } else {
    // if no selected variant was returned from the selected options,
    // we redirect to the first variant's url with it's selected options applied
    if (!product.selectedVariant) {
      throw redirectToFirstVariant({ product, request })
    }
  }

  return {
    product,
    details,
  }
}

/**
 * Load data for rendering content below the fold. This data is deferred and will be
 * fetched after the initial page load. If it's unavailable, the page should still 200.
 */
function secondaryData({
  context: { storefront },
  params: { handle },
}) {
  const variants = storefront.query(VARIANTS_QUERY, {
    variables: { handle },
  })

  const solution = storefront.query(SOLUTION_QUERY, {
    variables: { handle },
  })

  const reviews = storefront.query(REVIEWS_QUERY, {
    variables: { handle },
  })

  const relatedProducts = storefront.query(
    RELATED_PRODUCTS_QUERY,
    {
      variables: { handle },
    },
  )

  const spotlight = storefront.query(SPOTLIGHT_QUERY, {
    variables: { handle },
  })

  return {
    variants,
    solution,
    reviews,
    relatedProducts,
    spotlight,
  }
}

function redirectToFirstVariant({ product, request }) {
  const url = new URL(request.url)
  const firstVariant = product.variants.nodes[0]

  return redirect(
    getVariantUrl({
      pathname: url.pathname,
      handle: product.handle,
      selectedOptions: firstVariant.selectedOptions,
      searchParams: new URLSearchParams(url.search),
    }),
    {
      status: 302,
    },
  )
}

export default function Product() {
  const { solution, reviews, relatedProducts, spotlight } =
    useLoaderData()
  return (
    <>
      <Hero />
      <Marquee />
      <HighlightDetails />
      <Suspense>
        <Await resolve={solution}>
          {(data) => (
            <HighlightSolution
              data={data.product.solution.reference}
            />
          )}
        </Await>
      </Suspense>
      <Suspense>
        <Await resolve={reviews}>
          {(data) => <ReviewsSkeleton data={data} />}
        </Await>
      </Suspense>
      <Suspense>
        <Await resolve={relatedProducts}>
          {(data) => (
            <Recommended
              data={
                data.product.relatedProducts.references
                  .nodes
              }
            />
          )}
        </Await>
      </Suspense>
      <Suspense>
        <Await resolve={spotlight}>
          {(data) => (
            <Spotlight
              data={data.product.spotlight.reference}
            />
          )}
        </Await>
      </Suspense>
    </>
  )
}

/***********************
 * DATA
 ***********************/

const PRODUCT_VARIANT_FRAGMENT = `#graphql
  fragment ProductVariant on ProductVariant {
    availableForSale
    compareAtPrice {
      amount
      currencyCode
    }
    id
    image {
      __typename
      id
      url
      altText
      width
      height
    }
    price {
      amount
      currencyCode
    }
    product {
      title
      handle
    }
    selectedOptions {
      name
      value
    }
    sku
    title
    unitPrice {
      amount
      currencyCode
    }
  }
`

const PRODUCT_FRAGMENT = `#graphql
  fragment Product on Product {
    id
    title
    description
    featuredImage {
      altText
      url
      width
      height
    }
    materials: metafield(namespace: "descriptors", key: "materials") {
      value
    }
    care_guide: metafield(namespace: "descriptors", key: "care_guide") {
      value
    }
    fit: metafield(namespace: "descriptors", key: "fit") {
      value
    }
    options {
      name
      values
    }
    selectedVariant: variantBySelectedOptions(selectedOptions: $selectedOptions, ignoreUnknownOptions: true, caseInsensitiveMatch: true) {
      ...ProductVariant
    }
    variants(first: 1) {
      nodes {
        ...ProductVariant
      }
    }
    seo {
      description
      title
    }
  }
  ${PRODUCT_VARIANT_FRAGMENT}
`

const DETAILS_QUERY = `#graphql
query Details(
  $country: CountryCode
  $handle: String!
  $language: LanguageCode
) @inContext(country: $country, language: $language) {
  details: product(handle: $handle) {
    features: metafield(namespace: "section", key: "features") {
      reference {
        ... on Metaobject {
          content: field(key: "content") {
            value
          }
          image: field(key: "image") {
            reference {
              ... on MediaImage {
                image {
                  altText
                  width
                  height
                  url
                }
              }
            }
          }
        }
      }
    }
  }
}`

const SOLUTION_QUERY = `#graphql
query Solution(
  $country: CountryCode
  $handle: String!
  $language: LanguageCode
) @inContext(country: $country, language: $language) {
  product(handle: $handle) {
    solution: metafield(namespace: "section", key: "solution") {
      reference {
        ... on Metaobject {
          title: field(key: "title") {
            value
          }
          description: field(key: "description") {
            value
          }
          learn_more: field(key: "learn_more") {
            value
          }
        }
      }
    }
  }
}`

const REVIEWS_QUERY = `#graphql
query Reviews(
  $country: CountryCode
  $handle: String!
  $language: LanguageCode
) @inContext(country: $country, language: $language) {
  reviews: product(handle: $handle) {
    review_count: metafield(namespace: "shopify", key: "rating_count") {
      value
    }
    review_avg: metafield(namespace: "shopify", key: "star_rating") {
      value
    }
    reviews: metafield(namespace: "shopify", key: "ratings") {
      references(first: 6) {
        nodes {
          ... on Metaobject {
            id
            quote: field(key: "quote") {
              value
            }
            customer: field(key: "customer") {
              value
            }
          }
        }
      }
    }
  }
}`

const RELATED_PRODUCTS_QUERY = `#graphql
query RelatedProducts(
  $country: CountryCode
  $handle: String!
  $language: LanguageCode
) @inContext(country: $country, language: $language) {
  product(handle: $handle) {
    relatedProducts: metafield(
      namespace: "shopify--discovery--product_recommendation"
      key: "related_products"
    ) {
      references(first: 12) {
        nodes {
          ... on Product {
            handle
            title
            variants(first: 1) {
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
  }
}`

const SPOTLIGHT_QUERY = `#graphql
query Spotlight(
  $country: CountryCode
  $handle: String!
  $language: LanguageCode
) @inContext(country: $country, language: $language) {
  product(handle: $handle) {
    spotlight: metafield(namespace: "section", key: "spotlight") {
      reference {
        ... on Metaobject {
          title: field(key: "title") {
            value
          }
          featuredImage: field(key: "featured_image") {
            reference {
              ... on MediaImage {
                image {
                  altText
                  width
                  height
                  url
                }
              }
            }
          }
          sale: field(key: "sale") {
            value
          }
          bgColor: field(key: "background_color") {
            value
          }
          product: field(key: "product") {
            reference {
              ... on Product {
                handle
                title
                variants(first: 1) {
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
      }
    }
  }
}`

const PRODUCT_QUERY = `#graphql
  query Product(
    $country: CountryCode
    $handle: String!
    $language: LanguageCode
    $selectedOptions: [SelectedOptionInput!]!
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      ...Product
    }
  }
  ${PRODUCT_FRAGMENT}
`

const PRODUCT_VARIANTS_FRAGMENT = `#graphql
  fragment ProductVariants on Product {
    variants(first: 250) {
      nodes {
        ...ProductVariant
      }
    }
  }
  ${PRODUCT_VARIANT_FRAGMENT}
`

const VARIANTS_QUERY = `#graphql
  query ProductVariants(
    $country: CountryCode
    $language: LanguageCode
    $handle: String!
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      ...ProductVariants
    }
  }
  ${PRODUCT_VARIANTS_FRAGMENT}
`

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @template T @typedef {import('@remix-run/react').MetaFunction<T>} MetaFunction */
/** @typedef {import('@remix-run/react').FetcherWithComponents} FetcherWithComponents */
/** @typedef {import('storefrontapi.generated').ProductFragment} ProductFragment */
/** @typedef {import('storefrontapi.generated').ProductVariantsQuery} ProductVariantsQuery */
/** @typedef {import('storefrontapi.generated').ProductVariantFragment} ProductVariantFragment */
/** @typedef {import('@shopify/hydrogen').VariantOption} VariantOption */
/** @typedef {import('@shopify/hydrogen/storefront-api-types').CartLineInput} CartLineInput */
/** @typedef {import('@shopify/hydrogen/storefront-api-types').SelectedOption} SelectedOption */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
