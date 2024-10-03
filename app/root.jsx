import { Meta, Outlet, Links } from '@remix-run/react'

import './styles/app-generated.css'

export default function App() {
  return (
    <Root data-can-condense>
      <Outlet data-can-condense />
    </Root>
  )
}

function Root({ children }) {
  return (
    <html
      lang='en'
      style={{ backgroundColor: '#FFFFFF' }}
      data-can-condense
    >
      <head>
        <meta charSet='utf-8' />
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1'
        />
        <Meta />
        <Links />
      </head>
      <body style={{ minHeight: 1000 }}>{children}</body>
    </html>
  )
}
