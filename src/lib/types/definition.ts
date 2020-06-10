import React from 'react';

import { Filter } from './filter';

export type SortCompareOut = (string | number | boolean)

export interface DefinitionItem<T> {
  name: keyof T;
  key?: string;
  label?: string | React.ReactNode | JSX.Element;
  title?: string;
  filter?: boolean | Filter<T>;
  sort?: boolean | {enabled: true, ascOrDesc: boolean} | {func: keyof T | ((input: T) => SortCompareOut)};
  render?: (x: T) => string | React.ReactNode | JSX.Element;
}

export type Definition<T> = DefinitionItem<T>[];

