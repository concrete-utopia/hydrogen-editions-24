import React from 'react'
import clsx from 'clsx'
import { missingClass, formatText } from '~/lib/utils'

export function Text({
  as,
  className,
  color = 'default',
  format = false,
  size = 'copy',
  width = 'default',
  children,
  ...props
}) {
  const Component = as ?? 'span'

  const colors = {
    default: 'inherit',
    primary: 'text-primary/90',
    subtle: 'text-primary/50',
    accent: 'text-accent',
    contrast: 'text-contrast/90',
  }

  const sizes = {
    lead: 'text-lead font-medium',
    copy: 'text-copy',
    fine: 'text-fine subpixel-antialiased',
  }

  const widths = {
    default: 'max-w-prose',
    narrow: 'max-w-prose-narrow',
    wide: 'max-w-prose-wide',
  }

  const styles = clsx(
    missingClass(className, 'max-w-') && widths[width],
    missingClass(className, 'text-') && colors[color],
    sizes[size],
    className,
  )

  return (
    <Component {...props} className={styles}>
      {format ? formatText(children) : children}
    </Component>
  )
}

export function Heading({
  as,
  children,
  className = '',
  format,
  size = 'heading',
  width = 'default',
  ...props
}) {
  const Component = as ?? 'h2'

  const sizes = {
    display: 'font-bold text-display',
    heading: 'font-bold text-heading',
    lead: 'font-bold text-lead',
    copy: 'font-medium text-copy',
  }

  const widths = {
    default: 'max-w-prose',
    narrow: 'max-w-prose-narrow',
    wide: 'max-w-prose-wide',
  }

  const styles = clsx(
    missingClass(className, 'max-w-') && widths[width],
    missingClass(className, 'font-') && sizes[size],
    className,
  )

  return (
    <Component {...props} className={styles}>
      {format ? formatText(children) : children}
    </Component>
  )
}
