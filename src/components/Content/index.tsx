import React from 'react';
import Wrapper from '../Wrapper';
import UpcomingTeamCard from './components/UpcomingMatches/components/UpcomingTeamCard/UpcomingTeamCard';

import styles from './Content.module.scss';

const Content = () => {
  return <div className={styles.content}></div>;
};

export default Wrapper(Content);
