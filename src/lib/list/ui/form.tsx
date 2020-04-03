import React from 'react';

export interface InputValue {
  name: string;
  value: string;
}

interface Props {
  name: string;
  onChange: (inputValue: InputValue) => void;
  value: string;
}

export const SearchUnit = (props: Props): JSX.Element => {
  const [value, setValue] = React.useState(props.value || '');
  const { name, onChange } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    const v: InputValue = { name, value };
    setValue(value);
    onChange(v);
  };

  return (
    <input value={value} type="text" name={name} onChange={handleChange} />
  );
};
