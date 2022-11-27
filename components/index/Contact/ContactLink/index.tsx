import React from 'react';

import styles from './styles.module.scss';

interface LinkProps {
  link: string;
  children: React.ReactNode;
}

const ContactLink = ({ link, children }: LinkProps): JSX.Element => {
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
  );
};

export default ContactLink;
