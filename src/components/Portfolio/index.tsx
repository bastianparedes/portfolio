import React from 'react'
import { VscSignOut, VscGithub } from 'react-icons/vsc'
import { Section } from '../Common'
import styles from './styles.module.css'
import stylesRight from './stylesRight.module.css'
import stylesLeft from './stylesLeft.module.css'
import constants from '../../config/constants.json'

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
          className={`${styles.image} ${stylesSide.imageContainer}`}
          href={link}
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            className={`${styles.image} ${stylesSide.image}`}
            src={imagePath}
            alt={image}
          />
        </a>
      ) : (
        <img
          className={`${styles.image} ${stylesSide.image}`}
          src={imagePath}
          alt={image}
        />
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
  )
}

export default Portfolio
