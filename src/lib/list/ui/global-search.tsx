import React from 'react';

import { Config } from '../../types';
import { SearchUnit } from './form';
interface Props {
  config: Config;
  filters: any;
  onChange: (inputValue: {name: 'globalSearch', value:any}) => void;
}

const keyName = 'globalSearch'

const GlobalSearch = (props: Props): JSX.Element | null => {
  const { onChange, filters, config } = props;

  if (!config.search) {
    return null;
  }

  
  const value = filters[keyName];

  return (
    <div className="pull-right">
      <SearchUnit onChange={(k) => onChange({name: keyName, value: k.value})} name={keyName} value={value} />
    </div>
  );
};

export default GlobalSearch;
