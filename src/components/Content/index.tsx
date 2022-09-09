import React from 'react';
import Wrapper from '../Wrapper';
import UpcomingTeamCard from './components/UpcomingMatches/components/UpcomingTeamCard/UpcomingTeamCard';

import styles from './Content.module.scss';

const Content = () => {
  return (
    <div className={styles.content}>
      <UpcomingTeamCard
        direction="left"
        odd="1.2"
        teamname="NaViNaViNaVi"
        img="https://csgopositive.co/img/Zero_Tenacity.png"
      />
      <UpcomingTeamCard
        direction="right"
        odd="1.2"
        teamname="NaViNaViNaVi"
        img="https://csgopositive.co/img/Zero_Tenacity.png"
      />
    </div>
  );
};

export default Wrapper(Content);
