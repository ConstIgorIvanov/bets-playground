import React from 'react';

import { MatchesItemI } from './MatchesItem.props';

import styles from './MatchesItem.module.scss';
import UpcomingTeamCard from '../UpcomingTeamCard/UpcomingTeamCard';

const MatchesItem = (props: MatchesItemI) => {
  return (
    <div className={styles.matchesItem}>
      <UpcomingTeamCard
        imageLink="https://csgopositive.co/img/7157.svg"
        name="rogueroguerogue"
        odd="1.2"
        direction="team1"
      />
      <div className={styles.matchInfo}>
        <span className={styles.game}>
          <img alt="game" src="https://csgopositive.co/template_v2/img/valorant_bg.png" />
        </span>
        <span className={styles.tournament}>LEC</span>
        <div className={styles.format}>BO5</div>
        <div className={styles.time}>09:04:12</div>
      </div>
      <UpcomingTeamCard
        imageLink="https://csgopositive.co/img/G2.png"
        name="g2"
        odd="2"
        direction="team2"
      />
    </div>
  );
};

export default MatchesItem;
