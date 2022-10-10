import React from 'react'
import Head from 'next/head'
import Home from '../components/index/Home'
import Main from '../components/index/Main'
import Footer from '../components/index/Footer'

const App = (): JSX.Element => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <title>Bastián Paredes</title>
      </Head>
      <Home />
      <Main />
      <Footer />
    </>
  )
}

export default App
