import React from 'react'
import styles from './styles.module.scss'

const Error = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <h1>Esta página no está disponible.</h1>
      <h2>Prueba a realizar otra búsqueda.</h2>
    </div>
  )
}

export default Error
