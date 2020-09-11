import React from 'react';

import { SearchUnit } from './form';
interface Props {
  filters: any;
  onChange: (inputValue: { name: 'globalSearch'; value: any }) => void;
  debounceWait?: number;
  search?: boolean;
}

const keyName = 'globalSearch';

const GlobalSearch = (props: Props): JSX.Element | null => {
  const { onChange, filters, debounceWait, search } = props;

  if (!search) {
    return null;
  }

  const value = filters[keyName];

  return (
    <div className="pull-right">
      <SearchUnit
        onChange={(k): void => onChange({ name: keyName, value: k.value })}
        name={keyName}
        value={value}
        wait={debounceWait}
      />
    </div>
  );
};

export default GlobalSearch;
