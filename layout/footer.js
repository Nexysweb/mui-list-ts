import * as __SNOWPACK_ENV__ from '../_snowpack/env.js';

import React from "../_snowpack/pkg/react.js";
import {Box, Typography} from "../_snowpack/pkg/@material-ui/core.js";
const sha = __SNOWPACK_ENV__.SNOWPACK_PUBLIC_GIT_SHA || "git_sha";
const shaUrl = `https://github.com/Nexysweb/mui-list-ts/commit/${sha}`;
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
  }, /* @__PURE__ */ React.createElement(Copyright, null), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("small", null, /* @__PURE__ */ React.createElement("a", {
    href: shaUrl
  }, sha))));
};
export default Footer;
