import React from 'react';

import { MatchesListI } from './MatchesList.props';
import styles from './MatchesList.module.scss';
import MatchesItem from '../MatchesItem/MatchesItem';

const MatchesList = (props: MatchesListI) => {
  return (
    <div className={styles.matchesList}>
      <MatchesItem />
      <MatchesItem />
      <MatchesItem />
      <MatchesItem />
    </div>
  );
};

export default MatchesList;
