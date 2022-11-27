import React, { useState } from 'react';
import styles from './styles.module.scss';
import ResultModal from '../ResultModal';
import { useLoaderContext } from '@/components/common/Loader/Context';
import { GrStatusGood } from 'react-icons/gr';
import { BiErrorCircle } from 'react-icons/bi';

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
  const [modalProps, setModalProps] = useState({});
  const { addLoaderCounter, substractLoaderCounter } = useLoaderContext();

  const successModalProps = {
    Icon: GrStatusGood,
    text: 'Mensaje enviado correctamente, te contactaré lo antes posible.'
  };

  const failModalProps = {
    Icon: BiErrorCircle,
    text: 'Ha ocurrido un error, por favor inténtelo más tarde.'
  };

  const onSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    addLoaderCounter();
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
          setModalProps({ ...successModalProps });
        } else {
          setModalProps({ ...failModalProps });
        }
      })
      .catch(() => {
        setModalProps({ ...failModalProps });
      })
      .finally(() => {
        substractLoaderCounter();
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
        <ResultModal setModalVisible={setModalVisible} {...modalProps} />
      )}
    </>
  );
};

export default Form;
