import React from 'react';

import styles from './Header.module.scss';

import Wrapper from '../Wrapper';
import Profile from './components/Profile/Profile';
import Filters from './components/Filters/Filters';

const Header = () => {
  return (
    <div className="header">
      <div className={styles.header}>
        <Filters />
        <Profile />
      </div>
    </div>
  );
};

export default Wrapper(Header);
