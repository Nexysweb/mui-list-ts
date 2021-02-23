import React from "../../../_snowpack/pkg/react.js";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormGroup,
  Checkbox
} from "../../../_snowpack/pkg/@material-ui/core.js";
import {SearchUnit} from "./form.js";
import PopoverFilter from "./popover-filter.js";
const FilterUnit = (props) => {
  const {filter, filters, name, onChange, onReset, debounceWait} = props;
  if (typeof filter === "boolean" && filter === true) {
    return /* @__PURE__ */ React.createElement(PopoverFilter, {
      isActive: filters[name],
      onReset: () => onReset(name)
    }, /* @__PURE__ */ React.createElement(SearchUnit, {
      name,
      value: filters[name],
      onChange: (v) => onChange({name, value: v.value}),
      wait: debounceWait
    }));
  }
  if (typeof filter === "object" && filter.type === "string") {
    return /* @__PURE__ */ React.createElement(PopoverFilter, {
      isActive: filters[name],
      onReset: () => onReset(name)
    }, /* @__PURE__ */ React.createElement(SearchUnit, {
      name,
      value: filters[name] ? filters[name].value.value : "",
      onChange: (v) => {
        onChange({
          name,
          value: {value: v.value, func: filter.func}
        });
      },
      placeholder: "Type to filter...",
      wait: debounceWait
    }));
  }
  if (typeof filter === "object") {
    const options = filter.options && typeof filter.options === "function" ? filter.options(filters) : filter.options;
    if (filter.type === "category") {
      const v = filters[name] ? filters[name].value : [];
      return /* @__PURE__ */ React.createElement(PopoverFilter, {
        isActive: filters[name],
        onReset: () => onReset(name)
      }, /* @__PURE__ */ React.createElement(FormControl, {
        component: "fieldset"
      }, /* @__PURE__ */ React.createElement(FormGroup, null, options && options.map((option, i) => /* @__PURE__ */ React.createElement(FormControlLabel, {
        key: i,
        value: option.key,
        control: /* @__PURE__ */ React.createElement(Checkbox, {
          checked: v.includes(option.key),
          onChange: () => onChange({
            name,
            value: {
              value: option.key,
              func: filter.func
            },
            type: filter.type
          })
        }),
        label: option.value
      })))));
    }
    if (filter.type === "select") {
      const value = filters[name] ? filters[name].value.value : "";
      return /* @__PURE__ */ React.createElement(PopoverFilter, {
        isActive: filters[name],
        onReset: () => onReset(name)
      }, /* @__PURE__ */ React.createElement(FormControl, {
        component: "fieldset"
      }, /* @__PURE__ */ React.createElement(RadioGroup, {
        "aria-label": name.toString(),
        value
      }, options && options.map((option, i) => /* @__PURE__ */ React.createElement(FormControlLabel, {
        key: i,
        value: option.key,
        style: {marginRight: 0},
        control: /* @__PURE__ */ React.createElement(Radio, {
          onChange: () => onChange({
            name,
            value: {
              value: option.key,
              func: filter.func
            },
            type: filter.type
          })
        }),
        label: option.value
      })))));
    }
  }
  return null;
};
export default FilterUnit;
