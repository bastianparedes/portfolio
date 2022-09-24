import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import styles from './styles.module.css'
import constants from '../../config/constants.json'

interface LinkProps {
  link: string
  title: string
}

const Nav = (): JSX.Element => {
  const [opened, setOpened] = React.useState(false)
  const logoPath = '/images/logo.png'

  const buttonClickHandler = (): void => {
    setOpened((value) => !value)
  }

  const openNav = (): void => {
    setOpened(false)
  }

  const Link = (props: LinkProps): JSX.Element => {
    return (
      <li className={styles.link}>
        <a href={'#' + props.link} className={styles.link__a} onClick={openNav}>
          {props.title}
        </a>
      </li>
    )
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src={logoPath} alt="Bastián Paredes" />
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={`${styles.button} ${opened ? styles.buttonAnimation : ''}`}
          data-testid="data-testid-nav__button"
          onClick={buttonClickHandler}
        >
          <AiOutlineMenu />
        </button>
      </div>
      <ul
        className={`${styles.linksContainer} ${
          opened ? styles.linksContainerOpened : ''
        }`}
      >
        <Link
          key={constants.NAV.BUTTONS.HOME.ID}
          link={constants.NAV.BUTTONS.HOME.ID}
          title={constants.NAV.BUTTONS.HOME.TITLE}
        />
        <Link
          key={constants.NAV.BUTTONS.ABOUT.ID}
          link={constants.NAV.BUTTONS.ABOUT.ID}
          title={constants.NAV.BUTTONS.ABOUT.TITLE}
        />
        <Link
          key={constants.NAV.BUTTONS.PORTFOLIO.ID}
          link={constants.NAV.BUTTONS.PORTFOLIO.ID}
          title={constants.NAV.BUTTONS.PORTFOLIO.TITLE}
        />
      </ul>
    </nav>
  )
}

export default Nav
