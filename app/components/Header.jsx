import Link from '@h2/Link'
import { Container, Row, Grid } from '@h2/new/Layout'
import { cx } from '@h2/new/utils'
import { useLocation } from '@remix-run/react'
import { useRootLoaderData } from '~/lib/root-data'

export function Header() {
  const { pathname } = useLocation()

  const linkColor =
    pathname === '/' ||
    pathname === '/products/builder-keyboard'
      ? 'text-white'
      : 'text-black'

  const bgColor =
    pathname === '/' ||
    pathname === '/products/builder-keyboard'
      ? 'bg-white/10'
      : 'bg-white'

  const linkClass = cx(
    bgColor,
    linkColor,
    'flex',
    'items-center',
    'justify-center',
    'rounded-full',
    'w-12',
    'aspect-square',
  )

  return (
    <header className='absolute top-0 z-50 w-full py-4'>
      <Container>
        <Grid columns={3} align='center'>
          <Row gap='m'>
            <MenuToggle className={linkClass} />
            <SearchToggle className={linkClass} />
          </Row>
          <Link className='text-center' to='/'>
            <Logo className={cx('inline', linkColor)} />
          </Link>
          <Row align='center' justify='end' gap='m'>
            <Link
              prefetch='intent'
              to='/account'
              className={linkClass}
            >
              <IconAccount />
            </Link>
            <a href='#cart-aside' className={linkClass}>
              <IconCart />
            </a>
          </Row>
        </Grid>
      </Container>
    </header>
  )
}

export function NavLinks({
  menu,
  primaryDomainUrl,
  viewport,
}) {
  const { publicStoreDomain } = useRootLoaderData()
  const className = `header-menu-${viewport}`

  function closeAside(event) {
    if (viewport === 'mobile') {
      event.preventDefault()
      window.location.href = event.currentTarget.href
    }
  }

  return (
    <nav className={className} role='navigation'>
      {viewport === 'mobile' && (
        <Link onClick={closeAside} prefetch='intent' to='/'>
          Home
        </Link>
      )}
      {(menu || FALLBACK_HEADER_MENU).items.map((item) => {
        if (!item.url) return null

        // if the url is internal, we strip the domain
        const url =
          item.url.includes('myshopify.com') ||
          item.url.includes(publicStoreDomain) ||
          item.url.includes(primaryDomainUrl)
            ? new URL(item.url).pathname
            : item.url
        return (
          <Link
            className='header-menu-item'
            key={item.id}
            onClick={closeAside}
            prefetch='intent'
            to={url}
          >
            {item.title}
          </Link>
        )
      })}
    </nav>
  )
}

function MenuToggle({ className }) {
  return (
    <a className={className} href='#mobile-menu-aside'>
      <IconMenu />
    </a>
  )
}

function SearchToggle({ className }) {
  return (
    <a className={className} href='#search-aside'>
      <IconSearch />
    </a>
  )
}

const FALLBACK_HEADER_MENU = {
  id: 'gid://shopify/Menu/199655587896',
  items: [
    {
      id: 'gid://shopify/MenuItem/461609500728',
      resourceId: null,
      tags: [],
      title: 'Collections',
      type: 'HTTP',
      url: '/collections',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609533496',
      resourceId: null,
      tags: [],
      title: 'Blog',
      type: 'HTTP',
      url: '/blogs/journal',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609566264',
      resourceId: null,
      tags: [],
      title: 'Policies',
      type: 'HTTP',
      url: '/policies',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609599032',
      resourceId: 'gid://shopify/Page/92591030328',
      tags: [],
      title: 'About',
      type: 'PAGE',
      url: '/pages/about',
      items: [],
    },
  ],
}

function Logo({ className }) {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      width='106'
      height='90'
      fill='none'
    >
      <path
        fill='currentColor'
        d='M7.3 23.6c0 .3 0 .6-.2.9l-.5.6-.4.2-.1.2v.1l.6.4c.2 0 .3.3.4.6.2.2.2.5.2.8 0 .3 0 .6-.3 1a2 2 0 0 1-1.2.8 6 6 0 0 1-.8 0h-.4c-.6 0-1-.1-1.5-.5-.3-.4-.5-.8-.5-1.3 0-.3 0-.6.2-.9.1-.3.3-.5.5-.6l.4-.3.1-.1v-.2l-.6-.3-.5-.6-.1-.8c0-.6.2-1.1.6-1.4.4-.4 1-.6 1.6-.6 1.7 0 2.5.7 2.5 2ZM2.6 38.9c0-1.3.7-2 2.2-2l1 .1c.2 0 .4 0 .6.2.3.2.5.4.6.7l.3.9c0 .7-.3 1.3-1 1.6l-.5.2a7.8 7.8 0 0 1-1.8 0l-.6-.2c-.6-.4-.8-.9-.8-1.5Zm6-17.3c-.7 0-1.2-.1-1.6-.5-.4-.3-.6-.8-.6-1.3 0-.4 0-.7.2-1l.8-.7.6-.2h9.2c.2 0 .4 0 .6.2.3.2.6.4.7.7l.2 1c0 1.2-.9 1.9-2.7 1.9H8.6Zm.2 11.5c-.7 0-1.3-.1-1.8-.5-.4-.3-.6-.8-.6-1.4 0-.7.3-1.3 1-1.6.1-.2.3-.2.4-.2h8.9c.6 0 1.1 0 1.5.4.3.4.5.8.5 1.4 0 .5-.2 1-.5 1.4a2 2 0 0 1-1.5.5H8.8Zm-.5 11.4A2 2 0 0 1 7 44c-.3-.4-.5-.8-.5-1.4a1.8 1.8 0 0 1 1.4-1.8h8.8a2 2 0 0 1 1.5.5c.4.3.6.8.6 1.3 0 .6-.2 1-.6 1.4-.3.3-.9.5-1.5.5H8.3Zm9.5-21c0-.6.2-1 .6-1.3.4-.4 1-.5 1.7-.5 1.6 0 2.5.6 2.5 1.9l-.3 1a2 2 0 0 1-1.3.8h-.8c-1.6 0-2.4-.6-2.4-1.8Zm0 11.6c0-1.3.8-2 2.5-2 .7 0 1.2.2 1.6.5.4.4.6.8.6 1.4 0 .3 0 .6-.2 1 0 .2-.2.4-.5.5l-.4.3v.1c0 .1 0 .2.2.3l.7.7.2.9c0 .6-.2 1-.6 1.5-.3.3-1 .4-2 .4-.6 0-1-.2-1.5-.5-.4-.3-.6-.8-.6-1.4 0-.3 0-.5.2-.8.2-.4.4-.6.6-.7l.4-.2V37l-.1-.2c-.7-.4-1-1-1-1.7Zm64.8 5.4c0-.6.2-1.1.6-1.4.4-.4 1-.6 1.6-.6h1l.6.2c.7.4 1 1 1 1.7 0 .3 0 .6-.2 1l-.6.6-.4.2v.3l.4.2.6.7.2.9c0 .3 0 .6-.2 1-.2.2-.5.5-.8.6l-.2.2.3.4c.6.3 1 .8 1 1.6l-.3 1c-.2.2-.4.5-.7.6a2 2 0 0 1-.6.2h-1c-.7 0-1.2 0-1.6-.4-.4-.4-.6-.8-.6-1.4 0-.8.3-1.3 1-1.7l.2-.2-.2-.2a3 3 0 0 1-.8-.8 2 2 0 0 1 0-1.9c.1-.3.3-.5.5-.6l.4-.2v-.2l-.2-.2c-.3-.1-.5-.4-.7-.7-.2-.3-.3-.6-.3-1Zm.1 19.1c0-.3.1-.7.3-1a1.9 1.9 0 0 1 1.2-.9h1c1.5 0 2.3.6 2.3 1.8 0 .4 0 .7-.3 1-.1.3-.4.5-.7.7l-.5.3h-1c-.7 0-1.3-.2-1.7-.5-.4-.4-.6-.8-.6-1.4Zm5.7-5.8c-.5 0-1-.2-1.3-.5a2 2 0 0 1 0-2.8c.3-.4.7-.6 1.2-.6h10.4l.2-.1-.3-.3-.4-.6c-.2-.3-.2-.6-.2-.9 0-.3 0-.6.2-.9.2-.3.3-.5.6-.6l.3-.2.1-.2V46l-.6-.4-.5-.6-.1-.8a1.9 1.9 0 0 1 .8-1.6l.3-.2.1-.1v-.1l-.4-.3a.9.9 0 0 1-.6-.6c-.2-.3-.3-.6-.3-1 0-.5.2-1 .6-1.3.4-.4 1-.5 1.7-.5h1l.6.3c.6.4.9.9.9 1.5 0 .8-.3 1.4-1 1.7-.1 0-.2.1-.2.3l.2.2c.7.4 1 1 1 1.7 0 .3 0 .6-.2 1l-.6.6-.4.2c0 .2 0 .3.2.3.3.2.6.4.7.7.2.3.3.6.3 1 0 .8-.3 1.3-.9 1.7-.2 0-.3.2-.3.2s0 .2.2.2c.7.5 1 1 1 1.8 0 .2 0 .5-.2.8l-.5.7-.4.2v.4l.6.4.4.6a1.9 1.9 0 0 1 0 1.6 1 1 0 0 1-.5.6l-.5.4c0 .2 0 .2.3.4.2 0 .4.3.6.6.2.3.3.6.3 1 0 1.3-.9 2-2.6 2-.7 0-1.2-.3-1.6-.6-.4-.4-.6-.8-.6-1.4a1.9 1.9 0 0 1 1-1.6l.2-.3v-.1l-.4-.2-.6-.7-.2-1c0-.5.2-1 .7-1.4.2-.1.2-.2.2-.3v-.1H88.3Zm8.4 7.7h.5c.4 0 .8.2 1.1.6.4.3.6.7.6 1.2s-.2 1-.6 1.4c-.4.4-.8.6-1.4.6h-8.4c-.6 0-1-.2-1.5-.6-.4-.3-.5-.8-.5-1.3s.1-1 .5-1.3c.4-.4.8-.6 1.3-.6h8.4ZM42.5 50.6h1.1l.6.3c.6.3 1 .8 1 1.6 0 .6-.3 1-.7 1.4-.4.3-1 .5-1.7.5H33l-.1.2.2.3c.5.4.7.8.7 1.4 0 .8-.4 1.4-1 1.8-.2 0-.2.1-.2.2v.1s.2 0 .3.2c.3.1.5.3.6.7a1.9 1.9 0 0 1 0 1.8c0 .3-.3.5-.5.6l-.4.4v.2l.5.2.5.6.2 1c0 .2 0 .5-.2.8l-.5.6-.4.3-.1.1.1.2.4.2.5.7.2.9-.3 1-.6.6c-.2 0-.3.2-.3.2l.1.2.5.4.4.6a1.9 1.9 0 0 1 0 1.6 1 1 0 0 1-.5.6l-.4.4-.2.1.1.1.6.5c.2 0 .3.3.4.5.2.3.2.6.2.8 0 .6-.2 1-.6 1.4-.4.3-1 .5-1.7.5h-1L30 77l-.7-.7c-.2-.3-.2-.6-.2-1 0-.2 0-.5.2-.8.1-.3.3-.5.6-.7l.2-.1.2-.2-.1-.1-.4-.3-.5-.7a2.1 2.1 0 0 1 0-1.7c0-.3.2-.5.4-.6l.5-.3v-.2l-.5-.3-.5-.6-.2-.9.3-.9c.1-.3.3-.5.6-.6l.4-.4-.4-.3c-.2-.1-.5-.3-.6-.6a1.9 1.9 0 0 1 .8-2.7l.2-.2H30l-.5-.4-.5-.6a2 2 0 0 1 0-1.8l.6-.6.3-.3.1-.1v-.1l-.4-.3-.6-.6-.2-1c0-.7.4-1.3 1-1.6.2-.1.2-.2.2-.3l-.2-.2c-.7-.3-1-.9-1-1.6 0-.6.2-1.1.6-1.5.4-.3 1-.5 1.7-.5h11.3Zm-5.8 15.3c-.6 0-1-.2-1.5-.5-.3-.4-.5-.9-.5-1.4 0-.5.2-1 .5-1.3a2 2 0 0 1 1.5-.6h5.9a4.8 4.8 0 0 1 1.6.2c.7.4 1 1 1 1.7 0 .5-.2 1-.6 1.3-.3.4-.8.6-1.3.6h-6.6Zm7.5-9.5c0-1.3.9-2 2.4-2a3 3 0 0 1 1.8.5c.4.4.6.8.6 1.4 0 .4 0 .7-.3 1-.1.3-.4.6-.7.7l-.2.3.2.2c.3.1.5.4.7.7.2.3.3.6.3 1 0 .3 0 .6-.3 1l-.7.7a4 4 0 0 1-.6.2h-.8a3 3 0 0 1-1.8-.5c-.4-.3-.6-.8-.6-1.4l.2-1c.2-.2.3-.4.6-.5l.4-.4V58l-.6-.4-.4-.6-.2-.7Zm17 12.6V44h4.5v21.2h11v3.9H61.3Zm-9.7-28.9v-25h31c1.9 0 3.5.3 4.8 1 1.3.8 2.3 1.8 3 3 .7 1.3 1 2.7 1 4.3 0 1.6-.3 3-1 4.3a7.3 7.3 0 0 1-3 3c-1.3.6-3 1-4.9 1H54.6v-3.8h27.2c1.1 0 2-.2 2.8-.5.7-.4 1.2-1 1.5-1.7.4-.7.6-1.4.6-2.3A5 5 0 0 0 86 21c-.3-.7-.8-1.2-1.6-1.6-.7-.3-1.6-.5-2.7-.5H56V40h-4.6ZM42 7h4.6v16.5a8.6 8.6 0 0 1-4.8 8c-1.6.6-3.3 1-5.4 1-2 0-3.8-.4-5.3-1.1a8.6 8.6 0 0 1-3.6-3.2c-.8-1.4-1.3-3-1.3-4.7V7h4.6v16c0 1 .2 2 .7 2.8a5 5 0 0 0 2 1.9 6.6 6.6 0 0 0 5.9 0c.8-.5 1.5-1.1 2-2A6 6 0 0 0 42 23V7Z'
      />
    </svg>
  )
}

function IconMenu({ className }) {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
    >
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M2 8c0-.6.4-1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Zm0 8c0-.6.4-1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Z'
        clipRule='evenodd'
      />
    </svg>
  )
}

function IconSearch({ className }) {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
    >
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M10.2 14.8a4.8 4.8 0 1 0 0-9.6 4.8 4.8 0 0 0 0 9.6Zm0 2a6.8 6.8 0 1 0 0-13.6 6.8 6.8 0 0 0 0 13.6Z'
        clipRule='evenodd'
      />
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='m18.4 20-5.1-5 1.4-1.4 5.1 5.1a1 1 0 0 1-1.4 1.4Z'
        clipRule='evenodd'
      />
    </svg>
  )
}

function IconAccount({ className }) {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
    >
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M12 9.3A2.1 2.1 0 1 0 12 5a2.1 2.1 0 0 0 0 4.2Zm0 2A4.1 4.1 0 1 0 12 3a4.1 4.1 0 0 0 0 8.2Zm0 4c-3.2 0-5.5 2.2-5.5 4.6a1 1 0 1 1-2 0c0-3.8 3.5-6.6 7.5-6.6s7.5 2.8 7.5 6.6a1 1 0 1 1-2 0c0-2.4-2.3-4.6-5.5-4.6Z'
        clipRule='evenodd'
      />
    </svg>
  )
}

function IconCart({ className }) {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
    >
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M10.5 4a2 2 0 0 0-2 2v1h7V6a2 2 0 0 0-2-2h-3Zm7 3V6a4 4 0 0 0-4-4h-3a4 4 0 0 0-4 4v1h-3a1 1 0 0 0-1 1v10.3A3.7 3.7 0 0 0 6.2 22h11.6a3.7 3.7 0 0 0 3.7-3.7V8c0-.6-.4-1-1-1h-3Zm-13 2v9.3A1.7 1.7 0 0 0 6.2 20h11.6a1.7 1.7 0 0 0 1.7-1.7V9h-15Z'
        clipRule='evenodd'
      />
    </svg>
  )
}
