import React from 'react';

import { Filter } from './filter';

interface DefinitionItem<T, K> {
  name: string;
  key?: string;
  label?: string | React.ReactNode | JSX.Element;
  title?: string;
  filter?: boolean | Filter<T, K>;
  sort?: boolean;
  render?: (x: T) => string | React.ReactNode | JSX.Element;
}

export type Definition<T, K = any> = DefinitionItem<T, K>[];
