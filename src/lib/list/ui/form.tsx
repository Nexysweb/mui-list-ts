import React, { useMemo } from 'react';
import TextField from '@material-ui/core/TextField';

import { debounce } from '../utils/filter-utils';

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

export const SearchUnit = <A,>(props: Props<A>): JSX.Element => {
  const [value, setValue] = React.useState(props.value || '');
  const { name, onChange, placeholder, wait } = props;
  const memoizedDebounce = useMemo(() => debounce(wait), [wait]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    const v: InputValue = { name: String(name), value };

    memoizedDebounce(() => {
      onChange(v);
    });

    setValue(value);
  };

  return (
    <TextField
      name={String(name)}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};
