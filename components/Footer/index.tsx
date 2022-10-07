import React from 'react'
import styles from './styles.module.scss'
import constants from '../../config/constants.json'

const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <span className={styles.footer__span}>{constants.FOOTER.MESSAGE}</span>
    </footer>
  )
}

export default Footer
