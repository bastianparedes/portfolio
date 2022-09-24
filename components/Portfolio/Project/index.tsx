import React from 'react'
import { VscSignOut, VscGithub } from 'react-icons/vsc'
import Image from 'next/image'
import styles from './styles.module.css'
import stylesRight from './stylesRight.module.css'
import stylesLeft from './stylesLeft.module.css'

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
          className={`${styles.imageContainer} ${stylesSide.imageContainer}`}
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
          className={`${styles.imageContainer} ${stylesSide.imageContainer}`}
        >
          <Image
            src={imagePath}
            alt={image}
            layout="fill"
            objectFit="contain"
          />
        </div>
      )}

      <h2 className={`${styles.projectName} ${stylesSide.projectName}`}>
        {name}
      </h2>
      <div
        className={`${styles.projectDescriptionContainer} ${stylesSide.projectDescriptionContainer}`}
      >
        <p
          className={`${styles.projectDescription} ${stylesSide.projectDescription}`}
        >
          {description}
        </p>
      </div>
      <span
        className={`${styles.projectTechnologies} ${stylesSide.projectTechnologies}`}
      >
        {technologies.join(', ')}
      </span>
      <div className={`${styles.linksContainer} ${stylesSide.linksContainer}`}>
        {link !== '' ? (
          <a
            className={`${styles.linkWebsite} ${stylesSide.linkWebsite}`}
            href={link}
            target="_blank"
            rel="noreferrer noopener"
          >
            <VscSignOut />
          </a>
        ) : (
          ''
        )}
        {github !== '' ? (
          <a
            className={`${styles.linkGithub} ${stylesSide.linkGithub}`}
            href={github}
            target="_blank"
            rel="noreferrer noopener"
          >
            <VscGithub />
          </a>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default Project
