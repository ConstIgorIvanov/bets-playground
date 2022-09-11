import React from 'react';
import { TeamCardI } from './TeamCard.props';

import styles from './TeamCard.module.scss';

const TeamCard = ({ imageLink, name, odd }: TeamCardI) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__img__wrapper}>
        <div className={styles.card__imgContainer}>
          <img className={styles.card__img} src={imageLink} alt="Team Logo" />
        </div>
        <div className={styles.card__img__mask}>
          <div className={styles.card__img__mask__plus}>+</div>
          <div className={styles.card__img__mask__text}>Сделать ставку</div>
        </div>
      </div>
      <div className={styles.card__name}>{name}</div>
      <span className={styles.card__odd}>{odd}</span>
      <div className={styles.card__mask}> </div>
    </div>
  );
};
export default TeamCard;
