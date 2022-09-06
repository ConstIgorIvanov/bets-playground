import React from 'react';

import { FiltersI } from './Filters.props';
import styles from './Filters.module.scss';
import Switch from './components/Switch/Switch';
import Button from '../../../common/Button/Button';

const fakeState = {
  games: [
    {
      name: 'dota2',
      checked: false,
    },
    {
      name: 'csgo',
      checked: true,
    },
  ],
};

const Filters = (props: FiltersI) => {
  //in future Redux
  const [games, setGames] = React.useState(fakeState.games);

  const changeGames = (names: string) => {
    setGames((prev) =>
      prev.map((game) => {
        if (game.name === names) {
          return { ...game, checked: !game.checked };
        }
        return game;
      }),
    );
  };

  return (
    <div className={styles.select}>
      <input type="checkbox" id="filter"></input>
      <div className={styles.select__container}>
        <label htmlFor="filter"></label>
        <div className={styles.select__wrapper}>
          <p className={styles.select__text}>
            <div className={styles.select__text__title}>Фильтр по играм:</div>
            <div>
              {games.map((game) => {
                if (game.checked) {
                  return (
                    <div className={styles.select__text__item}>
                      <Button fontSize="extra-small" task="icon">
                        {game.name}
                      </Button>
                    </div>
                  );
                }
              })}
            </div>
          </p>
          <label className={styles.select__button} htmlFor="filter"></label>
        </div>
        <div className={styles.select__options}>
          {games.map((games, index) => (
            <div key={index} className={styles.select__option}>
              <label htmlFor="filter"></label>
              <div className={styles.select__title}>{games.name}</div>
              <div onClick={() => changeGames(games.name)}>
                <Switch name={games.name} checked={games.checked} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <label htmlFor="filter" className={styles.select__activeModal}></label>
    </div>
  );
};

export default Filters;
