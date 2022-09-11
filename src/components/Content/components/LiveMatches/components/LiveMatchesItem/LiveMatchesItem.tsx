import React from 'react';

import { LiveMatchesItemI } from './LiveMatchesItem.props';

import styles from './LiveMatchesItem.module.scss';

const LiveMatchesItem = (props: LiveMatchesItemI) => {
  return (
    <div className={styles.liveMatchesItem}>
      <div>index</div>
      <div>index</div>
    </div>
  );
};

export default LiveMatchesItem;
