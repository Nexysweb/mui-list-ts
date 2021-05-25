import React from 'react';

import { Definition } from '@nexys/core-list/dist/types/definition';
import List from '../lib/list';

// data taken from
import data, { CountryName, OfficialAndCommon } from 'world-countries';

interface Currency {
  [key: string]: {
    name: string;
    symbol: string;
  };
}

/* 
  redefining Country interface as 
  the Country interface from 'world-countries'
  does NOT reflect the actual data
  i.e. currency vs currencies
*/
interface Country {
  name: CountryName;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  currencies: Currency;
  callingCode: string[];
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: { [languageCode: string]: string };
  translations: { [languageCode: string]: OfficialAndCommon };
  latlng: [number, number];
  demonym: string;
  landlocked: boolean;
  borders: string[];
  area: number;
  flag: string;
}

const Filters = (): JSX.Element => {
  const renderNameLink = (x: Country): JSX.Element => (
    <a
      href={`https://en.wikipedia.org/wiki/${encodeURIComponent(
        x.name.common
      )}`}
    >
      {x.name.common}
    </a>
  );

  const columns: Definition<Country> = [
    {
      name: 'name',
      title: 'Name',
      render: renderNameLink,
      filter: {
        type: 'string',
        func: (dataItem, filterValue): boolean => {
          return dataItem.name.common
            .toLowerCase()
            .includes(filterValue.toLowerCase());
        }
      }
    },
    {
      name: 'capital',
      title: 'Capital',
      render: (x): string[] | string => x.capital || '',
      sort: true
    },
    {
      name: 'currencies',
      title: 'Currency',
      render: (x): string => {
        const keys = Object.keys(x.currencies);

        if (!keys || keys.length === 0) {
          return '-';
        }

        const k = keys[0];
        return `${x.currencies[k].name} (${k})`;
      },
      filter: {
        type: 'category',
        func: (dataItem, filterValues): boolean => {
          const filtered = Object.keys(dataItem.currencies).filter(currency =>
            filterValues.includes(currency)
          );
          return Boolean(filtered.length);
        },
        options: [
          { key: 'EUR', value: 'Euro' },
          { key: 'USD', value: 'US Dollar' }
        ]
      }
    },
    {
      name: 'region',
      title: 'Region',
      filter: {
        type: 'select',
        func: (dataItem, filterValue): boolean => {
          return dataItem.region === filterValue;
        },
        options: [
          { key: 'Asia', value: 'Asia' },
          { key: 'Europe', value: 'Europe' }
        ]
      }
    },
    {
      name: 'cca2',
      title: 'CCA2',
      filter: true,
      sort: true
    }
  ];

  return (
    <>
      <h2>Filter example</h2>
      <List<Country>
        data={data as unknown as Country[]}
        def={columns}
        config={{ search: true, nPerPage: 20 }}
      />
    </>
  );
};

export default Filters;
