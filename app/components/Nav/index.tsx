'use client';

import React from 'react';

import { classNames } from 'bastianparedes/utils';
import Image from 'next/image';
import { AiOutlineMenu } from 'react-icons/ai';

import NavLink from './NavLink';
import styles from './styles.module.scss';
import constants from '../../../config/constants';
import logo from '../../../public/images/logo.png';

const Nav = (): JSX.Element => {
  const [opened, setOpened] = React.useState(false);

  const buttonClickHandler = (): void => {
    setOpened((value) => !value);
  };

  const closeNav = (): void => {
    setOpened(false);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.navLeft}>
        <div className={styles.logoContainer}>
          <Image
            alt={'Bastián Paredes Logo'}
            placeholder="blur"
            src={logo}
            style={{
              height: '100%',
              objectFit: 'contain',
              width: '100%'
            }}
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
        data-testid="data-testid-nav__ul"
      >
        <NavLink
          closeNav={closeNav}
          link={constants.NAV.BUTTONS.HOME.ID}
          title={constants.NAV.BUTTONS.HOME.TITLE}
        />
        <NavLink
          closeNav={closeNav}
          link={constants.NAV.BUTTONS.ABOUT.ID}
          title={constants.NAV.BUTTONS.ABOUT.TITLE}
        />
        <NavLink
          closeNav={closeNav}
          link={constants.NAV.BUTTONS.PORTFOLIO.ID}
          title={constants.NAV.BUTTONS.PORTFOLIO.TITLE}
        />
      </ul>
    </nav>
  );
};

export default Nav;
