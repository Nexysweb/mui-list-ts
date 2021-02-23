import React from "../../_snowpack/pkg/react.js";
import {Alert as MUIAlert} from "../../_snowpack/pkg/@material-ui/lab.js";
const Alert = (props) => {
  const {type = "success", children} = props;
  return /* @__PURE__ */ React.createElement(MUIAlert, {
    severity: type
  }, children);
};
export default Alert;
