import React from 'react'
import { defer, redirect } from '@shopify/remix-oxygen'
import { getSelectedProductOptions } from '@shopify/hydrogen'
import { Column } from '@h2/new/Layout'
import { getVariantUrl } from '~/lib/variants'
import { useLoaderData } from '@remix-run/react'
import { Suspense } from 'react'
import { Section } from '@h2/new/Layout'
import { Placeholder } from 'utopia-api'
import { Heading } from '@h2/new/Text'
import Hero from '/app/routes/products.$handle/sections/hero'
import { ReviewStatistics } from '/app/routes/products.$handle/sections/reviews'
import { Star } from '/app/components/Star'
import { Rectangle } from 'utopia-api'
import { Review } from '/app/routes/products.$handle/sections/reviews'
import { Row } from '@h2/new/Layout'
import { Spacer } from '@h2/new/Layout'
import { Spacer as Spacer_2 } from '/app/components/hydrogen/new/Layout.jsx'

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
    ...(await secondaryData(argsWithBuilderTote)),
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
async function secondaryData({
  context: { storefront },
  params: { handle },
}) {
  const [variants, solution, reviews, relatedProducts] =
    await Promise.all([
      storefront.query(VARIANTS_QUERY, {
        variables: { handle },
      }),
      storefront.query(SOLUTION_QUERY, {
        variables: { handle },
      }),
      storefront.query(REVIEWS_QUERY, {
        variables: { handle },
      }),
      storefront.query(RELATED_PRODUCTS_QUERY, {
        variables: { handle },
      }),
    ])

  const product = {
    ...solution.product,
    ...relatedProducts.product,
  }

  return {
    variants: variants.product.variants,
    solution: solution.product.solution,
    relatedProducts:
      relatedProducts.product.relatedProducts,
    reviews,
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
  const data = useLoaderData()
  const { review_count, review_avg, reviews } =
    data.reviews.reviews

  const customerReviews = reviews.references.nodes.map(
    (r, i) => {
      return {
        ...r,
        background:
          i === 0 ? 'black' : i === 4 ? 'accent' : 'white',
      }
    },
  )

  const reviewAvg = JSON.parse(review_avg.value).value
  const reviewCount = review_count.value
  return (
    <Column>
      <Hero />
      <Section
        minHeight={800}
        padding
        style={{ contain: 'layout', height: 1090 }}
      >
        <Column align='center' gap={9} style={{ gap: 0 }}>
          <Heading
            size='6xl'
            style={{ paddingBottom: '54px' }}
          >
            Don't take our word for it
          </Heading>
          <ReviewStatistics
            average={3.8}
            count={127}
            icon={<Star />}
          />
        </Column>
        <Row justify='end'>
          <Column style={{ height: 484 }}>
            <Review
              quote='This is a really nice tote bag, perfect size for carry on travel or day trips. I really like that it zips up. Sturdy and the handles don’t slip off your shoulder! I love it.”'
              customer='Lynn W.'
            />
            <Review
              quote='This is a really nice tote bag, perfect size for carry on travel or day trips. I really like that it zips up. Sturdy and the handles don’t slip off your shoulder! I love it.”'
              customer='Lynn W.'
            />
            <Review
              quote='This is a really nice tote bag, perfect size for carry on travel or day trips. I really like that it zips up. Sturdy and the handles don’t slip off your shoulder! I love it.”'
              customer='Lynn W.'
            />
            <Review
              quote='This is a really nice tote bag, perfect size for carry on travel or day trips. I really like that it zips up. Sturdy and the handles don’t slip off your shoulder! I love it.”'
              customer='Lynn W.'
            />
            <Review
              quote='This is a really nice tote bag, perfect size for carry on travel or day trips. I really like that it zips up. Sturdy and the handles don’t slip off your shoulder! I love it.”'
              customer='Lynn W.'
            />
            <Review
              quote='This is a really nice tote bag, perfect size for carry on travel or day trips. I really like that it zips up. Sturdy and the handles don’t slip off your shoulder! I love it.”'
              customer='Lynn W.'
            />
          </Column>
        </Row>
      </Section>
    </Column>
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
