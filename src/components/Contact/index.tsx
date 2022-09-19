import React from 'react'
import styles from './styles.module.css'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { FiInstagram } from 'react-icons/fi'
import { VscGithubAlt, VscMail } from 'react-icons/vsc'

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
        <Link link="https://github.com/BastianParedes">
          <VscGithubAlt />
        </Link>
        <Link link="mailto:bastian.p.trabajo@outlook.com">
          <VscMail />
        </Link>
        <Link link="https://www.linkedin.com/in/bastianparedes/">
          <AiOutlineLinkedin />
        </Link>
        <Link link="https://www.instagram.com/bastian.p.95/">
          <FiInstagram />
        </Link>
        <div className={styles.verticalLine}></div>
      </ul>
    </div>
  )
}

export default Contact
