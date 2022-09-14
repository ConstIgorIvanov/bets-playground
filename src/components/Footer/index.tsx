import React from 'react';
import Wrapper from '../Wrapper';
import styles from './Footer.module.scss';
const Footer = () => {
  return (
    <div className="footer">
      <div className={styles.footer}>2000岁了</div>
    </div>
  );
};

export default Wrapper(Footer);
