import React from 'react';
import styles from './styles.module.scss';
import Shadow from '../Shadow';
import { MdClose } from 'react-icons/md';

interface props {
  children?: React.ReactNode;
  setModalVisible: (boolean: boolean) => void;
}

const Modal = ({ children, setModalVisible }: props): JSX.Element => {
  const handleOnClose = (): void => {
    setModalVisible(false);
  };

  return (
    <Shadow setVisible={setModalVisible}>
      <div className={styles.modal}>
        <button
          data-testid="data-testid-button-closer-modal"
          className={styles.button}
          onClick={handleOnClose}
        >
          <MdClose />
        </button>
        <div className={styles.childrenContainer}>{children}</div>
      </div>
    </Shadow>
  );
};

export default Modal;
