import { c as createCommonjsModule, g as getDefaultExportFromCjs } from '../../common/_commonjsHelpers-53bde9c7.js';
import { i as interopRequireDefault, _ as _extends_1 } from '../../common/extends-196a4166.js';
import { r as react } from '../../common/index-4f10c776.js';
import { p as propTypes } from '../../common/index-6c76b257.js';
import { u as useTheme } from '../../common/useTheme-4361569e.js';

var ThemeContext_1 = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = interopRequireDefault(react);

var ThemeContext = _react.default.createContext(null);

var _default = ThemeContext;
exports.default = _default;
});

var nested = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var _default = hasSymbol ? Symbol.for('mui.nested') : '__THEME_NESTED__';

exports.default = _default;
});

var ThemeProvider_1 = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = interopRequireDefault(_extends_1);

var _react = interopRequireDefault(react);

var _propTypes = interopRequireDefault(propTypes);



var _ThemeContext = interopRequireDefault(ThemeContext_1);

var _useTheme = interopRequireDefault(useTheme);

var _nested = interopRequireDefault(nested);

// To support composition of theme.
function mergeOuterLocalTheme(outerTheme, localTheme) {
  if (typeof localTheme === 'function') {
    var mergedTheme = localTheme(outerTheme);

    return mergedTheme;
  }

  return (0, _extends2.default)({}, outerTheme, localTheme);
}
/**
 * This component takes a `theme` prop.
 * It makes the `theme` available down the React tree thanks to React context.
 * This component should preferably be used at **the root of your component tree**.
 */


function ThemeProvider(props) {
  var children = props.children,
      localTheme = props.theme;
  var outerTheme = (0, _useTheme.default)();

  var theme = _react.default.useMemo(function () {
    var output = outerTheme === null ? localTheme : mergeOuterLocalTheme(outerTheme, localTheme);

    if (output != null) {
      output[_nested.default] = outerTheme !== null;
    }

    return output;
  }, [localTheme, outerTheme]);

  return /*#__PURE__*/_react.default.createElement(_ThemeContext.default.Provider, {
    value: theme
  }, children);
}

var _default = ThemeProvider;
exports.default = _default;
});

var ThemeProvider = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _ThemeProvider.default;
  }
});

var _ThemeProvider = interopRequireDefault(ThemeProvider_1);
});

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(ThemeProvider);

export default __pika_web_default_export_for_treeshaking__;
