import React from 'react';

import styles from './Header.module.scss';

import Wrapper from '../Wrapper';

import Profile from './Profile/Profile';
import Filters from './Filters/Filters';

const Header = () => {
  return (
    <div className={styles.header}>
      <Filters />
      <Profile />
    </div>
  );
};

export default Wrapper(Header);
