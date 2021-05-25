import React, {useMemo} from "../../../_snowpack/pkg/react.js";
import {TextField} from "../../../_snowpack/pkg/@material-ui/core.js";
import {debounce} from "../../../_snowpack/pkg/@nexys/core-list/dist/list/utils/filter-utils.js";
export const SearchUnit = ({
  name,
  onChange,
  placeholder,
  wait,
  value: pValue
}) => {
  const memoizedDebounce = useMemo(() => debounce(wait), [wait]);
  const handleChange = (e) => {
    const value = e.target.value;
    const v = {name: String(name), value};
    memoizedDebounce(() => {
      onChange(v);
    });
  };
  const sName = String(name);
  return /* @__PURE__ */ React.createElement(TextField, {
    name: sName,
    value: pValue,
    onChange: handleChange,
    placeholder
  });
};
