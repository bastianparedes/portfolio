import React from 'react'
import styles from './styles.module.scss'

interface props {
  success: boolean
  text: string
}

const Modal = ({ success, text }: props): JSX.Element => {
  const svg = success ? 'Éxito' : 'Fracaso'

  return (
    <div className={styles.modal}>
      {svg}
      <span>{text}</span>
    </div>
  )
}

export default Modal
