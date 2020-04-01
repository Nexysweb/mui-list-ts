import React from 'react';

import { Grid } from '@material-ui/core';

import {List} from 'lib/list';

// data taken from 
import  data from 'world-countries';

export default () => {
  const [ itemsPerPage, setItemsPerPage ] = React.useState(10);

  const columns = [
    {name: 'name', title: 'Name', render: x => {
    return <a href={`https://en.wikipedia.org/wiki/${encodeURIComponent(x.name.common)}`}>{x.name.common}</a>
    }},
    {
      title: 'Capital',
      render: x => x.capital || ''
    },
    {name: 'currency', title: 'Currency', render: x => {
      const keys = Object.keys(x.currencies);

      if (!keys || keys.length === 0) {
        return '-';
      }

      const k = keys[0]
      return `${x.currencies[k].name} (${k})`
    }}
  ];


  const handlePageNumber = e => {
    const value = Math.ceil(Number(e.target.value));
    setItemsPerPage(value > 0 ? value : 1);
  }

  return (<><h2>Pagination example</h2>
    <Grid md={2} item={true}>
      # of records per page
      <input width="20%" type="number" value={itemsPerPage} onChange={handlePageNumber}/>
    </Grid>
    
    <List
      data={data}
      def={columns}
      nPerPage={itemsPerPage}
    /></>
  );
}
