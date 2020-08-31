import React from 'react';
import TextField from '@material-ui/core/TextField';

export interface InputValue {
  name: string;
  value: string;
}

interface Props<A> {
  name: keyof A | 'id' | 'uuid';
  onChange: (inputValue: InputValue) => void;
  value: string;
  placeholder?: string;
}

export const SearchUnit = <A,>(props: Props<A>): JSX.Element => {
  const [value, setValue] = React.useState(props.value || '');
  const { name, onChange, placeholder } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    const v: InputValue = { name: String(name), value };
    setValue(value);
    onChange(v);
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
