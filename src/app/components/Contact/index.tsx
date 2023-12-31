import React from 'react';

import { AiOutlineLinkedin } from 'react-icons/ai';
import { FiInstagram } from 'react-icons/fi';
import { VscGithubAlt, VscMail } from 'react-icons/vsc';

import ContactLink from './ContactLink';
import styles from './styles.module.scss';
import constants from '../../../../config/constants';

const Contact = () => {
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
  );
};

export default Contact;
