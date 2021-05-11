import React from "../../../_snowpack/pkg/react.js";
import {SearchUnit} from "./form.js";
const keyName = "globalSearch";
const GlobalSearch = (props) => {
  const {onChange, filters, debounceWait, search} = props;
  if (!search) {
    return null;
  }
  const value = filters[keyName];
  return /* @__PURE__ */ React.createElement(SearchUnit, {
    onChange: (k) => onChange({name: keyName, value: k.value}),
    name: keyName,
    value,
    wait: debounceWait
  });
};
export default GlobalSearch;
