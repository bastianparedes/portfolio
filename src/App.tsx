import React from 'react'
import 'normalize.css'
import Home from './components/Home'
import Nav from './components/Nav'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = (): JSX.Element => {
  return (
    <>
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
