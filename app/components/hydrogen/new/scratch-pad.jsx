import React from 'react'
import { cva } from 'cva'

/**
 * Trying a new thing — starting from what I actually need
 */

function Dx({ props }) {
  return <Flex>{props.children}</Flex>
}

/**
 * Components:
 * - Box
 * - Flex
 * - Grid
 * - Section
 * - Container
 *
 * Common layout props:
 * - Padding: <enum | string>
 *      - p, px, py, pt, pr, pb, pl
 *      - Responsive<enum | string> 0 to 9, or any CSS value
 * - Margin
 *      - m, mx, my, mt, mr, mb, ml
 *      - Responsive<enum | string> -9 to 9, or any CSS value
 * - Width: width, minWidth, maxWidth <string>
 *      - https://tailwindcss.com/docs/width
 * - Height:
 *      - height: https://tailwindcss.com/docs/height
 *      - minHeight: https://tailwindcss.com/docs/min-height
 *      - maxHeight: https://tailwindcss.com/docs/max-height
 * - Position:
 *      - position: <enum> static | relative | absolute | fixed | sticky
 *      - inset: Responsive<enum | string>: -9 - 9, or any CSS value
 *      - top: Responsive<enum | string>: -9 - 9, or any CSS value
 *      - right: Responsive<enum | string>: -9 - 9, or any CSS value
 *      - bottom: Responsive<enum | string>: -9 - 9, or any CSS value
 *      - left: Responsive<enum | string>: -9 - 9, or any CSS value
 * - Flex children
 *      - flexBasis: Responsive<string> (e.g. 100%)
 *      - flexShrink: Responsive<Union<string, "0" | "1">>
 *      - flexGrow: Responsive<Union<string, "0" | "1">>
 * - Grid children
 *      - gridColumn: Responsive<string>
 *      - gridColumnStart: Responsive<string>
 *      - gridColumnEnd: Responsive<string>
 *      - gridRow: Responsive<string>
 *      - gridRowStart: Responsive<string>
 *      - gridRowEnd: Responsive<string>
 */

const flex = cva({
  base: 'flex',
  variants: {},
})

const Flex = React.forwardRef(
  ({ as, asChild, children, ...props }, ref) => {
    const Component = as ?? 'div'

    const className = flex(props) // Apply CVA-generated class

    if (asChild) {
      // If asChild is true, clone the only child and pass all props
      return React.cloneElement(
        React.Children.only(children),
        {
          ...props,
          ref,
          className: `${
            children.props.className || ''
          } ${className}`,
        },
      )
    }

    return (
      <Component ref={ref} className={className} {...props}>
        {children}
      </Component>
    )
  },
)

function DemoDX(props) {
  /**
   * Use Tailwind values for all prop values —
   * ideally dynamically via [`resolveConfig`](https://tailwindcss.com/docs/configuration#referencing-in-java-script);
   * if we need to [hard code it at the start](https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/config.full.js)
   * that's OK too. */
  return (
    <>
      {/* Strict Utopia… not thinking about naming, just using what's there */}
      <Flex
        l={163}
        t={305} // Default: null https://tailwindcss.com/docs/position - when there's a change
        w={374} // Default: 'auto' https://tailwindcss.com/docs/width
        h={150} // https://tailwindcss.com/docs/height
        horizontalResizing='fixed' // fixed | hug | auto ??
        verticalResizing=''
      >
        {props.children}
      </Flex>
      {/* Basic*/}
      <Flex
        left={'80px'}
        top={'105px'}
        width={'4'}
        height={'4'}
      >
        {props.children}
      </Flex>
      {/* Other ideas… */}
      {/* Responsive styles: `default, tablet, laptop, desktop` */}
      <Flex left={'80px'} top={'105px'} width={[3, 6, 9]}>
        {props.children}
      </Flex>
      {/* With min-max, array of objects for responsive */}
      <Flex
        left={'80px'}
        top={'105px'}
        width={{
          min: '8',
          width: 'full',
          max: 'prose',
        }}
      >
        {props.children}
      </Flex>
      {/* Prop shorthands */}
      <Flex l='10px' t='50px' w='80px' h='px'>
        {props.children}
      </Flex>
    </>
  )
}

// Define possible style variants and default props if needed
const box = cva({
  base: 'box-border p-0 m-0', // base classes including resetting padding and margin
  variants: {
    display: {
      none: 'hidden',
      block: 'block',
      inline: 'inline',
      inlineBlock: 'inline-block',
      flex: 'flex',
      inlineFlex: 'inline-flex',
    },
    position: {
      static: 'static',
      fixed: 'fixed',
      absolute: 'absolute',
      relative: 'relative',
      sticky: 'sticky',
    },
    // Add more Tailwind variants for other CSS properties as needed
  },
  compoundVariants: [
    // Compound variants can be used for responsive or state-based styling
  ],
  defaultVariants: {
    display: 'block',
  },
})

const Box = React.forwardRef(
  ({ as, asChild, children, ...props }, ref) => {
    const Component = as ?? 'div'
    const className = box(props) // Apply CVA-generated class

    if (asChild) {
      // If asChild is true, clone the only child and pass all props
      return React.cloneElement(
        React.Children.only(children),
        {
          ...props,
          ref,
          className: `${
            children.props.className || ''
          } ${className}`,
        },
      )
    }

    return (
      <Component ref={ref} className={className} {...props}>
        {children}
      </Component>
    )
  },
)
