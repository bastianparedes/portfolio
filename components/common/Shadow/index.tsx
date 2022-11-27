import React from 'react';
import styles from './styles.module.scss';
import classNames from '../../../utils/classNames';

interface ShadowProps {
  children?: React.ReactNode;
  setVisible?: ((boolean: boolean) => void) | null;
  modes?: string[];
}

const Shadow = ({
  children,
  setVisible = null,
  modes = ['dark']
}: ShadowProps): JSX.Element => {
  const handleOnClick = (event: React.MouseEvent): void => {
    event.preventDefault();
    event.stopPropagation();

    if (setVisible === null) return;

    const target = event.target as HTMLElement;
    const classList = target.classList;
    const shadoWasClicked = classList.contains(styles.shadow);

    if (shadoWasClicked) setVisible(false);
  };

  const classNamesList = modes.map((mode) => styles[mode]);

  return (
    <div
      data-testid="data-testid-shadow"
      className={classNames(styles.shadow, ...classNamesList)}
      onClick={handleOnClick}
    >
      {children}
    </div>
  );
};

export default Shadow;
