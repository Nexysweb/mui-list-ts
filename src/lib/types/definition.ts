import React from 'react';

import { Filter } from './filter';

export type SortAttribute = string | number | boolean;

export interface DefinitionItem<T> {
  name: keyof T | 'id' | 'uuid';
  key?: string;
  label?: string | React.ReactNode | JSX.Element;
  title?: string;
  filter?: boolean | Filter<T>;
  sort?:
    | boolean
    | { enabled: true; ascOrDesc: boolean }
    | { getAttribute: keyof T | ((input: T) => SortAttribute) }; // function to get a property from nested object for the sort comparison
  render?: (x: T) => string | React.ReactNode | JSX.Element;
}

export type Definition<T> = DefinitionItem<T>[];
