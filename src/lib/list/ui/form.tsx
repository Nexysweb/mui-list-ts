import React, { useMemo } from 'react';

import { TextField } from '@material-ui/core';
import { debounce } from '@nexys/core-list/dist/list/utils/filter-utils';

export interface InputValue {
  name: string;
  value: string;
}

interface Props<A> {
  name: keyof A | 'id' | 'uuid';
  onChange: (inputValue: InputValue) => void;
  value: string;
  placeholder?: string;
  wait?: number; // milliseconds to wait in debounce
}

export const SearchUnit = <A,>({
  name,
  onChange,
  placeholder,
  wait,
  value: pValue
}: Props<A>): JSX.Element => {
  const memoizedDebounce = useMemo(() => debounce(wait), [wait]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    const v: InputValue = { name: String(name), value };

    memoizedDebounce(() => {
      onChange(v);
    });
  };

  const sName = String(name);

  return (
    <TextField
      name={sName}
      value={pValue}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};
