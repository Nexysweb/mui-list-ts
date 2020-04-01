import React from 'react';

import {List} from 'lib/list';

// data taken from 
import  data from 'world-countries';

import { Checkbox } from '@material-ui/core';

export default () => {
  const [ selected, setSelected ] = React.useState([]);

  const onCheckClick = id => {
    const idx = selected.indexOf(id);

    if (idx < 0) {
      setSelected([...selected, id])
    } else {
      setSelected(selected.filter((_, i) => i !== idx));
    }
  }

  const columns = onCheckClick => [
    {name: 'id', render: x => <Checkbox onClick={() => onCheckClick(x.name.common)}/>},
    {name: 'name', label: 'Name', render: x => {
    return <a href={`https://en.wikipedia.org/wiki/${encodeURIComponent(x.name.common)}`}>{x.name.common}</a>
    }},
    {
      label: 'Capital',
      render: x => x.capital || ''
    },
    {name: 'currency', label: 'Currency', render: x => {
      const keys = Object.keys(x.currencies);

      if (!keys || keys.length === 0) {
        return '-';
      }

      const k = keys[0]
      return `${x.currencies[k].name} (${k})`
    }}
  ];

  const config = {};

  return (<>
    {JSON.stringify(selected)}
    <h2>Simple table example</h2><List
      data={data}
      def={columns(onCheckClick)}
      config={config}
    /></>
  );
}
