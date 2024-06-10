import React from 'react'
import Link from '@h2/Link'
import { Button } from '@h2/new/Button'
import {
  Container,
  Column,
  Grid,
  Section,
  Row,
} from '@h2/new/Layout'
import { Heading, Span, Text } from '@h2/new/Text'
import { cx } from '@h2/new/utils'
import {
  Form,
  NavLink,
  useLocation,
} from '@remix-run/react'
import { useRootLoaderData } from '~/lib/root-data'

/**
 * @param {FooterQuery & {shop: HeaderQuery['shop']}}
 */
export function Footer({ menu, shop }) {
  const { pathname } = useLocation()

  const bgColor =
    pathname === '/products/builder-keyboard'
      ? 'bg-accent'
      : 'bg-white'

  return (
    <Section
      className={cx(['pt-24', 'bg-darkGray'])}
      as='footer'
    >
      {/* {menu && shop?.primaryDomain?.url && (
        <FooterMenu menu={menu} primaryDomainUrl={shop.primaryDomain.url} />
      )} */}
      <div className='absolute top-0 right-0 flex justify-around w-full -translate-y-7'>
        <div className='flex gap-8 translate-x-24 -translate-y-6'>
          <span className='aspect-square w-14 bg-darkGray'></span>
          <span className='-translate-y-8 aspect-square w-14 bg-darkGray'></span>
        </div>
        <div></div>
        <div className='flex translate-x-40'>
          <span
            className={cx([
              bgColor,
              'aspect-square',
              'w-14',
            ])}
          ></span>
          <span
            className={cx([
              bgColor,
              'translate-y-7',
              'aspect-square',
              'w-14',
            ])}
          ></span>
        </div>
      </div>
      <Container className='pb-16 border-b border-white/10'>
        <Grid columns={6}>
          <Column gap='s' className='col-span-3'>
            <Heading size='m' color='white' uppercase>
              Keep in touch
            </Heading>
            <Text
              size='s'
              wrap='balance'
              width='narrow'
              className='text-white/60'
            >
              Sign up for exclusive deals and early access
              to our newest products.
            </Text>
            <Form className='flex gap-3'>
              <input
                type='email'
                placeholder='Email address'
                className='rounded-full bg-white/10 min-w-64'
              />
              <Button rounded='full'>Sign up</Button>
            </Form>
          </Column>
          <Column gap='s'>
            <Heading size='m' color='white' uppercase>
              Browse
            </Heading>
            <Column>
              <Link className='pb-1'>
                <Text size='s' className='text-white/60'>
                  New Arrivals
                </Text>
              </Link>
              <Link className='pb-1'>
                <Text size='s' className='text-white/60'>
                  Best Sellers
                </Text>
              </Link>
              <Link className='pb-1'>
                <Text size='s' className='text-white/60'>
                  Women
                </Text>
              </Link>
              <Link className='pb-1'>
                <Text size='s' className='text-white/60'>
                  Men
                </Text>
              </Link>
              <Link className='pb-1'>
                <Text size='s' className='text-white/60'>
                  Sale
                </Text>
              </Link>
              <Link className='pb-1'>
                <Text size='s' className='text-white/60'>
                  Gifts
                </Text>
              </Link>
            </Column>
          </Column>
          <Column gap='s'>
            <Heading size='m' color='white' uppercase>
              Support
            </Heading>
            <Column>
              <Link className='pb-1'>
                <Text size='s' className='text-white/60'>
                  Contact Us
                </Text>
              </Link>
              <Link className='pb-1'>
                <Text size='s' className='text-white/60'>
                  Shipping
                </Text>
              </Link>
              <Link className='pb-1'>
                <Text size='s' className='text-white/60'>
                  Returns
                </Text>
              </Link>
              <Link className='pb-1'>
                <Text size='s' className='text-white/60'>
                  FAQs
                </Text>
              </Link>
              <Link className='pb-1'>
                <Text size='s' className='text-white/60'>
                  Gift Cards
                </Text>
              </Link>
            </Column>
          </Column>
          <Column gap='s'>
            <Heading size='m' color='white' uppercase>
              About us
            </Heading>
            <Column>
              <Link className='pb-1'>
                <Text size='s' className='text-white/60'>
                  Our Story
                </Text>
              </Link>
              <Link className='pb-1'>
                <Text size='s' className='text-white/60'>
                  Mission
                </Text>
              </Link>
              <Link className='pb-1'>
                <Text size='s' className='text-white/60'>
                  Careers
                </Text>
              </Link>
            </Column>
          </Column>
        </Grid>
      </Container>
      <Container py='xl'>
        <Row justify='between' align='center'>
          <Row gap='m' align='center'>
            <Link className='pb-1'>
              <IconX />
            </Link>
            <Link className='pb-1'>
              <IconFacebook />
            </Link>
            <Link className='pb-1'>
              <IconInstagram />
            </Link>
            <Link className='pb-1'>
              <IconTiktok />
            </Link>
            <Link className='pb-1'>
              <IconYoutube />
            </Link>
            <Link className='pb-1'>
              <IconShop />
            </Link>
          </Row>
          <Text size='s' className='text-white/60'>
            &copy; {new Date().getFullYear()} Powered by
            Shopify
          </Text>
        </Row>
      </Container>
      <div className='relative w-full overflow-hidden h-44'>
        <Span
          uppercase
          color='white'
          font='display'
          className='absolute text-right -translate-x-1/2 whitespace-nowrap left-1/2'
          style={{ fontSize: 'calc(3em + 9.5vw)' }}
        >
          Builders&nbsp;Supply
        </Span>
      </div>
    </Section>
  )
}

/**
 * @param {{
 *   menu: FooterQuery['menu'];
 *   primaryDomainUrl: HeaderQuery['shop']['primaryDomain']['url'];
 * }}
 */
function FooterMenu({ menu, primaryDomainUrl }) {
  const { publicStoreDomain } = useRootLoaderData()

  return (
    <nav className='footer-menu' role='navigation'>
      {(menu || FALLBACK_FOOTER_MENU).items.map((item) => {
        if (!item.url) return null
        // if the url is internal, we strip the domain
        const url =
          item.url.includes('myshopify.com') ||
          item.url.includes(publicStoreDomain) ||
          item.url.includes(primaryDomainUrl)
            ? new URL(item.url).pathname
            : item.url
        const isExternal = !url.startsWith('/')
        return isExternal ? (
          <a
            href={url}
            key={item.id}
            rel='noopener noreferrer'
            target='_blank'
          >
            {item.title}
          </a>
        ) : (
          <NavLink
            end
            key={item.id}
            prefetch='intent'
            to={url}
          >
            {item.title}
          </NavLink>
        )
      })}
    </nav>
  )
}

const FALLBACK_FOOTER_MENU = {
  id: 'gid://shopify/Menu/199655620664',
  items: [
    {
      id: 'gid://shopify/MenuItem/461633060920',
      resourceId: 'gid://shopify/ShopPolicy/23358046264',
      tags: [],
      title: 'Privacy Policy',
      type: 'SHOP_POLICY',
      url: '/policies/privacy-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633093688',
      resourceId: 'gid://shopify/ShopPolicy/23358013496',
      tags: [],
      title: 'Refund Policy',
      type: 'SHOP_POLICY',
      url: '/policies/refund-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633126456',
      resourceId: 'gid://shopify/ShopPolicy/23358111800',
      tags: [],
      title: 'Shipping Policy',
      type: 'SHOP_POLICY',
      url: '/policies/shipping-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633159224',
      resourceId: 'gid://shopify/ShopPolicy/23358079032',
      tags: [],
      title: 'Terms of Service',
      type: 'SHOP_POLICY',
      url: '/policies/terms-of-service',
      items: [],
    },
  ],
}

function IconX() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='15'
      height='15'
      fill='none'
    >
      <path
        fill='#fff'
        d='M9 6.3 14.4 0h-1.3L8.3 5.5 4.5 0H0l5.9 8.3L0 15h1.3l5.1-5.8 4.1 5.8H15L9 6.3ZM1.7 1h2l9.4 13h-2L1.8 1Z'
      />
    </svg>
  )
}

function IconFacebook() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='18'
      height='18'
      fill='none'
    >
      <path
        fill='#fff'
        d='M16.42.6c.27 0 .5.1.69.29.2.2.28.42.28.7v15.44a.98.98 0 0 1-.6.9.94.94 0 0 1-.38.07h-4.39v-6.7h2.25l.31-2.65h-2.56v-1.7c0-.4.1-.72.28-.93.18-.2.5-.32 1-.32h1.37V3.35c-.6-.06-1.27-.1-2-.1-1.02 0-1.84.3-2.46.9-.62.6-.93 1.44-.93 2.53v1.97H7.04v2.65h2.24V18H.98a1 1 0 0 1-.7-.28.94.94 0 0 1-.28-.7V1.59a.98.98 0 0 1 .6-.9.94.94 0 0 1 .38-.07h15.44V.6Z'
      />
    </svg>
  )
}

function IconInstagram() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='18'
      height='18'
      fill='none'
    >
      <path
        fill='#fff'
        d='M8.77 1.58c2.34 0 2.62.01 3.54.05.86.04 1.32.18 1.63.3A2.85 2.85 0 0 1 15.6 3.6c.12.32.27.78.3 1.64.05.92.06 1.2.06 3.54s-.01 2.62-.05 3.54c0 .56-.1 1.11-.3 1.63-.17.41-.35.7-.66 1.01-.3.3-.6.5-1.01.66-.31.12-.77.26-1.63.3-.92.04-1.2.05-3.54.05s-2.62 0-3.55-.05c-.55 0-1.1-.1-1.62-.3-.42-.16-.7-.35-1.01-.66-.31-.3-.5-.6-.66-1-.2-.52-.3-1.08-.3-1.64a63.3 63.3 0 0 1-.05-3.54c0-2.34 0-2.62.05-3.54.04-.86.18-1.32.3-1.63.16-.4.35-.7.66-1 .3-.3.6-.5 1-.66.32-.12.78-.27 1.63-.3.93-.05 1.2-.06 3.55-.06Zm0-1.58C6.39 0 6.09.01 5.15.05a6.9 6.9 0 0 0-2.13.4A4.58 4.58 0 0 0 .46 3.02a6.1 6.1 0 0 0-.4 2.13C0 6.1 0 6.4 0 8.77s.01 2.68.05 3.61c.04.94.2 1.57.4 2.13a4.53 4.53 0 0 0 2.57 2.57c.56.22 1.2.37 2.13.4.94.05 1.24.06 3.62.06 2.39 0 2.68 0 3.62-.05a6.9 6.9 0 0 0 2.13-.4 4.27 4.27 0 0 0 1.55-1.02c.49-.49.79-.98 1.01-1.56.22-.55.37-1.19.41-2.13.04-.93.05-1.23.05-3.6 0-2.4 0-2.69-.05-3.63a6.47 6.47 0 0 0-.4-2.13 4.27 4.27 0 0 0-1.02-1.55 4.35 4.35 0 0 0-1.55-1c-.68-.26-1.4-.4-2.13-.42A69 69 0 0 0 8.77 0Z'
      />
      <path
        fill='#fff'
        d='M8.8 4a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm0 7.43a2.92 2.92 0 1 1 0-5.85 2.92 2.92 0 0 1 0 5.85ZM13.43 5a1.05 1.05 0 1 0 0-2.1 1.05 1.05 0 0 0 0 2.1Z'
      />
    </svg>
  )
}

function IconTiktok() {
  return (
    <svg
      width='17'
      height='18'
      viewBox='0 0 17 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M9.01828 0H11.9983C11.9983 0 11.8283 3.82 16.1283 4.1V7.05C16.1283 7.05 13.8283 7.19 11.9983 5.79L12.0283 11.89C12.0283 12.9822 11.7043 14.0498 11.0973 14.9578C10.4903 15.8658 9.62761 16.5733 8.61838 16.9908C7.60915 17.4083 6.49875 17.517 5.4277 17.3032C4.35665 17.0894 3.3731 16.5627 2.60152 15.7897C1.82993 15.0167 1.30499 14.0322 1.09313 12.9608C0.881273 11.8893 0.992015 10.7791 1.41134 9.77065C1.83067 8.76218 2.53974 7.90076 3.44882 7.29542C4.35789 6.69008 5.42611 6.36802 6.51828 6.37H7.28828V9.4C6.78588 9.24432 6.24717 9.25106 5.74881 9.41927C5.25046 9.58747 4.81785 9.90858 4.51256 10.3369C4.20726 10.7652 4.04482 11.2789 4.04837 11.8048C4.05191 12.3308 4.22126 12.8422 4.5323 13.2664C4.84334 13.6905 5.28024 14.0058 5.78081 14.1673C6.28139 14.3287 6.82014 14.3282 7.32041 14.1658C7.82067 14.0033 8.25695 13.6872 8.56718 13.2625C8.8774 12.8377 9.04575 12.326 9.04828 11.8L9.01828 0Z'
        fill='white'
      />
    </svg>
  )
}

function IconYoutube() {
  return (
    <svg
      width='16'
      height='12'
      viewBox='0 0 16 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M15.68 2.22857C16 3.43857 16 6 16 6C16 6 16 8.56143 15.68 9.77143C15.5909 10.1122 15.4103 10.4233 15.157 10.6721C14.9037 10.9208 14.587 11.0982 14.24 11.1857C13.008 11.5 8 11.5 8 11.5C8 11.5 2.992 11.5 1.76 11.1857C1.41301 11.0982 1.09631 10.9208 0.842996 10.6721C0.589684 10.4233 0.40906 10.1122 0.32 9.77143C0 8.56143 0 6 0 6C0 6 0 3.43857 0.32 2.22857C0.512 1.53714 1.056 1.00286 1.76 0.814286C2.992 0.5 8 0.5 8 0.5C8 0.5 13.008 0.5 14.24 0.814286C14.944 1.00286 15.488 1.53714 15.68 2.22857ZM6.4 8.35714L10.56 6L6.4 3.64286V8.35714Z'
        fill='white'
      />
    </svg>
  )
}

function IconShop() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='38'
      height='16'
      fill='none'
    >
      <path
        fill='#fff'
        d='M16.44 5.28a3.02 3.02 0 0 0-2.92-1.78 2.88 2.88 0 0 0-2.28 1.2l-.06.06V.53a.1.1 0 0 0-.02-.06.1.1 0 0 0-.07-.03H9.04a.09.09 0 0 0-.06.03.1.1 0 0 0-.03.06v12.12c0 .02.01.05.03.06l.06.03h2.2c.02 0 .05 0 .06-.03a.1.1 0 0 0 .03-.06V7.48c0-1 .66-1.71 1.72-1.71 1.16 0 1.45.96 1.45 1.94v4.94c0 .02 0 .05.03.06.01.02.04.03.06.03h2.19c.02 0 .05 0 .06-.03a.1.1 0 0 0 .03-.06V7.42c0-.18 0-.35-.02-.53a4.67 4.67 0 0 0-.4-1.61ZM5.25 7.07s-1.12-.26-1.53-.37c-.41-.1-1.13-.33-1.13-.89 0-.55.58-.72 1.17-.72s1.24.14 1.3.8c0 .03 0 .05.02.07a.1.1 0 0 0 .07.02H7.3a.1.1 0 0 0 .09-.07.1.1 0 0 0 0-.04C7.28 3.76 5.45 3 3.76 3 1.74 3 .27 4.34.27 5.81c0 1.08.3 2.1 2.67 2.8l1.47.42c.6.16.91.42.91.82 0 .46-.66.78-1.3.78-.95 0-1.62-.35-1.67-.99a.1.1 0 0 0-.03-.06.1.1 0 0 0-.07-.02H.1a.1.1 0 0 0-.08.07.1.1 0 0 0-.01.04c.1 2 2 3.07 3.78 3.07 2.65 0 3.84-1.5 3.84-2.92 0-.66-.15-2.17-2.37-2.75ZM33.1 3.5a3.4 3.4 0 0 0-2.62 1.36V3.59a.1.1 0 0 0-.02-.07.09.09 0 0 0-.06-.02h-2.06a.09.09 0 0 0-.06.02.1.1 0 0 0-.03.07v11.88c0 .02.01.05.03.06l.06.03h2.2c.02 0 .05-.01.06-.03a.09.09 0 0 0 .03-.06v-3.9h.03c.35.53 1.3 1.18 2.55 1.18 2.35 0 4.3-1.97 4.3-4.63A4.5 4.5 0 0 0 33.1 3.5Zm-.2 6.98a2.3 2.3 0 0 1-2.2-1.4 2.39 2.39 0 0 1 .47-2.6 2.32 2.32 0 0 1 4 1.64 2.35 2.35 0 0 1-1.4 2.18c-.27.12-.57.18-.87.18Zm-11.15-7.5c-2.05 0-3.07.7-3.9 1.27l-.02.01a.2.2 0 0 0-.06.28l.81 1.4a.2.2 0 0 0 .23.1.2.2 0 0 0 .08-.04l.07-.05c.42-.36 1.1-.84 2.73-.97.91-.07 1.7.17 2.28.72.64.6 1.02 1.56 1.02 2.57 0 1.87-1.09 3.05-2.84 3.07-1.44 0-2.4-.77-2.4-1.89 0-.6.26-.98.78-1.37a.2.2 0 0 0 .06-.26l-.72-1.4a.21.21 0 0 0-.22-.1 3.33 3.33 0 0 0-1.84 3.14c.06 2.19 1.87 3.86 4.21 3.93h.28a4.84 4.84 0 0 0 4.8-5.02c0-2.6-1.88-5.4-5.35-5.4Z'
      />
    </svg>
  )
}
