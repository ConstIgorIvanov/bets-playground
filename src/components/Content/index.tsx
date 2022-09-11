import React from 'react';
import Wrapper from '../Wrapper';
import LiveMatches from './components/LiveMatches/LiveMatches';
import UpcomingMatches from './components/UpcomingMatches/UpcomingMatches';

import styles from './Content.module.scss';

const Content = () => {
  return (
    <div className={styles.content}>
      <div className={styles.content__wrapper}>
        <div className={styles.title}>Текущие матчи</div>
        <LiveMatches />
      </div>
      <div className={styles.content__wrapper}>
        <div className={styles.title}>Ближайшие матчи</div>
        <UpcomingMatches />
      </div>
    </div>
  );
};

export default Wrapper(Content);
