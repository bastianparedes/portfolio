import React from 'react';

import Image from 'next/image';
import { AiOutlineMenu } from 'react-icons/ai';

import constants from '../../../config/constants.json';
import classNames from '../../../utils/classNames';
import NavLink from './NavLink';
import styles from './styles.module.scss';

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
        data-testid="data-testid-nav__ul"
        className={classNames(
          styles.linksContainer,
          opened && styles.linksContainerOpened
        )}
      >
        <NavLink
          link={constants.NAV.BUTTONS.HOME.ID}
          title={constants.NAV.BUTTONS.HOME.TITLE}
          closeNav={closeNav}
        />
        <NavLink
          link={constants.NAV.BUTTONS.ABOUT.ID}
          title={constants.NAV.BUTTONS.ABOUT.TITLE}
          closeNav={closeNav}
        />
        <NavLink
          link={constants.NAV.BUTTONS.PORTFOLIO.ID}
          title={constants.NAV.BUTTONS.PORTFOLIO.TITLE}
          closeNav={closeNav}
        />
      </ul>
    </nav>
  );
};

export default Nav;
