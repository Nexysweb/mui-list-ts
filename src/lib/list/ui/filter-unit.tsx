import React from 'react';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormGroup,
  Checkbox
} from '@material-ui/core';

import { Filter, OptionUnit } from '../../types/filter';
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
  name: keyof A | 'id' | 'uuid';
  onChange: (
    inputValue:
      | { name: keyof A | 'id' | 'uuid'; value: any; type?: string }
      | CheckboxInputValue<A>
  ) => void;
  onReset: (name: keyof A | 'id' | 'uuid') => void;
  debounceWait?: number;
}

const FilterUnit = <A,>(props: FilterUnitProps<A>): JSX.Element | null => {
  const { filter, filters, name, onChange, onReset, debounceWait } = props;

  if (typeof filter === 'boolean' && filter === true) {
    return (
      <PopoverFilter isActive={filters[name]} onReset={() => onReset(name)}>
        <SearchUnit
          name={name}
          value={filters[name]}
          onChange={(v): void => onChange({ name, value: v.value })}
          wait={debounceWait}
        />
      </PopoverFilter>
    );
  }

  if (typeof filter === 'object' && filter.type === 'string') {
    return (
      <PopoverFilter isActive={filters[name]} onReset={() => onReset(name)}>
        <SearchUnit
          name={name}
          value={filters[name] ? filters[name].value.value : ''}
          onChange={(v): void => {
            onChange({
              name,
              value: { value: v.value, func: filter.func }
            });
          }}
          placeholder="Type to filter..."
          wait={debounceWait}
        />
      </PopoverFilter>
    );
  }

  // if (typeof filter === 'object' && Array.isArray(filter.options)) {
  if (typeof filter === 'object') {
    const options: OptionUnit[] | undefined =
      filter.options && typeof filter.options === 'function'
        ? filter.options(filters)
        : filter.options;

    if (filter.type === 'category') {
      const v = filters[name] ? filters[name].value : [];

      return (
        <PopoverFilter isActive={filters[name]} onReset={() => onReset(name)}>
          <FormControl component="fieldset">
            <FormGroup>
              {options &&
                options.map((option, i) => (
                  <FormControlLabel
                    key={i}
                    value={option.key}
                    control={
                      <Checkbox
                        checked={v.includes(option.key)}
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
            </FormGroup>
          </FormControl>
        </PopoverFilter>
      );
    }

    if (filter.type === 'select') {
      const value = filters[name] ? filters[name].value.value : '';

      return (
        <PopoverFilter isActive={filters[name]} onReset={() => onReset(name)}>
          <FormControl component="fieldset">
            <RadioGroup aria-label={name.toString()} value={value}>
              {options &&
                options.map((option, i) => (
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
