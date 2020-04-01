import React from 'react';

import { InputValue, SearchUnit } from './form';

interface Props {
  config: {
    search?: any;
  };
  filters: any;
  onChange: (inputValue: InputValue) => void;
}

const GlobalSearch = (props: Props): JSX.Element | null => {
  const { onChange, filters, config } = props;

  if (!config.search) {
    return null;
  }

  const key = 'globalSearch';
  const value = filters[key];

  return (
    <div className="pull-right">
      <SearchUnit onChange={onChange} name={key} value={value} />
    </div>
  );
};

export default GlobalSearch;
