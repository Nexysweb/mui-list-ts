import React from "../_snowpack/pkg/react.js";
import {Checkbox} from "../_snowpack/pkg/@material-ui/core.js";
import List from "../lib/list/index.js";
import data from "../_snowpack/pkg/world-countries.js";
const CheckboxExample = () => {
  const [selected, setSelected] = React.useState([]);
  const onCheckClick = (id) => {
    const idx = selected.indexOf(id);
    if (idx < 0) {
      setSelected([...selected, id]);
    } else {
      setSelected(selected.filter((_, i) => i !== idx));
    }
  };
  const renderCheckbox = (x, onCheckClick2) => /* @__PURE__ */ React.createElement(Checkbox, {
    onClick: () => onCheckClick2(x.name.common)
  });
  const renderNameLink = (x) => /* @__PURE__ */ React.createElement("a", {
    href: `https://en.wikipedia.org/wiki/${encodeURIComponent(x.name.common)}`
  }, x.name.common);
  const columns = (onCheckClick2) => [
    {
      name: "id",
      render: (x) => renderCheckbox(x, onCheckClick2)
    },
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
  const config = {};
  return /* @__PURE__ */ React.createElement(React.Fragment, null, JSON.stringify(selected), /* @__PURE__ */ React.createElement("h2", null, "Simple table example"), /* @__PURE__ */ React.createElement(List, {
    data,
    def: columns(onCheckClick),
    config
  }));
};
export default CheckboxExample;
