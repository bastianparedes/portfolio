import React from 'react';

import { classNames } from 'bastianparedes/utils';
import Image from 'next/legacy/image';
import { VscGithub, VscSignOut } from 'react-icons/vsc';

import styles from './styles.module.scss';
import stylesLeft from './stylesLeft.module.scss';
import stylesRight from './stylesRight.module.scss';

interface ProjectProps {
  index: number;
  name: string;
  link?: string;
  image?: string;
  github?: string;
  description: string;
  technologies: string[];
}

const Project = ({
  index,
  name,
  link,
  image,
  github,
  description,
  technologies
}: ProjectProps): JSX.Element => {
  const stylesSide = index % 2 === 0 ? stylesRight : stylesLeft;

  return (
    <div className={styles.projectCard}>
      {link !== undefined ? (
        <a
          className={classNames(
            styles.imageContainer,
            stylesSide.imageContainer
          )}
          href={link}
          rel="noreferrer noopener"
          target="_blank"
        >
          {image !== undefined && (
            <Image
              alt={image}
              layout="fill"
              objectFit="contain"
              src={'/images/projects/' + image}
            />
          )}
        </a>
      ) : (
        <div
          className={classNames(
            styles.imageContainer,
            stylesSide.imageContainer
          )}
        >
          {image !== undefined && (
            <Image
              alt={image}
              layout="fill"
              objectFit="contain"
              src={'/images/projects/' + image}
            />
          )}
        </div>
      )}

      <h2 className={classNames(styles.projectName, stylesSide.projectName)}>
        {name}
      </h2>
      <div
        className={classNames(
          styles.projectDescriptionContainer,
          stylesSide.projectDescriptionContainer
        )}
      >
        <p className={styles.projectDescription}>{description}</p>
      </div>
      <span
        className={classNames(
          styles.projectTechnologies,
          stylesSide.projectTechnologies
        )}
      >
        {technologies.join(', ')}
      </span>
      <div
        className={classNames(styles.linksContainer, stylesSide.linksContainer)}
      >
        {link !== undefined && (
          <a
            className={styles.linkWebsite}
            href={link}
            rel="noreferrer noopener"
            target="_blank"
          >
            <VscSignOut />
          </a>
        )}
        {github !== undefined && (
          <a
            className={styles.linkGithub}
            href={github}
            rel="noreferrer noopener"
            target="_blank"
          >
            <VscGithub />
          </a>
        )}
      </div>
    </div>
  );
};

export default Project;
