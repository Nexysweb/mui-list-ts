# MUI-List (typescript)

[![npm version](https://badge.fury.io/js/%40nexys%2Fmui-list.svg)](https://www.npmjs.com/package/@nexys/mui-list)
[![npm version](https://img.shields.io/npm/v/@nexys/mui-list.svg)](https://www.npmjs.com/package/@nexys/mui-list)
[![TavisCI](https://travis-ci.com/Nexysweb/mui-list-ts.svg?branch=master)](https://travis-ci.com/Nexysweb/mui-list-ts)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/nexysweb/mui-list-ts.svg)](http://isitmaintained.com/project/nexysweb/mui-list-ts "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/nexysweb/mui-list-ts.svg)](http://isitmaintained.com/project/nexysweb/mui-list-ts "Percentage of issues still open")
![Code style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)
![Publish](https://github.com/Nexysweb/mui-list-ts/workflows/Publish/badge.svg)


Multi-purpose data-table/business list for MUI

See here: https://nexysweb.github.io/mui-list-ts/

## Get started

`yarn install @nexys/mui-list`

### Minimal example

```
import {List, Types} from '@nexys/mui-list';

interface Animal {
  id: number;
  name: string;
  location: {id: number; name: string};
}

// list of data (here only one entry to make example more concise)
const data: Animal[] = [
  { id: 2, name: 'Sheep', location: eu },
];

// prepare search options
const options = ['Africa', 'Europe'].map((value, i) => ({ key: i+1, value }));

// table definition
const def: Types.Definition<Animal> = [
  { name: 'name', filter: true, sort: true },
  {
    name: 'location',
    filter: {
      type: 'category',
      func: (a, b): boolean => b.includes(a.location.id),
      options
    },
    render: (x): string => x.location.name
  }
];

// list config
const config = { search: true, nPerPage: 3 }

export default (): JSX.Element => (
  <List data={data} def={def} config={config} />
);

```


## Doc 

_todo_ 

however, all interfaces/types are described here: https://github.com/Nexysweb/mui-list-ts/tree/master/src/lib/types

## Examples

The source code for the examples can be found in: https://github.com/Nexysweb/mui-list-ts/tree/master/src/list

## References

* [Material UI](https://github.com/mui-org/material-ui)
* [World Countries](https://mledoze.github.io/countries/)
