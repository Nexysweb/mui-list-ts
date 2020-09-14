import React from 'react';
import {
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Avatar,
  IconButton,
  Grid
} from '@material-ui/core';
import { Print as PdfIcon, Delete as DeleteIcon } from '@material-ui/icons';

import { Definition } from '../lib/types/definition';
import List from '../lib/list';

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

const af: Continent = { id: 1, name: 'Africa' };
const eu: Continent = { id: 2, name: 'Europe' };
const as: Continent = { id: 3, name: 'Asia' };
const am: Continent = { id: 4, name: 'America' };

const data: Animal[] = [
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

const options = [af, eu, as, am].map(v => ({ key: v.id, value: v.name }));

const def: Definition<Animal> = [
  { name: 'name', filter: true, sort: true },
  {
    name: 'location',
    filter: {
      type: 'category',
      func: (a, b): boolean => b.includes(a.location.id),
      options
    },
    render: (x): string => x.location.name
  },
  {
    name: 'country',
    label: 'Country',
    filter: {
      type: 'string',
      func: (a, b): boolean =>
        a.country.name
          .toLocaleLowerCase()
          .includes(((b as unknown) as string).toLocaleLowerCase())
    },
    render: (x): string => x.country.name
  },
  { name: 'amount', label: 'A long label', filter: true },
  { name: 'int', label: 'd', filter: true },
  { name: 'date', label: 'a date', filter: true },
  {
    name: 'location',
    label: 'custom',
    render: (x): string => 'custom ' + x.location.name
  }
];

const ListItem = (data: Animal): JSX.Element => {
  return (
    <Grid item xs={4}>
      <Card style={{ height: '100%' }}>
        <CardHeader
          avatar={<Avatar>{data.name.substr(0, 2)}</Avatar>}
          title={data.name}
          subheader={`${data.location.name} - ${data.date}`}
        />
        <CardContent>
          <p>{JSON.stringify(data)}</p>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="Print">
            <PdfIcon />
          </IconButton>
          <IconButton
            aria-label="Delete"
            onClick={() =>
              alert(`You wanted to delete: ${data.name} (ID: ${data.id})`)
            }
          >
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

const ListContainer = (children: React.ReactNode): JSX.Element => {
  return (
    <Grid container spacing={2}>
      {children}
    </Grid>
  );
};

const CustomRows = (): JSX.Element => (
  <List
    data={data}
    def={def}
    config={{}}
    CustomListContainer={ListContainer}
    CustomListItem={ListItem}
  />
);

export default CustomRows;
