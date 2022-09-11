import React from 'react';
import { LiveMatchesI } from './LiveMatches.props';

import styles from './LiveMatches.module.scss';
import LiveMatchesList from './components/LiveMatchesList/LiveMatchesList';

const LiveMatches = (props: LiveMatchesI) => {
  return (
    <div className={styles.liveMathces}>
      <LiveMatchesList />
    </div>
  );
};

export default LiveMatches;
