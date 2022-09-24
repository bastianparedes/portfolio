import React from 'react'
import Head from 'next/head'
import Home from '../components/Home'
import Nav from '../components/Nav'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const App = (): JSX.Element => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <title>Bastián Paredes</title>
      </Head>
      <Home />
      <div
        style={{
          position: 'relative',
          backgroundColor: 'rgb(0, 85, 124)'
        }}
      >
        <Nav />
        <About />
        <Portfolio />
        <Contact />
      </div>
      <Footer />
    </>
  )
}

export default App
