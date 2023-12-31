import React from 'react';

import { classNames } from 'bastianparedes/utils';
import Image from 'next/image';
import { VscGithub, VscSignOut } from 'react-icons/vsc';

import projects from './projects';
import styles from './styles.module.scss';
import stylesLeft from './stylesLeft.module.scss';
import stylesRight from './stylesRight.module.scss';
import { Section } from '../Common';

const Portfolio = () => {
  return (
    <Section id="portfolio" title="Portfolio">
      <div className={styles.projectsContainer}>
        {projects.map((project, index) => {
          const stylesSide = index % 2 === 0 ? stylesRight : stylesLeft;
          return (
            <div className={styles.projectCard} key={project.name}>
              {project.link !== undefined ? (
                <a
                  className={classNames(
                    styles.imageContainer,
                    stylesSide.imageContainer
                  )}
                  href={project.link}
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <Image
                    alt={project.name}
                    placeholder="blur"
                    src={project.image}
                    style={{
                      height: '100%',
                      objectFit: 'contain',
                      width: '100%'
                    }}
                  />
                </a>
              ) : (
                <div
                  className={classNames(
                    styles.imageContainer,
                    stylesSide.imageContainer
                  )}
                >
                  <Image
                    alt={project.name}
                    placeholder="blur"
                    src={project.image}
                    style={{
                      height: '100%',
                      objectFit: 'contain',
                      width: '100%'
                    }}
                  />
                </div>
              )}
              <h2
                className={classNames(
                  styles.projectName,
                  stylesSide.projectName
                )}
              >
                {project.name}
              </h2>
              <div
                className={classNames(
                  styles.projectDescriptionContainer,
                  stylesSide.projectDescriptionContainer
                )}
              >
                <p className={styles.projectDescription}>
                  {project.description}
                </p>
              </div>
              <span
                className={classNames(
                  styles.projectTechnologies,
                  stylesSide.projectTechnologies
                )}
              >
                {project.technologies.join(', ')}
              </span>
              <div
                className={classNames(
                  styles.linksContainer,
                  stylesSide.linksContainer
                )}
              >
                {project.link !== undefined && (
                  <a
                    className={styles.linkWebsite}
                    href={project.link}
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <VscSignOut />
                  </a>
                )}
                {project.github !== undefined && (
                  <a
                    className={styles.linkGithub}
                    href={project.github ?? undefined}
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <VscGithub />
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Portfolio;
