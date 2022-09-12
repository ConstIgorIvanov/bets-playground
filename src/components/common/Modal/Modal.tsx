import React from 'react';

import styles from './Modal.module.scss';
import { ModalI } from './Modal.props';

const Modal = (props: ModalI) => {
  return (
    <div className={styles.modal__wrapper}>
      <div className={styles.mask}></div>
      <div className={styles.modal}>
        <div className={styles.matchInfo}>
          <div className={styles.imgContainer}>
            <img
              className={styles.img}
              src="https://csgopositive.co/template_v2/img/csgo_ico.png"
              alt="game"
            />
          </div>
          <div className={styles.tournamentInfo}>
            <div className={styles.tournamentName}>Elisa Invitational</div>
            <div className={styles.matchFormat}>BO3</div>
          </div>
          <div className={styles.matchTime}>05:33:50</div>
        </div>
        <div className={styles.teamsInfo}>
          <div className={styles.teamInfo}>
            <div className={styles.teamName}>Sprout</div>
            <div className={styles.teamStats}>
              <div className={styles.player}>Игрок1</div>
              <div className={styles.player}>Игрок2</div>
              <div className={styles.player}>Игрок3</div>
              <div className={styles.player}>Игрок4</div>
              <div className={styles.player}>Игрок5</div>
            </div>
            <div className={styles.teamOdd}>1.109</div>
          </div>
          <div className={styles.teamInfo}>
            <div className={styles.teamName}>SproutSproutSprout</div>
            <div className={styles.teamStats}>
              <div className={styles.player}>Игрок1</div>
              <div className={styles.player}>Игрок2</div>
              <div className={styles.player}>Игрок3</div>
              <div className={styles.player}>Игрок4</div>
              <div className={styles.player}>Игрок5</div>
            </div>
            <div className={styles.teamOdd}>1.109</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
