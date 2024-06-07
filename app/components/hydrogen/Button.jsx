import React from 'react';
/** TODO: Move to CVA

import {cva} from 'cva';

const button = cva('button', {
    variants: {
        intent: {
            primary: [
                'bg-blue-500',
                'text-white',
                'border-transparent',
                'hover:bg-blue-600',
            ],
            secondary: [
                'bg-white',
                'text-gray-800',
                'border-gray-400',
                'hover:bg-gray-100',
            ],
        },
        size: {
            small: ['text-sm', 'py-1', 'px-2'],
            medium: ['text-base', 'py-2', 'px-4'],
        },
    },
    compoundVariants: [{intent: 'primary', size: 'medium', class: 'uppercase'}],
    defaultVariants: {
        intent: 'primary',
        size: 'medium',
    },
});

export const Button = ({className, intent, size, ...props}) => (
    <button className={button({intent, size, className})} {...props} />
);

*/

import {forwardRef} from 'react';
import {Link} from '@remix-run/react';
import clsx from 'clsx';
import {CartForm} from '@shopify/hydrogen';

import {missingClass} from '~/lib/utils';

export const Button = forwardRef(
  (
    {
      as = 'button',
      className = '',
      variant = 'primary',
      width = 'auto',
      ...props
    },
    ref,
  ) => {
    const Component = props?.to ? Link : as;

    const baseButtonClasses =
      'inline-block rounded-button font-medium text-center py-3 px-6';

    const variants = {
      primary: `${baseButtonClasses} bg-primary text-contrast`,
      secondary: `${baseButtonClasses} border border-primary/10 bg-contrast text-primary`,
      inline: 'border-b border-primary/10 leading-none pb-1',
    };

    const widths = {
      auto: 'w-auto',
      full: 'w-full',
    };

    const styles = clsx(
      missingClass(className, 'bg-') && variants[variant],
      missingClass(className, 'w-') && widths[width],
      className,
    );

    return <Component className={styles} {...props} ref={ref} />;
  },
);

export function AddToCartButton({
  analytics,
  children,
  lines,
  className = '',
  variant = 'primary',
  width = 'full',
  disabled,
  ...props
}) {
  return (
    <div className={className}>
      <CartForm
        route="/cart"
        inputs={{
          lines,
        }}
        action={CartForm.ACTIONS.LinesAdd}
      >
        {(fetcher) => {
          return (
            <>
              <input
                name="analytics"
                type="hidden"
                value={JSON.stringify(analytics)}
              />
              <Button
                type="submit"
                width={width}
                variant={variant}
                disabled={disabled ?? fetcher.state !== 'idle'}
                {...props}
              >
                {children}
              </Button>
            </>
          );
        }}
      </CartForm>
    </div>
  );
}
