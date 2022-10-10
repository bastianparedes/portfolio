import React from 'react'
import styles from './styles.module.scss'
import { BiDownArrowAlt } from 'react-icons/bi'
import Typewriter from 'typewriter-effect'
import constants from '../../../config/constants.json'
import MyParticles from './MyParticles'

const Home = (): JSX.Element => {
  return (
    <section id={constants.NAV.BUTTONS.HOME.ID} className={styles.home}>
      <MyParticles />
      <div className={styles.cuadro}>
        <h1 className={styles.myName}>{constants.HOME.NAME}</h1>
        <div className={styles.typewriterContainer}>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString(constants.HOME.JOB).start()
            }}
          />
        </div>
      </div>
      <a className={styles.btnDown} href={'#' + constants.NAV.BUTTONS.ABOUT.ID}>
        <BiDownArrowAlt />
      </a>
    </section>
  )
}

export default Home
