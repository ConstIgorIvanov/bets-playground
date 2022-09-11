import React from 'react';

import { LiveMatchesList } from './LiveMatchesList.props';
import styles from './LiveMatchesList.module.scss';
import LiveMatchesItem from '../LiveMatchesItem/LiveMatchesItem';

const MatchesList = (props: LiveMatchesList) => {
  return (
    <div className={styles.liveMatchesList}>
      <LiveMatchesItem />
      <LiveMatchesItem />
      <LiveMatchesItem />
      <LiveMatchesItem />
    </div>
  );
};

export default MatchesList;
