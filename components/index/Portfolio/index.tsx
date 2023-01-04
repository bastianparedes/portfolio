import React from 'react';

import Project from './Project';
import styles from './styles.module.scss';
import constants from '../../../config/constants';
import { Section } from '../Common';

const Portfolio = (): JSX.Element => {
  return (
    <Section id="portfolio" title="Portfolio">
      <div className={styles.projectsContainer}>
        {constants.PORTFOLIO.PROJECTS.map((info, index) => (
          <Project
            description={info.DESCRIPTION}
            github={info.GITHUB}
            image={info.IMAGE}
            index={index}
            key={info.NAME}
            link={info.LINK}
            name={info.NAME}
            technologies={info.TECHNOLOGIES}
          />
        ))}
      </div>
    </Section>
  );
};

export default Portfolio;
