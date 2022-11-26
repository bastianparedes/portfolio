import React from 'react';
import styles from './styles.module.scss';

interface ShadowProps {
  children: React.ReactNode;
  setVisible: (boolean: boolean) => void;
}

const Shadow = ({ children, setVisible }: ShadowProps): JSX.Element => {
  const handleOnClick = (event: React.MouseEvent): void => {
    event.preventDefault();
    event.stopPropagation();

    const target = event.target as HTMLElement;
    const classList = target.classList;
    const shadoWasClicked = classList.contains(styles.shadow);

    if (shadoWasClicked) setVisible(false);
  };

  return (
    <div
      data-testid="data-testid-shadow"
      className={styles.shadow}
      onClick={handleOnClick}
    >
      {children}
    </div>
  );
};

export default Shadow;
