import React from 'react';

import { BiDownArrowAlt } from 'react-icons/bi';
import Typewriter from 'typewriter-effect';

import MyParticles from './MyParticles';
import styles from './styles.module.scss';
import constants from '../../../config/constants';

const Home = (): JSX.Element => {
  return (
    <section className={styles.home} id={constants.NAV.BUTTONS.HOME.ID}>
      <MyParticles />
      <div className={styles.cuadro}>
        <h1 className={styles.myName}>{constants.HOME.NAME}</h1>
        <div className={styles.typewriterContainer}>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString(constants.HOME.JOB).start();
            }}
          />
        </div>
      </div>
      <a className={styles.btnDown} href={'#' + constants.NAV.BUTTONS.ABOUT.ID}>
        <BiDownArrowAlt />
      </a>
    </section>
  );
};

export default Home;
