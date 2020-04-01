import React from 'react';
import { SearchUnit } from './form';

const GlobalSearch = props => {
  const { onChange, filters, config } = props;

  if (!config.search) {
    return null;
  }

  const key = "globalSearch";
  const value = filters[key];
  return <div className="pull-right"><SearchUnit onChange={onChange} name={key} value={value}/></div>;
}

export default GlobalSearch;