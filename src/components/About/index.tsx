import React from 'react'
import styles from './styles.module.css'
import { Section } from '../Common'

interface SkillProps {
  src: string
  name: string
}

const Skill = (props: SkillProps): JSX.Element => {
  return (
    <div className={styles.skillCard}>
      <img
        className={styles.skillImage}
        src={process.env.PUBLIC_URL + '/images/skills/' + props.src}
        alt={props.name}
      />
      <p className={styles.skillName}>{props.name}</p>
    </div>
  )
}

const About = (): JSX.Element => {
  return (
    <Section id="about" title="About me">
      <div className={styles.main}>
        <div className={styles.mainLeft}>
          <h2 className={styles.mainLeft__h2}>Soy Bastián Paredes,</h2>
          <p className={styles.mainLeft__p}>
            Un Front End Developer con experiencia construyendo sitios web con
            responsive design que conecten front-end y back-end. Me especializo
            en el uso de JavaScript, React.js y Next.js.
          </p>
          <p className={styles.mainLeft__p}>
            Siempre busco mejorar mis habilidades desarrollando proyectos
            propios a la par de mi trabajo. Estoy constantemente estudiando
            acerca de las nuevas tecnologías para actualizar mi repertorio de
            herramientas para que los códigos de mis creaciones sean fáciles de
            leer, seguros y eficientes.
          </p>
          <button className={styles.buttonCv}>
            <a
              className={styles.buttonCv__a}
              href="https://drive.google.com/file/d/1LheHpim4QsBKLe6kxYD1OMggrRW8DLWl/view?usp=sharing"
              target="_blank"
              rel="noreferrer noopener"
            >
              Ver currículum
            </a>
          </button>
        </div>
        <div className={styles.mainRight}>
          <h2 className={styles.mainRight__h2}>Skills</h2>
          <div className={styles.skillsContainer}>
            <Skill src="html5.png" name="HTML 5" />
            <Skill src="css3.png" name="CSS 3" />
            <Skill src="javascript.png" name="JavaScript" />
            <Skill src="typescript.png" name="TypeScript" />
            <Skill src="react.js.png" name="React.js" />
            <Skill src="next.js.png" name="Next.js" />
            <Skill src="python3.png" name="Python 3" />
            <Skill src="mysql.png" name="MySql" />
            <Skill src="mongodb.svg" name="MongoDB" />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default About
