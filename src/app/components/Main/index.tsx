import React from 'react';

import styles from './styles.module.scss';
import About from '../About';
import Contact from '../Contact';
import Nav from '../Nav';
import Portfolio from '../Portfolio';

const Main = () => {
  return (
    <main className={styles.main}>
      <Nav />
      <About />
      <Portfolio />
      <Contact />
    </main>
  );
};

export default Main;
