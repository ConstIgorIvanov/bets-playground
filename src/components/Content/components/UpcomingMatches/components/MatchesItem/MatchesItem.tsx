import React from 'react';

import { MatchesItemI } from './MatchesItem.props';

import styles from './MatchesItem.module.scss';

const MatchesItem = (props: MatchesItemI) => {
  return (
    <div className={styles.matchesItem}>
      <div>index</div>
      <div>index</div>
    </div>
  );
};

export default MatchesItem;
