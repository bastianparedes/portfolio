import React from 'react'
import Nav from '../Nav'
import About from '../About'
import Portfolio from '../Portfolio'
import Contact from '../Contact'
import styles from './styles.module.css'

const Main = (): JSX.Element => {
  return (
    <main className={styles.main}>
      <Nav />
      <About />
      <Portfolio />
      <Contact />
    </main>
  )
}

export default Main
