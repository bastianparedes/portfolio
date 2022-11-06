import React from 'react'
import Head from 'next/head'
import '../styles/global.css'
import '../styles/normalize.css'
import type { AppProps } from 'next/app'

const _App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <title>Bastián Paredes</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default _App
