import {forwardRef} from 'react';
import {CartForm} from '@shopify/hydrogen';

import {cva, cx} from './utils';
import Link from '@h2/Link';

const button = cva({
  base: [
    'font-medium',
    'whitespace-nowrap',
    'text-center',
    'py-3',
    'px-7',
    'leading-none',
    'flex',
    'items-center',
    'justify-center',
    'h-14',
    'gap-1',
    'text-sm',
  ],
  variants: {
    rounded: {
      base: 'rounded-button',
      full: 'rounded-full',
    },
    color: {
      black: 'bg-black text-white',
      accent: 'bg-accent text-black',
      white: 'bg-white text-black',
    },
  },
  defaultVariants: {
    color: 'accent',
    rounded: 'base',
  },
});

export const Button = forwardRef(
  ({as = 'button', children, rounded, color, className, ...props}, ref) => {
    const Component = props?.to ? Link : as;

    return (
      <Component
        ref={ref}
        data-h2="Button"
        className={button({
          color,
          rounded,
          className,
        })}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

export function AddToCartButton({
  analytics,
  children,
  lines,
  className,
  color,
  disabled,
  ...props
}) {
  return (
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
              color={color}
              className={cx('px-10', className)}
              disabled={disabled ?? fetcher.state !== 'idle'}
              {...props}
            >
              <AddToBagIcon />
              {children}
            </Button>
          </>
        );
      }}
    </CartForm>
  );
}

function AddToBagIcon({className}) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 21 21"
      width={21}
      height={21}
    >
      <path
        fill="#040404"
        fillRule="evenodd"
        d="M12.8 6.6V6l-.3-.9c-.3-.6-1-1-2-1-.8 0-1.6.4-2 1l-.2 1v.5h4.5Zm-6 .1V6c0-2 2-3.4 3.7-3.4 1.8 0 3.8 1.3 3.8 3.4v.7a3 3 0 0 1 2.2 3v2H15v-2c0-.9-.6-1.6-1.5-1.6h-6c-.8 0-1.5.7-1.5 1.5v4c0 .9.7 1.5 1.5 1.5h4v1.5h-4a3 3 0 0 1-3-3v-4a3 3 0 0 1 2.3-2.9Zm9 6.4c.4 0 .7.4.7.8V15h1.3a.8.8 0 0 1 0 1.5h-1.3V18a.8.8 0 0 1-1.5 0v-1.3h-1.2a.8.8 0 0 1 0-1.5H15V14c0-.4.4-.8.8-.8Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function ShopPayButton({variant, className}) {
  if (!variant.id) {
    return null;
  }

  const gid = variant.id;

  return (
    <Button
      color="black"
      to={`https://438c73-58.myshopify.com/cart/${gid.substring(
        gid.lastIndexOf('/') + 1,
      )}:1?payment=shop_pay`}
      className={className}
    >
      Buy with
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="57"
        height="15"
        fill="none"
      >
        <path
          fill="#fff"
          d="M14.6 5.2c-.4-1-1.3-1.6-2.6-1.6a2.6 2.6 0 0 0-2 1l-.1.1V1h-2v10.9H10V7.2c0-1 .6-1.6 1.6-1.6s1.3.9 1.3 1.8v4.4H15V6.6c0-.5-.2-1-.4-1.4ZM4.7 6.8l-1.3-.3c-.4-.1-1-.3-1-.8s.5-.7 1-.7 1.1.2 1.2.7v.1h2c0-2-1.7-2.6-3.2-2.6C1.6 3.2.2 4.4.2 5.7c0 1 .3 1.8 2.5 2.5l1.3.3c.5.2.8.4.8.8s-.6.7-1.2.7c-.8 0-1.4-.3-1.5-1H0l-.1.1C0 11 1.8 12 3.4 12c2.4 0 3.5-1.4 3.5-2.7 0-.5-.2-1.9-2.2-2.4Zm25.2-3.2a3 3 0 0 0-2.4 1.2V3.7h-2v10.6h2.2v-3.5c.3.5 1.2 1 2.3 1a4 4 0 0 0 3.9-4 4 4 0 0 0-4-4.2Zm-.2 6.2a2.1 2.1 0 1 1 1.9-1.3 2 2 0 0 1-1.9 1.3ZM19.6 3.1c-1.8 0-2.7.7-3.5 1.2a.2.2 0 0 0 0 .2l.7 1.3a.2.2 0 0 0 .3 0c.4-.3 1-.8 2.5-.9.8 0 1.5.2 2 .7a3 3 0 0 1 1 2.3c0 1.6-1 2.7-2.6 2.7-1.3 0-2.2-.7-2.2-1.7 0-.5.3-.9.7-1.2a.2.2 0 0 0 0-.2L18 6.2a.2.2 0 0 0-.2 0A3 3 0 0 0 16 8.8c0 2 1.7 3.5 3.8 3.5h.2c2.5 0 4.4-2 4.4-4.4 0-2.4-1.7-4.9-4.9-4.9Z"
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M38 1h16.9C56 1 57 1.8 57 3v9.3c0 1.2-1 2.1-2.1 2.1h-17c-1.1 0-2-1-2-2.1V3c0-1.1.9-2 2-2Zm3.8 7.2c1.4 0 2.4-1 2.4-2.4 0-1.5-1-2.5-2.4-2.5h-2.5a.1.1 0 0 0-.2.1v6.9a.1.1 0 0 0 .2 0h.9a.1.1 0 0 0 .1 0v-2a.1.1 0 0 1 .1 0h1.4Zm-.1-3.9c.7 0 1.3.6 1.3 1.5 0 .8-.6 1.4-1.3 1.4h-1.3a.1.1 0 0 1 0-.1V4.5a.1.1 0 0 1 0-.2h1.3Zm2.8 4.8a1.3 1.3 0 0 1 .5-1.2c.4-.3 1-.4 1.8-.4h.9v-.3c0-.6-.4-.8-1-.8-.5 0-.9.2-1 .6h-1a.1.1 0 0 1 0-.1c0-.8.7-1.4 2-1.4 1.5 0 2 .7 2 2v2.7a.1.1 0 0 1 0 .2h-1a.1.1 0 0 1 0-.2V10h-.1c-.4.3-.8.5-1.5.5-1 0-1.6-.5-1.6-1.4Zm3.2-.6v-.3l-1.2.1c-.6 0-1 .3-1 .7 0 .4.4.6 1 .6.7 0 1.2-.4 1.2-1.1Zm2 3.1v.8a.1.1 0 0 0 0 .2h.5c.9 0 1.7-.3 2.1-1.5l2-5.3a.1.1 0 0 0 0-.1h-1.1L52 9.2a.1.1 0 0 1-.3 0l-1.2-3.4a.1.1 0 0 0-.1 0h-1a.1.1 0 0 0 0 .1l1.8 4.8v.2a1 1 0 0 1-1.1.8h-.4a.1.1 0 0 0-.1 0Z"
          clipRule="evenodd"
        />
      </svg>
    </Button>
  );
}
