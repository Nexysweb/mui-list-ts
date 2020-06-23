import React from 'react';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl
} from '@material-ui/core';

import { Filter } from '../../types/filter';
import { SearchUnit } from './form';
import PopoverFilter from './popover-filter';

interface CheckboxInputValue<A> {
  name: keyof A;
  value: {
    func: Function;
    value: number | string;
  };
}

interface FilterUnitProps<A> {
  filter?: boolean | Filter<A>;
  filters: any;
  name: keyof A;
  onChange: (
    inputValue:
      | { name: keyof A; value: any; type?: string }
      | CheckboxInputValue<A>
  ) => void;
}

const FilterUnit = <A,>(props: FilterUnitProps<A>): JSX.Element | null => {
  const { filter, filters, name, onChange } = props;

  if (typeof filter === 'boolean' && filter === true) {
    return (
      <PopoverFilter>
        <SearchUnit
          name={name}
          value={filters[name]}
          onChange={(v): void => onChange({ name, value: v.value })}
        />
      </PopoverFilter>
    );
  }

  if (typeof filter === 'object' && filter.type === 'string') {
    return (
      <PopoverFilter>
        <SearchUnit
          name={name}
          value={filters[name] ? filters[name].value.value : ''}
          onChange={(v): void => {
            onChange({
              name,
              value: { value: v.value, func: filter.func }
            });
          }}
        />
      </PopoverFilter>
    );
  }

  if (typeof filter === 'object' && Array.isArray(filter.options)) {
    if (filter.type === 'category') {
      const v = filters[name] ? filters[name].value : [];

      return (
        <PopoverFilter>
          {filter.options.map((option, i) => (
            <span key={i}>
              <input
                checked={v.includes(option.key)}
                type="checkbox"
                onChange={(): void =>
                  onChange({
                    name,
                    value: {
                      value: option.key,
                      func: filter.func
                    },
                    type: filter.type
                  })
                }
              />{' '}
              {option.value}
              <br />
            </span>
          ))}
        </PopoverFilter>
      );
    }

    if (filter.type === 'select') {
      const value = filters[name] ? filters[name].value.value : '';
      return (
        <PopoverFilter>
          <FormControl component="fieldset">
            <RadioGroup aria-label={name.toString()} value={value}>
              {filter.options.map((option, i) => (
                <FormControlLabel
                  key={i}
                  value={option.key}
                  style={{ marginRight: 0 }}
                  control={
                    <Radio
                      onChange={(): void =>
                        onChange({
                          name,
                          value: {
                            value: option.key,
                            func: filter.func
                          },
                          type: filter.type
                        })
                      }
                    />
                  }
                  label={option.value}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </PopoverFilter>
      );
    }
  }

  return null;
};

export default FilterUnit;
