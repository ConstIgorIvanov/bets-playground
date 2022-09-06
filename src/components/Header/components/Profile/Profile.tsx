import React from 'react';

import { ProfileI } from './Profile.props';
import styles from './Profile.module.scss';
import Button from '../../../common/Button/Button';

const testImgUrl =
  'https://sun9-58.userapi.com/s/v1/if1/7KNLKM7lUd64xizfJQPFAiRX-z2t1GYdq2NV5ZcooZZXo4x5qhSwasZVt6YxTwhnumavEkAx.jpg?size=400x400&quality=96&crop=0,0,570,570&ava=1';

const Profile = (props: ProfileI) => {
  return (
    <div className={styles.profile}>
      <div className={styles.profile__left}>
        <div className={styles.profile__money}>
          <div className={styles.profile__text}>
            <span>Монеты:</span> 100000000000
          </div>
          <div className={styles.profile__buttons}>
            <Button fontSize="small" activeColor>
              <a href="#"> пополнить</a>
            </Button>
            <Button fontSize="small" activeColor className={styles.button}>
              <a href="#"> вывести</a>
            </Button>
          </div>
          <div className={styles.plus}>
            {' '}
            <Button fontSize="small" activeColor className={styles.button}>
              <a href="#"> + </a>
            </Button>{' '}
          </div>
        </div>
        <div className={styles.profile__stone}>
          <div className={styles.profile__text}>
            <span>Камни:</span>1200
          </div>
          <div className={styles.button}>
            <Button fontSize="small" activeColor className={styles.button}>
              <a href="#"> потратить</a>
            </Button>
          </div>
          <div className={styles.minus}>
            <Button fontSize="small" activeColor className={styles.button}>
              <a href="#"> - </a>
            </Button>{' '}
          </div>
        </div>
      </div>
      <div className={styles.profile__right}>
        <div className={styles.profile__icon}>
          <div className={styles.profile__icon__level}>4</div>
          <img className={styles.profile__icon__image} src={testImgUrl} alt="user icon" />
        </div>
        <div className={styles.profile__info}>
          <div className={styles.profile__name}>arrogance</div>
          <div className={styles.profile__bets}>Мои ставки</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
