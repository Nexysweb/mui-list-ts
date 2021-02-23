import { _ as _extends } from '../../common/_index-4fa100fd.js';
import { c as makeStyles$1, d as defaultTheme } from '../../common/defaultTheme-8c5d9b28.js';
import '../../common/index-fc424163.js';
import '../../common/_commonjsHelpers-8c19dec8.js';
import '../../common/_index-7e2ecedb.js';

function createStyles(styles) {
  return styles;
}

// To remove in v5

function createStyles$1(styles) {
  // warning(
  //   warnOnce,
  //   [
  //     'Material-UI: createStyles from @material-ui/core/styles is deprecated.',
  //     'Please use @material-ui/styles/createStyles',
  //   ].join('\n'),
  // );
  // warnOnce = true;
  return createStyles(styles);
}

function makeStyles(stylesOrCreator) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return makeStyles$1(stylesOrCreator, _extends({
    defaultTheme: defaultTheme
  }, options));
}

export { createStyles$1 as createStyles, makeStyles };
