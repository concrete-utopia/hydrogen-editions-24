import React from 'react'
import { Money } from '@shopify/hydrogen'
import { cx } from '@h2/new/utils'
import { Text } from '@h2/new/Text'

export function Price({ price, as = Text, ...props }) {
  return <Money data={price} as={as} {...props} />
}

export function isDiscounted(price, compareAtPrice) {
  if (compareAtPrice?.amount > price?.amount) {
    return true
  }
  return false
}

export function PriceCompareAt({
  price,
  compareAtPrice,
  as,
  className,
  ...props
}) {
  const Component = as ?? Text

  return isDiscounted(price, compareAtPrice) ? (
    <Money
      as={Component}
      className={cx('line-through', className)}
      data={compareAtPrice}
      {...props}
    />
  ) : null
}

export function PriceRange({
  as,
  product,
  separator = '-',
  className,
  ...props
}) {
  const Component = as ?? 'span'

  const { minVariantPrice, maxVariantPrice } =
    product.priceRange

  if (!minVariantPrice || !maxVariantPrice) {
    return null
  }

  return (
    <Component {...props}>
      <Money data={minVariantPrice} />
      {` ${separator} `}
      <Money data={maxVariantPrice} />
    </Component>
  )
}
