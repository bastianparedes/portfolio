import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import styles from './styles.module.css'

interface LinkProps {
  link: string
  title: string
}

const Nav = (): JSX.Element => {
  const [opened, setOpened] = React.useState(false)
  const logoPath = process.env.PUBLIC_URL + '/images/logo.png'
  const linkInfo = [
    {
      link: '#home',
      title: 'Home'
    },
    {
      link: '#about',
      title: 'About'
    },
    {
      link: '#portfolio',
      title: 'Porftolio'
    }
  ]
  const buttonClickHandler = (): void => {
    setOpened((value) => !value)
  }

  const openNav = (): void => {
    setOpened(false)
  }

  const Link = (props: LinkProps): JSX.Element => {
    return (
      <li className={styles.link}>
        <a href={props.link} className={styles.link__a} onClick={openNav}>
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
        {linkInfo.map((info) => (
          <Link key={info.link} {...info} />
        ))}
      </ul>
    </nav>
  )
}

export default Nav
