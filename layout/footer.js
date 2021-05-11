import React from "../_snowpack/pkg/react.js";
import {Box, Typography} from "../_snowpack/pkg/@material-ui/core.js";
const Copyright = () => {
  return /* @__PURE__ */ React.createElement(Typography, {
    variant: "body2",
    color: "textSecondary",
    align: "center"
  }, "Copyright © Nexys ", new Date().getFullYear());
};
const Footer = () => {
  return /* @__PURE__ */ React.createElement(Box, {
    pt: 4
  }, /* @__PURE__ */ React.createElement(Copyright, null));
};
export default Footer;
