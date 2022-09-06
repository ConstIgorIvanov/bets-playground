import React from 'react';

import styles from './Switch.module.scss';
import { SwitchProps } from './Switch.props';

const Switch = ({ checked, name }: SwitchProps) => {
  return (
    <div className={styles.switch}>
      <input type="checkbox" name={name} id="ios" checked={checked} />
      <label htmlFor={name}></label>
    </div>
  );
};
export default Switch;
