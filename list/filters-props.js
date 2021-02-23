import React from "../_snowpack/pkg/react.js";
import List from "../lib/list/index.js";
import data from "../_snowpack/pkg/world-countries.js";
const Filters = () => {
  const renderNameLink = (x) => /* @__PURE__ */ React.createElement("a", {
    href: `https://en.wikipedia.org/wiki/${encodeURIComponent(x.name.common)}`
  }, x.name.common);
  const columns = [
    {
      name: "name",
      title: "Name",
      render: renderNameLink,
      filter: {
        type: "string",
        func: (dataItem, filterValue) => {
          console.log(filterValue);
          return dataItem.name.common.toLowerCase().includes(filterValue.toLowerCase());
        }
      }
    },
    {
      name: "capital",
      title: "Capital",
      render: (x) => x.capital || ""
    },
    {
      name: "currencies",
      title: "Currency",
      render: (x) => {
        const keys = Object.keys(x.currencies);
        if (!keys || keys.length === 0) {
          return "-";
        }
        const k = keys[0];
        return `${x.currencies[k].name} (${k})`;
      },
      filter: {
        type: "category",
        func: (dataItem, filterValues) => {
          const filtered = Object.keys(dataItem.currencies).filter((currency) => filterValues.includes(currency));
          return Boolean(filtered.length);
        },
        options: [
          {key: "EUR", value: "Euro"},
          {key: "USD", value: "US Dollar"}
        ]
      }
    },
    {
      name: "region",
      title: "Region",
      filter: {
        type: "select",
        func: (dataItem, filterValue) => {
          return dataItem.region === filterValue;
        },
        options: [
          {key: "Asia", value: "Asia"},
          {key: "Europe", value: "Europe"}
        ]
      }
    },
    {
      name: "cca2",
      title: "CCA2",
      filter: true
    }
  ];
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", null, "Filter example"), /* @__PURE__ */ React.createElement(List, {
    data,
    def: columns,
    config: {
      search: true,
      nPerPage: 20,
      filters: {currencies: ["EUR"], cca2: "T"}
    }
  }));
};
export default Filters;
