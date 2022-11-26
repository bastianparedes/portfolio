import React from 'react';
import styles from './styles.module.scss';

interface SectionProps {
  id: string;
  title: string;
  children?: React.ReactNode;
}

const Section = (props: SectionProps): JSX.Element => {
  return (
    <section id={props.id} className={styles.section}>
      <h3 className={styles.title}>{props.title}</h3>
      {props.children}
    </section>
  );
};

export default Section;
