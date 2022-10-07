import React from 'react'
import { VscSignOut, VscGithub } from 'react-icons/vsc'
import Image from 'next/image'
import styles from './styles.module.scss'
import stylesRight from './stylesRight.module.scss'
import stylesLeft from './stylesLeft.module.scss'
import classNames from '../../../utils/classNames'

interface ProjectProps {
  index: number
  name: string
  link: string
  image: string
  github: string
  description: string
  technologies: string[]
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
  const stylesSide = index % 2 === 0 ? stylesRight : stylesLeft
  const imagePath = '/images/projects/' + image

  return (
    <div className={styles.projectCard}>
      {link !== '' ? (
        <a
          className={classNames(
            styles.imageContainer,
            stylesSide.imageContainer
          )}
          href={link}
          target="_blank"
          rel="noreferrer noopener"
        >
          <Image
            src={imagePath}
            alt={image}
            layout="fill"
            objectFit="contain"
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
            src={imagePath}
            alt={image}
            layout="fill"
            objectFit="contain"
          />
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
        {link !== '' && (
          <a
            className={styles.linkWebsite}
            href={link}
            target="_blank"
            rel="noreferrer noopener"
          >
            <VscSignOut />
          </a>
        )}
        {github !== '' && (
          <a
            className={styles.linkGithub}
            href={github}
            target="_blank"
            rel="noreferrer noopener"
          >
            <VscGithub />
          </a>
        )}
      </div>
    </div>
  )
}

export default Project
