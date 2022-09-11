import React from 'react';
import Wrapper from '../Wrapper';
import UpcomingMatches from './components/UpcomingMatches/UpcomingMatches';

import styles from './Content.module.scss';

const Content = () => {
  return (
    <div className={styles.content}>
      <div className={styles.title}>Текущие матчи</div>
      <UpcomingMatches />
    </div>
  );
};

export default Wrapper(Content);
