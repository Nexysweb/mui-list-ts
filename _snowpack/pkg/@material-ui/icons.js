import { r as react } from '../common/index-8732a38f.js';
import { _ as _extends } from '../common/extends-7477639a.js';
import { r as require$$2 } from '../common/SvgIcon-60c3f8fe.js';
import '../common/_commonjsHelpers-37fa8da4.js';
import '../common/withStyles-c2c39a33.js';
import '../common/objectWithoutPropertiesLoose-d5128f55.js';
import '../common/index-c103191b.js';
import '../common/hoist-non-react-statics.cjs-c1f940a6.js';
import '../common/index-133c7bba.js';
import '../common/useTheme-1a1ae7a2.js';
import '../common/spacing-b56718ac.js';
import '../common/clsx.m-e1755476.js';
import '../common/defaultTheme-7e9626fc.js';

function createSvgIcon(path, displayName) {
  var Component = react.memo(react.forwardRef(function (props, ref) {
    return react.createElement(require$$2, _extends({
      ref: ref
    }, props), path);
  }));

  Component.muiName = require$$2.muiName;
  return Component;
}

var ChevronLeft = createSvgIcon(react.createElement("path", {
  d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
}));

var Code = createSvgIcon(react.createElement("path", {
  d: "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"
}));

var Delete = createSvgIcon(react.createElement("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
}));

var KeyboardArrowDown = createSvgIcon(react.createElement("path", {
  d: "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
}));

var KeyboardArrowUp = createSvgIcon(react.createElement("path", {
  d: "M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"
}));

var Menu = createSvgIcon(react.createElement("path", {
  d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
}));

var Print = createSvgIcon(react.createElement("path", {
  d: "M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"
}));

var UnfoldMore = createSvgIcon(react.createElement("path", {
  d: "M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z"
}));

export { ChevronLeft, Code, Delete, KeyboardArrowDown, KeyboardArrowUp, Menu, Print, UnfoldMore };
