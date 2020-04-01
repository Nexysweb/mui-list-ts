import React from 'react';

export const SearchUnit = props => {
  const [ value, setValue ] = React.useState(props.value || '')
  const { name, onChange } = props;

  const handleChange = e => {
    const value = e.target.value;
    const v = {name, value};
    setValue(value);
    onChange(v);
  }

  return <input value={value} type="text" name={name} onChange={handleChange}/>;
}
