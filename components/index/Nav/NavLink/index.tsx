import React from 'react';

import styles from './styles.module.scss';

interface NavLinkProps {
  link: string;
  title: string;
  closeNav: () => void;
}

const NavLink = ({ link, title, closeNav }: NavLinkProps): JSX.Element => {
  return (
    <li className={styles.link}>
      <a href={'#' + link} className={styles.link__a} onClick={closeNav}>
        {title}
      </a>
    </li>
  );
};

export default NavLink;
