import React from 'react'
import { forwardRef } from 'react'
import { compose, cva, cx } from './utils'

const typography = cva({
  base: ['max-w-prose'],
  variants: {
    width: {
      narrow: 'max-w-prose-narrow', // 45ch / 720px / 28.125rem
      base: 'max-w-prose', // 65ch / 1040px / 65rem
      wide: 'max-w-prose-wide', // 80ch / 1280px / 80rem
      full: 'max-w-full', // 100%
    },
    weight: {
      light: 'font-light',
      regular: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
    wrap: {
      wrap: 'text-wrap',
      nowrap: 'text-nowrap',
      pretty: 'text-pretty',
      balance: 'text-balance',
    },
    color: {
      text: 'text-black/70',
      black: 'text-black',
      accent: 'text-accent',
      white: 'text-white',
      gray: 'text-gray',
    },
    truncate: {
      true: 'truncate',
      false: null,
    },
    uppercase: {
      true: 'uppercase',
      false: null,
    },
    fontStyle: {
      italic: 'italic',
      underline: 'underline',
      lineThrough: 'line-through',
      strike: 'strike', // Custom alternative to line-through
    },
    font: {
      sans: 'font-sans',
      serif: 'font-serif',
      mono: 'font-mono',
      text: 'font-text',
      display: 'font-display',
    },
    leading: {
      none: 'leading-none', // 1
      tight: 'leading-tight', // 1.25
      snug: 'leading-snug', // 1.375
      normal: 'leading-normal', // 1.5
      relaxed: 'leading-relaxed', // 1.625
      loose: 'leading-loose', // 2
    },
  },
  defaultVariants: {
    truncate: false,
    uppercase: false,
    wrap: 'pretty',
  },
})

const text = cva({
  variants: {
    size: {
      1: ['text-xs', 'leading-normal'], // 12/16 - 0.75rem
      2: ['text-sm', 'leading-normal'], // 14/20 - 0.875rem
      3: ['text-base', 'leading-normal'], // 16/24 - 1rem
      4: ['text-lg', 'leading-normal'], // 18/28 - 1.125rem
      5: ['text-xl', 'leading-normal'], // 20/28 - 1.25rem
      6: ['text-2xl', 'leading-tight'], // 24/32 - 1.5rem
      7: ['text-3xl', 'leading-tight'], // 30/36 - 1.875rem
      8: ['text-4xl', 'leading-tight'], // 36/40 - 2.25rem
      9: ['text-5xl', 'leading-tight'], // 48/48 - 3rem
      xs: ['text-xs', 'leading-normal'], // 12/16 - 0.75rem
      s: ['text-sm', 'leading-normal'], // 14/20 - 0.875rem
      m: ['text-base', 'leading-normal'], // 16/24 - 1rem
      l: ['text-lg', 'leading-normal'], // 18/28 - 1.125rem
      xl: ['text-xl', 'leading-normal'], // 20/28 - 1.25rem
      '2xl': ['text-2xl', 'laeding-normal'], // 24/32 - 1.5rem
      '3xl': ['text-3xl', 'laeding-tight'], // 30/36 - 1.875rem
      '4xl': ['text-4xl', 'laeding-tight'], // 36/40 - 2.25rem
      '5xl': ['text-5xl', 'laeding-tight'], // 48/48 - 3rem
      '6xl': ['text-6xl', 'laeding-tight'], // 60/60 - 3.75rem
    },
  },
  defaultVariants: {
    size: 'm',
  },
})

export const Text = forwardRef(
  (
    {
      as,
      children,
      truncate = false,
      uppercase = false,
      leading = 'snug',
      color = 'text',
      className,
      ...props
    },
    ref,
  ) => {
    const Component = as ?? 'span'

    const styles = compose(typography, text)

    return (
      <Component
        ref={ref}
        data-h2='Text'
        className={styles({
          ...props,
          truncate,
          uppercase,
          leading,
          color,
          text,
          className,
        })}
        {...props}
      >
        {children}
      </Component>
    )
  },
)

const heading = cva({
  base: ['tracking-tight'],
  variants: {
    size: {
      1: ['text-base', 'leading-normal'], // 16 - 1rem
      2: ['text-lg', 'leading-normal'], // 18 - 1.125rem
      3: ['text-xl', 'leading-normal'], // 20 - 1.25rem
      4: ['text-4xl', 'leading-tight'], // 36 - 2.25rem
      5: ['text-5xl', 'leading-tight'], // 48 - 3rem
      6: ['text-6xl', 'leading-none'], // 60 - 3.75rem
      7: ['text-7xl', 'leading-none'], // 72 - 4.5rem
      8: ['text-8xl', 'leading-none'], // 96 - 6rem
      9: ['text-9xl', 'leading-none'], // 128 - 8rem
      xs: ['text-base', 'leading-normal'], // 16 - 1rem
      s: ['text-lg', 'leading-normal'], // 18 - 1.125rem
      m: ['text-xl', 'leading-normal'], // 20 - 1.25rem
      l: ['text-3xl', 'leading-tight'], // 30 - 1.875rem
      xl: ['text-4xl', 'leading-tight'], // 36 - 2.25rem
      '2xl': ['text-5xl', 'leading-none'], // 48 - 3rem
      '3xl': ['text-6xl', 'leading-none'], // 60 - 3.75rem
      '4xl': ['text-7xl', 'leading-none'], // 72 - 4.5rem
      '5xl': ['text-8xl', 'leading-none'], // 96 - 6rem
      '6xl': ['text-9xl', 'leading-none'], // 128 - 8rem
    },
  },
  defaultVariants: {
    size: '2xl',
  },
})

export const Heading = forwardRef(
  (
    {
      as,
      children,
      truncate = false,
      uppercase = false,
      leading = 'tight',
      font = 'display',
      width,
      weight,
      align,
      wrap,
      color,
      fontStyle,
      className,
      ...props
    },
    ref,
  ) => {
    const Component = as ?? 'h2'

    const styles = compose(typography, heading)

    return (
      <Component
        ref={ref}
        data-h2='Heading'
        className={styles({
          truncate,
          uppercase,
          leading,
          width,
          weight,
          font,
          align,
          wrap,
          color,
          fontStyle,
          ...props,
          className,
        })}
        {...props}
      >
        {children}
      </Component>
    )
  },
)

const span = cva({
  base: 'inline',
  variants: {
    pill: {
      true: ['px-5', 'rounded-full'],
      false: null,
    },
    transparent: {
      true: ['opacity-50'],
      false: null,
    },
  },
})

export const Span = forwardRef(
  (
    {
      as,
      children,
      truncate = false,
      uppercase = false,
      pill = false,
      transparent = false,
      className,
      ...props
    },
    ref,
  ) => {
    const Component = as ?? 'span'

    const styles = compose(span, typography)

    return (
      <Component
        ref={ref}
        className={styles({
          ...props,
          truncate,
          uppercase,
          transparent,
          pill,
          className,
        })}
        {...props}
      >
        {children}
      </Component>
    )
  },
)

export const Em = forwardRef(
  (
    {
      as,
      children,
      truncate = false,
      uppercase = false,
      style = 'italic',
      className,
      ...props
    },
    ref,
  ) => {
    const Component = as ?? 'em'

    const styles = compose(typography)

    return (
      <Component
        ref={ref}
        className={styles({
          ...props,
          truncate,
          style,
          uppercase,
          className,
        })}
        {...props}
      >
        {children}
      </Component>
    )
  },
)

export const Strong = forwardRef(
  (
    {
      as,
      weight = 'bold',
      children,
      truncate = false,
      uppercase = false,
      className,
      ...props
    },
    ref,
  ) => {
    const Component = as ?? 'strong'

    const styles = compose(typography)

    return (
      <Component
        ref={ref}
        className={styles({
          ...props,
          truncate,
          weight,
          uppercase,
          className,
        })}
        {...props}
      >
        {children}
      </Component>
    )
  },
)

export function HighlightText({ text }) {
  const parts = text.split('*')

  return (
    <>
      {parts.map((part, index) => {
        if (index % 2 === 1) {
          return (
            <Span
              key={index}
              pill
              className='bg-accent'
              dangerouslySetInnerHTML={{ __html: part }}
            />
          )
        }
        return part
      })}
    </>
  )
}
