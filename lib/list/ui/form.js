import React, {useMemo} from "../../../_snowpack/pkg/react.js";
import TextField from "../../../_snowpack/pkg/@material-ui/core/TextField.js";
import {debounce} from "../utils/filter-utils.js";
export const SearchUnit = (props) => {
  const [value, setValue] = React.useState(props.value || "");
  const {name, onChange, placeholder, wait} = props;
  const memoizedDebounce = useMemo(() => debounce(wait), [wait]);
  const handleChange = (e) => {
    const value2 = e.target.value;
    const v = {name: String(name), value: value2};
    memoizedDebounce(() => {
      onChange(v);
    });
    setValue(value2);
  };
  return /* @__PURE__ */ React.createElement(TextField, {
    name: String(name),
    value,
    onChange: handleChange,
    placeholder
  });
};
