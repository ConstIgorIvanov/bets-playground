import React from 'react';

import { LiveMatchesItemI } from './LiveMatchesItem.props';

import styles from './LiveMatchesItem.module.scss';
import TeamCard from '../TeamCard/TeamCard';

const LiveMatchesItem = (props: LiveMatchesItemI) => {
  return (
    <div className={styles.liveMatchesItem}>
      <TeamCard imageLink="https://csgopositive.co/img/7157.svg" name="rogueroguerogue" odd="1.2" />
      <div className={styles.matchInfo}>
        <span className={styles.game}>
          <img alt="game" src="https://csgopositive.co/template_v2/img/valorant_bg.png" />
        </span>
        <span className={styles.tournament}>LEC</span>
        <div className={styles.format}>BO5</div>
        <div className={styles.time}>09:04:12</div>
      </div>
      <TeamCard imageLink="https://csgopositive.co/img/G2.png" name="g2" odd="2" />
    </div>
  );
};

export default LiveMatchesItem;
