import React from 'react';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/global.css';
import '../styles/normalize.css';

import { LoaderProvider } from '../components/common/Loader/Context';

const _App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <title>Bastián Paredes</title>
      </Head>
      <LoaderProvider>
        <Component {...pageProps} />
      </LoaderProvider>
    </>
  );
};

export default _App;
