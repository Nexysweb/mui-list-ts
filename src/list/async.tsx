import React from 'react';

import { Definition } from '../lib/types/definition';
import { List } from 'lib/list';

interface Continent {
  id: number;
  name: string;
}

interface Country {
  name: string;
}

interface Animal {
  id: number;
  check?: boolean;
  name: string;
  location: Continent;
  country: Country;
  amount: number;
  int: number;
  date: string;
}

type Animals = Animal[];

const af: Continent = { id: 1, name: 'Africa' };
const eu: Continent = { id: 2, name: 'Europe' };
const as: Continent = { id: 3, name: 'Asia' };
const am: Continent = { id: 4, name: 'America' };

const data: Animals = [
  {
    id: 2,
    check: true,
    name: 'Sheep',
    location: eu,
    country: { name: 'United Kingdom' },
    amount: 23.3,
    int: 23,
    date: '2019-09-05'
  },
  {
    id: 3,
    name: 'Tiger',
    location: as,
    country: { name: 'India' },
    amount: 24.1,
    int: 43,
    date: '2019-09-05'
  },
  {
    id: 4,
    name: 'Elephant',
    location: af,
    country: { name: 'Tanzania' },
    amount: 23,
    int: 3,
    date: '2019-09-05'
  },
  {
    id: 5,
    name: 'Lion',
    location: af,
    country: { name: 'South Africa' },
    amount: 0.3,
    int: 2,
    date: '2019-09-05'
  },
  {
    id: 6,
    name: 'Cat',
    location: eu,
    country: { name: 'Germany' },
    amount: 2.31,
    int: 7,
    date: '2019-09-05'
  },
  {
    id: 7,
    name: 'Grizzly',
    location: am,
    country: { name: 'Canada' },
    amount: 3.35,
    int: 43,
    date: '2019-09-05'
  },
  {
    id: 8,
    name: 'Antelope',
    location: af,
    country: { name: 'Namibia' },
    amount: 2.3,
    int: 87,
    date: '2019-09-05'
  }
];

const def: Definition<Animal, Continent> = [
  { name: 'name', filter: true, sort: true },
  {
    name: 'location.name',
    filter: {
      type: 'category',
      func: (a, b): boolean => b.includes(a.location.id),
      options: [af, eu, as, am]
    }
  },
  { name: 'country.name', label: 'Country', filter: true },
  { name: 'amount', label: 'A long label', filter: true },
  { name: 'int', label: 'd', filter: true },
  { name: 'date', label: 'a date', filter: true },
  {
    name: 'random',
    label: 'custom',
    render: (x): string => 'custom' + x.location.name
  }
];

const asyncData = (): Promise<Definition<Animal, Continent>> =>
  new Promise<Definition<Animal, Continent>>(resolve => resolve(data));

const AsyncExample = (): JSX.Element => (
  <List
    def={def}
    config={{ search: true }}
    asyncData={asyncData}
    nPerPage={3}
  />
);

export default AsyncExample;
