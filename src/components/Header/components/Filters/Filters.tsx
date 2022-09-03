import React from 'react';

import { FiltersI } from './Filters.props';
import styles from './Filters.module.scss';
import Switch from './components/Switch/Switch';

const Filters = (props: FiltersI) => {
  return (
    <div>
      <Switch />
    </div>
  );
};

export default Filters;
