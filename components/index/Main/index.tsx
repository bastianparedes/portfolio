import React from 'react';

import About from '../About';
import Contact from '../Contact';
import Nav from '../Nav';
import Portfolio from '../Portfolio';
import styles from './styles.module.scss';

const Main = (): JSX.Element => {
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
