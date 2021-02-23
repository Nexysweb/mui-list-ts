import React from "../_snowpack/pkg/react.js";
import List from "../lib/list/index.js";
import data from "../_snowpack/pkg/world-countries.js";
const Main = () => {
  const renderNameLink = (x) => /* @__PURE__ */ React.createElement("a", {
    href: `https://en.wikipedia.org/wiki/${encodeURIComponent(x.name.common)}`
  }, x.name.common);
  const columns = [
    {
      name: "name",
      label: "Name",
      render: renderNameLink
    },
    {
      name: "capital",
      label: "Capital",
      render: (x) => x.capital || ""
    },
    {
      name: "currency",
      label: "Currency",
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
  const config = {
    nPerPage: 7
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", null, "Simple table example"), /* @__PURE__ */ React.createElement(List, {
    data,
    def: columns,
    config
  }));
};
export default Main;
