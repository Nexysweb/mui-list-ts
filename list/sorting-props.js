import React from "../_snowpack/pkg/react.js";
import List from "../lib/list/index.js";
import data from "../_snowpack/pkg/world-countries.js";
const Sorting = () => {
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
      key: "capital",
      name: "capital",
      title: "Capital",
      render: (x) => x.capital || "",
      sort: true
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
      sort: {
        func: (x) => {
          const s = Object.keys(x.currencies)[0] || "";
          return s;
        }
      }
    }
  ];
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", null, "Table with sorting capabilities example"), /* @__PURE__ */ React.createElement("p", null, "The Capital column is sorted according to the value in the field whereas currencies follows a custom sort", " ", /* @__PURE__ */ React.createElement("small", null, "See the source of this file for details")), /* @__PURE__ */ React.createElement(List, {
    data,
    def: columns,
    config: {sortAttribute: "currencies", sortDescAsc: false}
  }));
};
export default Sorting;
