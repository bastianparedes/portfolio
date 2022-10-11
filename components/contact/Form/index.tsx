import React, { useState } from 'react'
import styles from './styles.module.scss'
import Modal from '../Modal'

interface submitInfo {
  name: { value: string }
  email: { value: string }
  subject: { value: string }
  message: { value: string }
}

const Form = (): JSX.Element => {
  const [modalIsActive, setModalIsActive] = useState(false)
  const [submitSuccessful, setSubmitSuccessful] = useState(true)
  const [modalText, setModalText] = useState('')

  const onSubmit = (event: React.FormEvent): void => {
    event.preventDefault()
    const target = event.target as typeof event.target & submitInfo
    const [name, email, subject, message] = [
      target.name.value,
      target.email.value,
      target.subject.value,
      target.message.value
    ]
    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        subject: `${name} quiere contactarte.`,
        text: [
          `Nombre: ${name}`,
          `Subject: ${subject}`,
          `E-mail: ${email}`,
          `Message: ${message}`
        ].join('\n')
      })
    })
      .then((response) => {
        if (response.ok) {
          setSubmitSuccessful(true)
          setModalText('Mensaje enviado correctamente')
        } else {
          setSubmitSuccessful(false)
          setModalText(
            'Ha ocurrido un error inesperado, por favor inténtelo más tarde'
          )
        }
      })
      .catch(() => {
        setSubmitSuccessful(false)
        setModalText(
          'Ha ocurrido un error inesperado, por favor inténtelo más tarde'
        )
      })
      .finally(() => {
        setModalIsActive(true)
      })
  }

  return (
    <>
      <form onSubmit={onSubmit} className={styles.form}>
        <input name="name" type="text" placeholder="Nombre" />
        <input name="email" type="email" placeholder="Correo electrónico" />
        <input name="subject" type="text" placeholder="Asunto" />
        <textarea
          name="message"
          placeholder="Mensaje"
          className={styles.textarea}
        />
        <input type="submit" value="Enviar" />
      </form>
      {modalIsActive && <Modal success={submitSuccessful} text={modalText} />}
    </>
  )
}

export default Form
