import React from 'react';

import { Definition } from '../lib/types/definition';
import { List } from '../lib/list';

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

const Sorting = (): JSX.Element => {
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
      render: renderNameLink
    },
    {
      key: 'capital',
      name: 'capital',
      title: 'Capital',
      render: (x): string[] | string => x.capital || '',
      sort: true
    },
    {
      name: 'currency',
      title: 'Currency',
      render: (x): string => {
        const keys = Object.keys(x.currencies);

        if (!keys || keys.length === 0) {
          return '-';
        }

        const k = keys[0];
        return `${x.currencies[k].name} (${k})`;
      }
    }
  ];

  const config = {};

  return (
    <>
      <h2>Simple table example</h2>
      <List data={data} def={columns} config={config} />
    </>
  );
};

export default Sorting;
