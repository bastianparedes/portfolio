import React from 'react'
import styles from './styles.module.css'
import { Section } from '../Common'
import constants from '../../config/constants.json'
import AboutSkill from './AboutSkill'

const About = (): JSX.Element => {
  return (
    <Section
      id={constants.NAV.BUTTONS.ABOUT.ID}
      title={constants.ABOUT.SECTION.TITLE}
    >
      <div className={styles.main}>
        <div className={styles.mainLeft}>
          <h2 className={styles.mainLeft__h2}>
            {constants.ABOUT.DESCRIPTION_PART_1}
          </h2>
          <p className={styles.mainLeft__p}>
            {constants.ABOUT.DESCRIPTION_PART_2}
          </p>
          <p className={styles.mainLeft__p}>
            {constants.ABOUT.DESCRIPTION_PART_3}
          </p>
          <button className={styles.buttonCv}>
            <a
              className={styles.buttonCv__a}
              href={constants.ABOUT.CV.LINK}
              target="_blank"
              rel="noreferrer noopener"
            >
              {constants.ABOUT.CV.MESSAGE}
            </a>
          </button>
        </div>
        <div>
          <h2 className={styles.mainRight__h2}>
            {constants.ABOUT.SKILLS.TITLE}
          </h2>
          <div className={styles.skillsContainer}>
            {constants.ABOUT.SKILLS.LIST.map((skill) => (
              <AboutSkill key={skill.NAME} src={skill.SRC} name={skill.NAME} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default About
