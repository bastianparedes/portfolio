import React from 'react';

import constants from '../../../config/constants.json';
import { Section } from '../Common';
import Project from './Project';
import styles from './styles.module.scss';

const Portfolio = (): JSX.Element => {
  return (
    <Section id="portfolio" title="Portfolio">
      <div className={styles.projectsContainer}>
        {constants.PORTFOLIO.PROJECTS.map((info, index) => (
          <Project
            key={info.NAME}
            index={index}
            name={info.NAME}
            link={info.LINK}
            image={info.IMAGE}
            github={info.GITHUB}
            description={info.DESCRIPTION}
            technologies={info.TECHNOLOGIES}
          />
        ))}
      </div>
    </Section>
  );
};

export default Portfolio;
