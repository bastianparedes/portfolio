import React from 'react';

import styles from './styles.module.scss';

interface SectionProps {
  id: string;
  title: string;
  children?: React.ReactNode;
}

const Section = (props: SectionProps) => {
  return (
    <section className={styles.section} id={props.id}>
      <h3 className={styles.title}>{props.title}</h3>
      {props.children}
    </section>
  );
};

export default Section;
