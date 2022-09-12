import React from 'react';
import styles from './UpcomingTeamCard.module.scss';
import cn from 'classnames';

import { UpcomingTeamCardI } from './UpcomingTeamCard.props';

const UpcomingTeamCard = ({ direction, odd, name, imageLink }: UpcomingTeamCardI) => {
  return (
    <div
      className={cn(styles.wrapper, {
        [styles.left]: direction === 'team1',
        [styles.right]: direction === 'team2',
      })}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={imageLink} alt="team logo" />
        <div
          className={cn({
            [styles.imgMaskLeft]: direction === 'team1',
            [styles.imgMaskRight]: direction === 'team2',
          })}>
          +
        </div>
      </div>
      <div className={styles.team}>
        <div className={styles.teamName}>{name}</div>
        <div className={styles.teamOdd}>{odd}</div>
      </div>
      <div className={styles.mask}></div>
    </div>
  );
};

export default UpcomingTeamCard;
