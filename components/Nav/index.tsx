import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import styles from './styles.module.css'
import constants from '../../config/constants.json'
import Image from 'next/image'
import NavLink from './NavLink'
import classNames from '../../utils/classNames'

const Nav = (): JSX.Element => {
  const [opened, setOpened] = React.useState(false)

  const buttonClickHandler = (): void => {
    setOpened((value) => !value)
  }

  const closeNav = (): void => {
    setOpened(false)
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.navLeft}>
        <div className={styles.logoContainer}>
          <Image
            src={'/images/logo.png'}
            alt="Bastián Paredes Logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={classNames(
            styles.button,
            opened && styles.buttonAnimation
          )}
          data-testid="data-testid-nav__button"
          onClick={buttonClickHandler}
        >
          <AiOutlineMenu />
        </button>
      </div>
      <ul
        className={classNames(
          styles.linksContainer,
          opened && styles.linksContainerOpened
        )}
      >
        <NavLink
          link={constants.NAV.BUTTONS.HOME.ID}
          title={constants.NAV.BUTTONS.HOME.TITLE}
          onClick={closeNav}
        />
        <NavLink
          link={constants.NAV.BUTTONS.ABOUT.ID}
          title={constants.NAV.BUTTONS.ABOUT.TITLE}
          onClick={closeNav}
        />
        <NavLink
          link={constants.NAV.BUTTONS.PORTFOLIO.ID}
          title={constants.NAV.BUTTONS.PORTFOLIO.TITLE}
          onClick={closeNav}
        />
      </ul>
    </nav>
  )
}

export default Nav
