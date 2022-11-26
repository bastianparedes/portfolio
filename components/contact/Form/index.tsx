import React, { useState } from 'react';
import styles from './styles.module.scss';
import Modal from '../Modal';

interface typeElements extends HTMLFormControlsCollection {
  userName: { value: string };
  email: { value: string };
  subject: { value: string };
  message: { value: string };
}

interface typeTarget {
  elements: typeElements;
}

const Form = (): JSX.Element => {
  const [modalVisible, setModalVisible] = useState(false);
  const [submitSuccessful, setSubmitSuccessful] = useState(true);
  const [modalText, setModalText] = useState('');

  const onSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    const target = event.target as typeof event.target & typeTarget;
    const elements = target.elements;
    const userName = elements.userName.value;
    const email = elements.email.value;
    const subject = elements.subject.value;
    const message = elements.message.value;

    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        subject: `${userName} quiere contactarte.`,
        text: [
          `Nombre: ${userName}`,
          `Subject: ${subject}`,
          `E-mail: ${email}`,
          `Message: ${message}`
        ].join('\n')
      })
    })
      .then((response) => {
        if (response.ok) {
          setSubmitSuccessful(true);
          setModalText('Mensaje enviado correctamente');
        } else {
          setSubmitSuccessful(false);
          setModalText(
            'Ha ocurrido un error inesperado, por favor inténtelo más tarde'
          );
        }
      })
      .catch(() => {
        setSubmitSuccessful(false);
        setModalText(
          'Ha ocurrido un error inesperado, por favor inténtelo más tarde'
        );
      })
      .finally(() => {
        setModalVisible(true);
      });
  };

  return (
    <>
      <form
        data-testid="contact-form"
        onSubmit={onSubmit}
        className={styles.form}
      >
        <input name="userName" type="text" placeholder="Nombre" />
        <input name="email" type="email" placeholder="Correo electrónico" />
        <input name="subject" type="text" placeholder="Asunto" />
        <textarea
          name="message"
          placeholder="Mensaje"
          className={styles.textarea}
        />
        <button type="submit" value="Enviar">
          Enviar
        </button>
      </form>
      {modalVisible && (
        <Modal
          success={submitSuccessful}
          text={modalText}
          setModalVisible={setModalVisible}
        />
      )}
    </>
  );
};

export default Form;
