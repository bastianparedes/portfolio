import React from 'react';
import styles from './styles.module.scss';

interface props {
  success: boolean;
  text: string;
  setModalVisible: (boolean: boolean) => void;
}

const Modal = ({ success, text, setModalVisible }: props): JSX.Element => {
  const svg = success ? 'Éxito' : 'Fracaso';

  const handleOnClose = (): void => {
    setModalVisible(false);
  };

  return (
    <div className={styles.modal}>
      {svg}
      <span>{text}</span>
      <button
        data-testid="data-testid-button-closer-modal"
        onClick={handleOnClose}
      ></button>
    </div>
  );
};

export default Modal;
