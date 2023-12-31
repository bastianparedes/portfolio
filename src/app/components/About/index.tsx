import React from 'react';

import Image from 'next/image';

import skills from './skills';
import styles from './styles.module.scss';
import constants from '../../../../config/constants';
import { Section } from '../Common';

const About = () => {
  return (
    <Section
      id={constants.NAV.BUTTONS.ABOUT.ID}
      title={constants.ABOUT.SECTION.TITLE}
    >
      <div className={styles.main}>
        <div className={styles.mainLeft}>
          <h2>{constants.ABOUT.DESCRIPTION_PART_1}</h2>
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
              rel="noreferrer noopener"
              target="_blank"
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
            {skills.map((skill) => (
              <div className={styles.skillCard} key={skill.name}>
                <div className={styles.skillImageContainer}>
                  <Image
                    alt={skill.name}
                    placeholder="blur"
                    src={skill.image}
                    style={{
                      height: '100%',
                      objectFit: 'contain',
                      width: '100%'
                    }}
                  />
                </div>
                <p className={styles.skillName}>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
