import React from 'react'
import { forwardRef } from 'react'
import { cva, compose } from './utils'

const layoutCore = cva({
  variants: {
    p: {
      0: 'p-0',
      1: 'p-1',
      2: 'p-2',
      3: 'p-3',
      4: 'p-4',
      5: 'p-6',
      6: 'p-8',
      7: 'p-10',
      8: 'p-12',
      9: 'p-16',
      xs: 'p-2',
      s: 'p-4',
      m: 'p-6',
      l: 'p-8',
      xl: 'p-12',
      '2xl': 'p-16',
      '3xl': 'p-24',
      '4xl': 'p-32',
      '5xl': 'p-40',
    },
    px: {
      0: 'px-0',
      1: 'px-1',
      2: 'px-2',
      3: 'px-3',
      4: 'px-4',
      5: 'px-6',
      6: 'px-8',
      7: 'px-10',
      8: 'px-12',
      9: 'px-16',
      xs: 'px-2',
      s: 'px-4',
      m: 'px-6',
      l: 'px-8',
      xl: 'px-12',
      '2xl': 'px-16',
      '3xl': 'px-24',
      '4xl': 'px-32',
      '5xl': 'px-40',
    },
    py: {
      0: 'py-0',
      1: 'py-1',
      2: 'py-2',
      3: 'py-3',
      4: 'py-4',
      5: 'py-6',
      6: 'py-8',
      7: 'py-10',
      8: 'py-12',
      9: 'py-16',
      xs: 'py-2',
      s: 'py-4',
      m: 'py-6',
      l: 'py-8',
      xl: 'py-12',
      '2xl': 'py-16',
      '3xl': 'py-24',
      '4xl': 'py-32',
      '5xl': 'py-40',
    },
    m: {
      0: 'm-0',
      1: 'm-1',
      2: 'm-2',
      3: 'm-3',
      4: 'm-4',
      5: 'm-6',
      6: 'm-8',
      7: 'm-10',
      8: 'm-12',
      9: 'm-16',
      xs: 'm-2',
      s: 'm-4',
      m: 'm-6',
      l: 'm-8',
      xl: 'm-12',
      '2xl': 'm-16',
      '3xl': 'm-24',
      '4xl': 'm-32',
      '5xl': 'm-40',
    },
    mx: {
      0: 'mx-0',
      1: 'mx-1',
      2: 'mx-2',
      3: 'mx-3',
      4: 'mx-4',
      5: 'mx-6',
      6: 'mx-8',
      7: 'mx-10',
      8: 'mx-12',
      9: 'mx-16',
      xs: 'mx-2',
      s: 'mx-4',
      m: 'mx-6',
      l: 'mx-8',
      xl: 'mx-12',
      '2xl': 'mx-16',
      '3xl': 'mx-24',
      '4xl': 'mx-32',
      '5xl': 'mx-40',
    },
    my: {
      0: 'my-0',
      1: 'my-1',
      2: 'my-2',
      3: 'my-3',
      4: 'my-4',
      5: 'my-6',
      6: 'my-8',
      7: 'my-10',
      8: 'my-12',
      9: 'my-16',
      xs: 'my-2',
      s: 'my-4',
      m: 'my-6',
      l: 'my-8',
      xl: 'my-12',
      '2xl': 'my-16',
      '3xl': 'my-24',
      '4xl': 'my-32',
      '5xl': 'my-40',
    },
    resizeX: {
      hug: 'w-auto',
      fill: ['min-w-inherit', 'w-full'],
      fixed: '',
    },
    resizeY: {
      hug: 'h-auto',
      fill: ['min-h-inherit', 'h-full'],
      fixed: '',
    },
    gap: {
      0: 'gap-0',
      1: 'gap-1',
      2: 'gap-2',
      3: 'gap-3',
      4: 'gap-4',
      5: 'gap-6',
      6: 'gap-8',
      7: 'gap-10',
      8: 'gap-12',
      9: 'gap-16',
      xs: 'gap-2',
      s: 'gap-4',
      m: 'gap-6',
      l: 'gap-8',
      xl: 'gap-12',
      '2xl': 'gap-16',
      '3xl': 'gap-20',
      '4xl': 'gap-24',
      '5xl': 'gap-32',
    },
    gapX: {
      xs: 'gap-x-2',
      s: 'gap-x-4',
      m: 'gap-x-6',
      l: 'gap-x-8',
      xl: 'gap-x-12',
      '2xl': 'gap-x-16',
      '3xl': 'gap-x-20',
      '4xl': 'gap-x-24',
      '5xl': 'gap-x-32',
    },
    gapY: {
      xs: 'gap-y-2',
      s: 'gap-y-4',
      m: 'gap-y-6',
      l: 'gap-y-8',
      xl: 'gap-y-12',
      '2xl': 'gap-y-16',
      '3xl': 'gap-y-20',
      '4xl': 'gap-y-24',
      '5xl': 'gap-y-32',
    },
    position: {
      relative: 'relative',
      absolute: 'absolute',
      fixed: 'fixed',
      sticky: 'sticky',
      static: 'static',
    },
  },
  defaultVariants: {
    resizeX: 'hug',
    resizeY: 'hug',
  },
})

const layoutFlex = cva({
  variants: {
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      baseline: 'items-baseline',
      stretch: 'items-stretch',
    },
    justify: {
      center: 'justify-center',
      start: 'justify-start',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
    },
  },
  defaultVariants: {
    align: 'start',
    justify: 'start',
  },
})

const flex = cva({
  base: 'flex',
  variants: {
    direction: {
      row: 'flex-row',
      column: 'flex-col',
      right: 'flex-row',
      down: 'flex-col',
      left: 'flex-row-reverse',
      up: 'flex-col-reverse',
    },
    wrap: {
      true: 'flex-wrap',
      false: null,
    },
  },
  defaultVariants: {
    direction: 'row',
    wrap: false,
  },
})

export const Column = forwardRef(
  (
    {
      as,
      children,
      wrap,
      resizeX,
      resizeY,
      maxHeight,
      maxWidth,
      padded,
      direction = 'down',
      className,
      ...props
    },
    ref,
  ) => {
    const Component = as ?? 'div'

    const styles = compose(layoutCore, layoutFlex, flex)

    return (
      <Component
        ref={ref}
        className={styles({
          ...props,
          resizeX,
          resizeY,
          wrap,
          direction,
          className,
        })}
        data-h2='Column'
        {...props}
        style={{
          padding: padded ? 100 : undefined,
          maxWidth: maxWidth,
          maxHeight: maxHeight,
          ...props.style,
        }}
      >
        {children}
      </Component>
    )
  },
)

export const Row = forwardRef(
  (
    {
      as,
      children,
      wrap,
      resizeX,
      resizeY,
      maxHeight,
      maxWidth,
      padded,
      direction = 'right',
      className,
      ...props
    },
    ref,
  ) => {
    const Component = as ?? 'div'

    const styles = compose(layoutCore, layoutFlex, flex)

    return (
      <Component
        ref={ref}
        className={styles({
          ...props,
          resizeX,
          resizeY,
          wrap,
          direction,
          className,
        })}
        data-h2='Column'
        {...props}
        style={{
          padding: padded ? 100 : undefined,
          maxWidth: maxWidth,
          maxHeight: maxHeight,
          ...props.style,
        }}
      >
        {children}
      </Component>
    )
  },
)

const grid = cva({
  base: ['grid'],
  variants: {
    columns: {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
      5: 'grid-cols-5',
      6: 'grid-cols-6',
      7: 'grid-cols-7',
      8: 'grid-cols-8',
      9: 'grid-cols-9',
      10: 'grid-cols-10',
      11: 'grid-cols-11',
      12: 'grid-cols-12',
    },
    rows: {
      1: 'grid-rows-1',
      2: 'grid-rows-2',
      3: 'grid-rows-3',
      4: 'grid-rows-4',
      5: 'grid-rows-5',
      6: 'grid-rows-6',
      7: 'grid-rows-7',
      8: 'grid-rows-8',
      9: 'grid-rows-9',
      10: 'grid-rows-10',
      11: 'grid-rows-11',
      12: 'grid-rows-12',
    },
  },
})

export const Grid = forwardRef(
  (
    {
      children,
      className,
      gap = 'm',
      gapX,
      gapY,
      resizeX,
      resizeY,
      ...props
    },
    ref,
  ) => {
    const styles = compose(layoutCore, layoutFlex, grid)

    return (
      <div
        ref={ref}
        className={styles({
          ...props,
          gap,
          gapX,
          gapY,
          resizeX,
          resizeY,
          className,
        })}
        data-h2='Grid'
        {...props}
      >
        {children}
      </div>
    )
  },
)

const background = cva({
  base: [
    'grid',
    'absolute',
    'z-0',
    'inset-0',
    'pointer-events-none',
  ],
  variants: {
    overflow: {
      hidden: 'overflow-hidden',
      visible: 'overflow-visible',
    },
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      baseline: 'items-baseline',
      stretch: 'items-stretch',
    },
    justify: {
      center: 'justify-center',
      start: 'justify-start',
      end: 'justify-end',
      between: 'justify-between',
    },
    columns: {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
      5: 'grid-cols-5',
    },
    rows: {
      1: 'grid-rows-1',
      2: 'grid-rows-2',
      3: 'grid-rows-3',
      4: 'grid-rows-4',
      5: 'grid-rows-5',
    },
  },
  defaultVariants: {
    columns: 1,
    overflow: 'hidden',
  },
})

export const Background = forwardRef(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={background({ ...props, className })}
        data-h2='Background'
        {...props}
      >
        {children}
      </div>
    )
  },
)

const container = cva({
  base: [
    'mx-auto',
    'px-4',
    'md:px-8',
    'lg:px-10',
    'w-full',
    'relative',
    'z-10',
  ],
  variants: {
    fluid: {
      true: 'max-w-none',
      false: 'max-w-7xl',
    },
    paddingY: {
      s: 'py-16',
      m: 'py-32',
      l: 'py-56',
    },
    paddingTop: {
      s: 'pt-16',
      m: 'pt-32',
      l: 'pt-56',
    },
    paddingBottom: {
      s: 'pb-16',
      m: 'pb-32',
      l: 'pb-56',
    },
    paddingX: {
      s: 'py-16',
      m: 'py-32',
      l: 'py-56',
    },
    paddingLeft: {
      s: 'pt-16',
      m: 'pt-32',
      l: 'pt-56',
    },
    paddingRight: {
      s: 'pb-16',
      m: 'pb-32',
      l: 'pb-56',
    },
    marginBottom: {
      true: '-mb-[26rem]',
      false: null,
    },
  },
  defaultVariants: {
    fluid: false,
  },
})

export const Container = forwardRef(
  (
    {
      as,
      fluid,
      paddingTop,
      paddingBottom,
      marginBottom,
      resizeX,
      resizeY,
      children,
      className,
      ...props
    },
    ref,
  ) => {
    const Component = as ?? 'div'

    const styles = compose(layoutCore, container)

    return (
      <Component
        ref={ref}
        className={styles({
          fluid,
          paddingTop,
          paddingBottom,
          marginBottom,
          resizeX,
          resizeY,
          ...props,
          className,
        })}
        data-h2='Container'
        {...props}
      >
        {children}
      </Component>
    )
  },
)

const section = cva({
  base: ['w-full', 'relative', 'min-h-8'],
  variants: {
    padding: { true: 'py-16', false: null },
    defaultVariants: {
      padding: false,
    },
  },
})

export const Section = forwardRef(
  (
    {
      as,
      minHeight,
      children,
      padding,
      className,
      ...props
    },
    ref,
  ) => {
    const Component = as ?? 'section'

    return (
      <Component
        ref={ref}
        data-h2='Section'
        className={section({ padding, className })}
        {...props}
        style={{
          minHeight: minHeight,
          ...props.style,
        }}
      >
        {children}
      </Component>
    )
  },
)

export const Spacer = ({ height }) => (
  <div style={{ height: height ?? 36 }} />
)

export const HalfAndHalf = ({
  left,
  right,
  padded,
  gap,
  style,
}) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      padding: padded ? '20px' : 0,
      gap: gap ? '40px' : 0,
      ...style,
    }}
  >
    {left}
    {right}
  </div>
)
