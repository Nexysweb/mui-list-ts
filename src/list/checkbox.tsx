import React from 'react';
import { Checkbox } from '@material-ui/core';

import { Definition } from 'shared/types/definition';
import { List } from 'lib/list';

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

const CheckboxExample = (): JSX.Element => {
  const [selected, setSelected] = React.useState<string[]>([]);

  const onCheckClick = (id: string): void => {
    const idx = selected.indexOf(id);

    if (idx < 0) {
      setSelected([...selected, id]);
    } else {
      setSelected(selected.filter((_, i) => i !== idx));
    }
  };

  const renderCheckbox = (
    x: Country,
    onCheckClick: (id: string) => void
  ): JSX.Element => (
    <Checkbox onClick={(): void => onCheckClick(x.name.common)} />
  );

  const renderNameLink = (x: Country): JSX.Element => (
    <a
      href={`https://en.wikipedia.org/wiki/${encodeURIComponent(
        x.name.common
      )}`}
    >
      {x.name.common}
    </a>
  );

  const columns = (onCheckClick: (id: string) => void): Definition<Country> => [
    {
      name: 'id',
      render: (x): JSX.Element => renderCheckbox(x, onCheckClick)
    },
    {
      name: 'name',
      label: 'Name',
      render: renderNameLink
    },
    {
      name: 'capital',
      label: 'Capital',
      render: (x): string[] | string => x.capital || ''
    },
    {
      name: 'currency',
      label: 'Currency',
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
      {JSON.stringify(selected)}
      <h2>Simple table example</h2>
      <List data={data} def={columns(onCheckClick)} config={config} />
    </>
  );
};

export default CheckboxExample;
