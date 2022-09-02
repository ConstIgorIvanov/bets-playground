import React from 'react';
import cn from 'classnames';
import { ButtonProps } from './Button.props';

import styles from './Button.module.scss';

const Button = ({ children, activeColor, hoverGreen, fontSize, task, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={cn(styles.button, {
        [styles.fontSmall]: fontSize === 'small',
        [styles.fontMedium]: fontSize === 'medium',
        [styles.active]: activeColor,
        [styles.hoverGreen]: hoverGreen,
        [styles.default]: task === 'default',
        [styles.bet]: task === 'bet',
        [styles.watch]: task === 'watch',
      })}>
      {children}
    </button>
  );
};

export default Button;
