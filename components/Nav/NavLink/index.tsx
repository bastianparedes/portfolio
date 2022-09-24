import React, { MouseEventHandler } from 'react'
import styles from './styles.module.css'

interface NavLinkProps {
  link: string
  title: string
  onClick: MouseEventHandler<HTMLAnchorElement>
}

const NavLink = (props: NavLinkProps): JSX.Element => {
  return (
    <li className={styles.link}>
      <a
        href={'#' + props.link}
        className={styles.link__a}
        onClick={props.onClick}
      >
        {props.title}
      </a>
    </li>
  )
}

export default NavLink
