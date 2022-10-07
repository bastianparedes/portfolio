import React from 'react'
import styles from './styles.module.scss'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { FiInstagram } from 'react-icons/fi'
import { VscGithubAlt, VscMail } from 'react-icons/vsc'
import constants from '../../config/constants.json'
import ContactLink from './ContactLink'

const Contact = (): JSX.Element => {
  return (
    <div className={styles.linkContainer}>
      <ul className={styles.linksList}>
        <ContactLink link={constants.CONTACT.LINKS.GITHUB}>
          <VscGithubAlt />
        </ContactLink>
        <ContactLink link={constants.CONTACT.LINKS.EMAIL}>
          <VscMail />
        </ContactLink>
        <ContactLink link={constants.CONTACT.LINKS.LINKEDIN}>
          <AiOutlineLinkedin />
        </ContactLink>
        <ContactLink link={constants.CONTACT.LINKS.INSTAGRAM}>
          <FiInstagram />
        </ContactLink>
        <div className={styles.verticalLine}></div>
      </ul>
    </div>
  )
}

export default Contact
