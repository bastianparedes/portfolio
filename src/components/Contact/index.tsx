import React from 'react'
import styles from './styles.module.css'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { FiInstagram } from 'react-icons/fi'
import { VscGithubAlt, VscMail } from 'react-icons/vsc'
import constants from '../../config/constants.json'

interface LinkProps {
  link: string
  children?: React.ReactNode
}

const Link = ({ link, children }: LinkProps): JSX.Element => {
  return (
    <li className={styles.link}>
      <a
        className={styles.link__a}
        href={link}
        target="_blank"
        rel="noreferrer noopener"
      >
        {children}
      </a>
    </li>
  )
}

const Contact = (): JSX.Element => {
  return (
    <div className={styles.linkContainer}>
      <ul className={styles.linksList}>
        <Link link={constants.CONTACT.LINKS.GITHUB}>
          <VscGithubAlt />
        </Link>
        <Link link={constants.CONTACT.LINKS.EMAIL}>
          <VscMail />
        </Link>
        <Link link={constants.CONTACT.LINKS.LINKEDIN}>
          <AiOutlineLinkedin />
        </Link>
        <Link link={constants.CONTACT.LINKS.INSTAGRAM}>
          <FiInstagram />
        </Link>
        <div className={styles.verticalLine}></div>
      </ul>
    </div>
  )
}

export default Contact
