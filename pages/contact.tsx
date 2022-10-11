import React from 'react'
import Head from 'next/head'
import Main from '../components/contact/Main'
import Form from '../components/contact/Form'
import Footer from '../components/common/Footer'

const App = (): JSX.Element => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <title>Bastián Paredes</title>
      </Head>
      <Main>
        <Form />
      </Main>
      <Footer />
    </>
  )
}

export default App
