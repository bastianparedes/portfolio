import React from 'react'
import '../styles/global.css'
import '../styles/normalize.css'
import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return <Component {...pageProps} />
}

export default MyApp
