import React from 'react';
import cn from 'classnames';
import { ButtonProps } from './Button.props';

import styles from './Button.module.scss';

const Button = ({
  children,
  activeColor,
  hoverColor,
  fontSize,
  backgroundColor,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(styles.button, {
        [styles.fontSmall]: fontSize === 'small',
        [styles.fontMedium]: fontSize === 'medium',
        [styles.active]: activeColor,
        [styles.hoverDefault]: hoverColor === 'default',
        [styles.hoverGreen]: hoverColor === 'green',
        [styles.bgDefault]: backgroundColor === 'default',
        [styles.bgGreen]: backgroundColor === 'green',
      })}>
      {children}
    </button>
  );
};

export default Button;
