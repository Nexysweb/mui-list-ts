import React from "../_snowpack/pkg/react.js";
import {Grid} from "../_snowpack/pkg/@material-ui/core.js";
import List from "../lib/list/index.js";
import data from "../_snowpack/pkg/world-countries.js";
const Pagination = () => {
  const [itemsPerPage, setItemsPerPage] = React.useState(10);
  const renderNameLink = (x) => /* @__PURE__ */ React.createElement("a", {
    href: `https://en.wikipedia.org/wiki/${encodeURIComponent(x.name.common)}`
  }, x.name.common);
  const columns = [
    {
      name: "name",
      title: "Name",
      render: renderNameLink
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
      }
    }
  ];
  const handlePageNumber = (e) => {
    const value = Math.ceil(Number(e.target.value));
    setItemsPerPage(value > 0 ? value : 1);
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", null, "Pagination example"), /* @__PURE__ */ React.createElement(Grid, {
    md: 2,
    item: true
  }, "# of records per page", /* @__PURE__ */ React.createElement("input", {
    width: "20%",
    type: "number",
    value: itemsPerPage,
    onChange: handlePageNumber
  })), /* @__PURE__ */ React.createElement(List, {
    data,
    def: columns,
    config: {nPerPage: itemsPerPage}
  }));
};
export default Pagination;
