import React from 'react';

import { UpcomingMatchesI } from './UpcomingMatches.props';
import styles from './UpcomingMatches.module.scss';
import MatchesList from './components/MatchesList/MatchesList';

const UpcomingMatches = (props: UpcomingMatchesI) => {
  return (
    <div className={styles.upcomingMatches}>
      <MatchesList />
    </div>
  );
};

export default UpcomingMatches;
