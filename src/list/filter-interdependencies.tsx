import React from 'react';

import { Definition } from '../lib/types/definition';
import List from '../lib/list';

interface Geo {
  id: number;
  name: string;
}

interface Market {
  id: number;
  name: string;
  geo: Geo;
}

interface Country {
  id: number;
  name: string;
  short: string;
  market: Market;
}

interface BusinessPartner {
  id: number;
  name: string;
  country: Country;
  description?: string;
}

const data: BusinessPartner[] = [
  {
    id: 1,
    name: 'BP #1',
    country: {
      id: 1,
      name: 'Hungary',
      short: 'HU',
      market: {
        id: 1,
        name: 'CEE',
        geo: {
          id: 1,
          name: 'Europe'
        }
      }
    }
  },
  {
    id: 2,
    name: 'BP #2',
    country: {
      id: 2,
      name: 'Serbia',
      short: 'RS',
      market: {
        id: 1,
        name: 'CEE',
        geo: {
          id: 1,
          name: 'Europe'
        }
      }
    }
  },
  {
    id: 3,
    name: 'BP #3',
    country: {
      id: 3,
      name: 'China',
      short: 'CH',
      market: {
        id: 2,
        name: 'AAA',
        geo: {
          id: 2,
          name: 'Asia'
        }
      }
    }
  },
  {
    id: 4,
    name: 'BP #4',
    country: {
      id: 1,
      name: 'Hungary',
      short: 'HU',
      market: {
        id: 1,
        name: 'CEE',
        geo: {
          id: 1,
          name: 'Europe'
        }
      }
    }
  }
];

const geoList: Geo[] = [
  {
    id: 1,
    name: 'Europe'
  },
  {
    id: 2,
    name: 'Asia'
  }
];

const marketList: Market[] = [
  {
    id: 1,
    name: 'CEE',
    geo: geoList[0]
  },
  {
    id: 2,
    name: 'AAA',
    geo: geoList[1]
  }
];

const countryList: Country[] = [
  {
    id: 1,
    name: 'Hungary',
    short: 'HU',
    market: marketList[0]
  },
  {
    id: 2,
    name: 'Serbia',
    short: 'RS',
    market: marketList[0]
  },
  {
    id: 3,
    name: 'China',
    short: 'CH',
    market: marketList[1]
  }
];

const Filters = (): JSX.Element => {
  const columns: Definition<BusinessPartner> = [
    {
      name: 'id',
      label: 'ID'
    },
    {
      name: 'name',
      label: 'Name'
    },
    {
      name: 'id',
      label: 'Geo',
      render: x => x.country.market.geo.name,
      filter: {
        type: 'category',
        func: (dataItem, filterValue) =>
          filterValue.includes(dataItem.country.market.geo.id),
        options: geoList.map(g => ({
          key: g.id,
          value: g.name
        }))
      }
    },
    {
      name: 'description',
      label: 'Market',
      render: x => x.country.market.name,
      filter: {
        type: 'category',
        func: (dataItem, filterValue) =>
          filterValue.includes(dataItem.country.market.id),
        options: filtersObj =>
          marketList
            .filter(m =>
              filtersObj.id ? filtersObj.id.value.includes(m.id) : true
            )
            .map(m => ({
              key: m.id,
              value: m.name
            }))
      }
    },
    {
      name: 'country',
      label: 'Country',
      render: x => x.country.name,
      filter: {
        type: 'category',
        func: (dataItem, filterValue) =>
          filterValue.includes(dataItem.country.id),
        options: filtersObj =>
          countryList
            .filter(c => {
              if (filtersObj.description) {
                return filtersObj.description.value.includes(c.market.id);
              }

              if (filtersObj.id) {
                return filtersObj.id.value.includes(c.market.id);
              }

              return true;
            })
            .map(c => ({
              key: c.id,
              value: c.name
            }))
      }
    }
  ];

  return (
    <>
      <h2>Filter example</h2>
      <List<BusinessPartner>
        data={data}
        def={columns}
        config={{ nPerPage: 20 }}
      />
    </>
  );
};

export default Filters;
