import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'

const _document = (): JSX.Element => {
  return (
    <Html lang='es-ES'>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default _document
