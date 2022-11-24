import React from 'react'
import styles from './styles.module.scss'

interface props {
  success: boolean
  text: string
  onClose: (boolean: boolean) => void
}

const Modal = ({ success, text, onClose }: props): JSX.Element => {
  const svg = success ? 'Éxito' : 'Fracaso'

  const handleOnClose = (): void => {
    onClose(false)
  }

  return (
    <div className={styles.modal}>
      {svg}
      <span>{text}</span>
      <button onClick={handleOnClose}></button>
    </div>
  )
}

export default Modal
