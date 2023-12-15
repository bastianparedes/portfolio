import React from 'react';

import Image from 'next/legacy/image';

import styles from './styles.module.scss';

interface SkillProps {
  src: string;
  name: string;
}

const AboutSkill = (props: SkillProps): JSX.Element => {
  return (
    <div className={styles.skillCard}>
      <div className={styles.skillImageContainer}>
        <Image
          alt={props.name}
          layout="fill"
          objectFit="contain"
          placeholder="blur"
          src={'/images/skills/' + props.src}
        />
      </div>
      <p className={styles.skillName}>{props.name}</p>
    </div>
  );
};

export default AboutSkill;
