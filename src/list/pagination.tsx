import React from 'react';

import { Grid } from '@material-ui/core';

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

const Pagination = (): JSX.Element => {
  const [itemsPerPage, setItemsPerPage] = React.useState(10);

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
      name: 'capital',
      title: 'Capital',
      render: (x): string[] | string => x.capital || ''
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

  const handlePageNumber = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = Math.ceil(Number(e.target.value));
    setItemsPerPage(value > 0 ? value : 1);
  };

  return (
    <>
      <h2>Pagination example</h2>
      <Grid md={2} item={true}>
        # of records per page
        <input
          width="20%"
          type="number"
          value={itemsPerPage}
          onChange={handlePageNumber}
        />
      </Grid>

      <List data={data} def={columns} nPerPage={itemsPerPage} />
    </>
  );
};

export default Pagination;
