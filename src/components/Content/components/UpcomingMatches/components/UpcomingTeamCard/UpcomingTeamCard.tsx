import React from 'react';
import styles from './UpcomingTeamCard.module.scss';
import cn from 'classnames';

import { UpcomingTeamCardI } from './UpcomingTeamCard.props';

const UpcomingTeamCard = ({ direction, odd, teamname, img }: UpcomingTeamCardI) => {
  return (
    <div
      className={cn(styles.wrapper, {
        [styles.left]: direction === 'left',
        [styles.right]: direction === 'right',
      })}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={img} alt="team logo" />
        <div className={styles.imgMask}>+</div>
      </div>
      <div className={styles.team}>
        <div className={styles.teamName}>{teamname}</div>
        <div className={styles.teamOdd}>{odd}</div>
      </div>
      <div className={styles.mask}></div>
    </div>
  );
};

export default UpcomingTeamCard;
