import React from "../_snowpack/pkg/react.js";
import Tooltip from "../_snowpack/pkg/@material-ui/core/Tooltip.js";
import List from "../lib/list/index.js";
import data from "../_snowpack/pkg/world-countries.js";
const Main = () => {
  const renderNameLink = (x) => /* @__PURE__ */ React.createElement("a", {
    href: `https://en.wikipedia.org/wiki/${encodeURIComponent(x.name.common)}`
  }, x.name.common);
  const columns = [
    {
      name: "name",
      label: /* @__PURE__ */ React.createElement(Tooltip, {
        title: "Something about name"
      }, /* @__PURE__ */ React.createElement("span", null, "Name")),
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
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", null, "Simple table example"), /* @__PURE__ */ React.createElement(List, {
    data,
    def: columns
  }));
};
export default Main;
