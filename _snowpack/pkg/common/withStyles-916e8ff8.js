import { c as createCommonjsModule } from './_commonjsHelpers-53bde9c7.js';
import { i as interopRequireDefault, _ as _extends_1 } from './extends-196a4166.js';
import { r as react } from './index-4f10c776.js';
import { a as _createClass, S as SheetsRegistry, d as createGenerateClassName, e as StylesProvider, n as nested, _ as _objectWithoutProperties, g as getThemeProps, j as jssPreset, c as makeStyles, m as mergeClasses, w as withStyles, s as sheetsManager, f as StylesContext } from './withStyles-aee6c48a.js';
import { _ as _classCallCheck, s as styled } from './styled-86c5c31f.js';
import { _ as _extends } from './extends-7477639a.js';
import './index-6c76b257.js';
import { u as useTheme, T as ThemeContext } from './useTheme-4361569e.js';
import { h as hoistNonReactStatics_cjs } from './hoist-non-react-statics.cjs-8d567bb6.js';
import { a as createMuiTheme_1 } from './createMuiTheme-d9782252.js';

function createStyles(styles) {
  return styles;
}

var ServerStyleSheets = /*#__PURE__*/function () {
  function ServerStyleSheets() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, ServerStyleSheets);

    this.options = options;
  }

  _createClass(ServerStyleSheets, [{
    key: "collect",
    value: function collect(children) {
      // This is needed in order to deduplicate the injection of CSS in the page.
      var sheetsManager = new Map(); // This is needed in order to inject the critical CSS.

      this.sheetsRegistry = new SheetsRegistry(); // A new class name generator

      var generateClassName = createGenerateClassName();
      return /*#__PURE__*/react.createElement(StylesProvider, _extends({
        sheetsManager: sheetsManager,
        serverGenerateClassName: generateClassName,
        sheetsRegistry: this.sheetsRegistry
      }, this.options), children);
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.sheetsRegistry ? this.sheetsRegistry.toString() : '';
    }
  }, {
    key: "getStyleElement",
    value: function getStyleElement(props) {
      return /*#__PURE__*/react.createElement('style', _extends({
        id: 'jss-server-side',
        key: 'jss-server-side',
        dangerouslySetInnerHTML: {
          __html: this.toString()
        }
      }, props));
    }
  }]);

  return ServerStyleSheets;
}();

function mergeOuterLocalTheme(outerTheme, localTheme) {
  if (typeof localTheme === 'function') {
    var mergedTheme = localTheme(outerTheme);

    return mergedTheme;
  }

  return _extends({}, outerTheme, localTheme);
}
/**
 * This component takes a `theme` prop.
 * It makes the `theme` available down the React tree thanks to React context.
 * This component should preferably be used at **the root of your component tree**.
 */


function ThemeProvider(props) {
  var children = props.children,
      localTheme = props.theme;
  var outerTheme = useTheme();

  var theme = react.useMemo(function () {
    var output = outerTheme === null ? localTheme : mergeOuterLocalTheme(outerTheme, localTheme);

    if (output != null) {
      output[nested] = outerTheme !== null;
    }

    return output;
  }, [localTheme, outerTheme]);
  return /*#__PURE__*/react.createElement(ThemeContext.Provider, {
    value: theme
  }, children);
}

function withThemeCreator() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaultTheme = options.defaultTheme;

  var withTheme = function withTheme(Component) {

    var WithTheme = /*#__PURE__*/react.forwardRef(function WithTheme(props, ref) {
      var innerRef = props.innerRef,
          other = _objectWithoutProperties(props, ["innerRef"]);

      var theme = useTheme() || defaultTheme;
      return /*#__PURE__*/react.createElement(Component, _extends({
        theme: theme,
        ref: innerRef || ref
      }, other));
    });

    hoistNonReactStatics_cjs(WithTheme, Component);

    return WithTheme;
  };

  return withTheme;
} // Provide the theme object as a prop to the input component.
// It's an alternative API to useTheme().
// We encourage the usage of useTheme() where possible.

var withTheme = withThemeCreator();

/** @license Material-UI v4.11.4
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var esm = /*#__PURE__*/Object.freeze({
  __proto__: null,
  createGenerateClassName: createGenerateClassName,
  createStyles: createStyles,
  getThemeProps: getThemeProps,
  jssPreset: jssPreset,
  makeStyles: makeStyles,
  mergeClasses: mergeClasses,
  ServerStyleSheets: ServerStyleSheets,
  styled: styled,
  StylesProvider: StylesProvider,
  ThemeProvider: ThemeProvider,
  useTheme: useTheme,
  withStyles: withStyles,
  withTheme: withTheme,
  sheetsManager: sheetsManager,
  StylesContext: StylesContext,
  withThemeCreator: withThemeCreator
});

var defaultTheme_1 = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createMuiTheme = interopRequireDefault(createMuiTheme_1);

var defaultTheme = (0, _createMuiTheme.default)();
var _default = defaultTheme;
exports.default = _default;
});

var useTheme_1 = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useTheme;



var _react = interopRequireDefault(react);

var _defaultTheme = interopRequireDefault(defaultTheme_1);

function useTheme() {
  var theme = (0, esm.useTheme)() || _defaultTheme.default;

  return theme;
}
});

var withStyles_1 = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = interopRequireDefault(_extends_1);



var _defaultTheme = interopRequireDefault(defaultTheme_1);

function withStyles(stylesOrCreator, options) {
  return (0, esm.withStyles)(stylesOrCreator, (0, _extends2.default)({
    defaultTheme: _defaultTheme.default
  }, options));
}

var _default = withStyles;
exports.default = _default;
});

export { defaultTheme_1 as d, esm as e, useTheme_1 as u, withStyles_1 as w };
