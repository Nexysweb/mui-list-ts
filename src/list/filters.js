import React from 'react';

import {List} from 'lib/list';

// data taken from 
import  data from 'world-countries';

export default () => {
  const columns = [
    {name: 'name', title: 'Name', render: x => {
    return <a href={`https://en.wikipedia.org/wiki/${encodeURIComponent(x.name.common)}`}>{x.name.common}</a>
    }},
    {
      title: 'Capital',
      render: x => x.capital || '',
    },
    {
      name: 'currency',
      title: 'Currency',
      render: x => {
        const keys = Object.keys(x.currencies);

        if (!keys || keys.length === 0) {
          return '-';
        }

        const k = keys[0]
        return `${x.currencies[k].name} (${k})`
      }
    }
  ];

  return (<><h2>Filter example</h2><List
      data={data}
      def={columns}
      config={{search: true}}
    /></>
  );
}
