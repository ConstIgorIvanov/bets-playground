import React from 'react';

import styles from './Switch.module.scss';
import { SwitchProps } from './Switch.props';

const Switch = (props: SwitchProps) => {
  return (
    <div className={styles.switch}>
      <input type="checkbox" name="ios" id="ios" />
      <label htmlFor="ios"></label>
    </div>
  );
};
export default Switch;
