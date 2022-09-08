import React from 'react';
import styles from './MatchesItem.module.scss';
import cn from 'classnames';

import { UpcomingTeamCardI } from './UpcomingTeamCard.props';

const UpcomingTeamCard = (props: UpcomingTeamCardI) => {
  return (
    <div className={cn()}>
      <div>
        <img src="" alt="team logo" />
        <div></div>
      </div>
      <div>
        <div>Team Name</div>
        <div>1.8</div>
      </div>
      <div></div>
    </div>
  );
};

export default UpcomingTeamCard;
