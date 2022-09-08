import React from 'react';
import Wrapper from '../Wrapper';

import styles from './Content.module.scss';

const Content = () => {
  return <div className={styles.content}></div>;
};

export default Wrapper(Content);
