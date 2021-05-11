import { c as createCommonjsModule } from './_commonjsHelpers-53bde9c7.js';
import { i as interopRequireDefault } from './extends-196a4166.js';
import { d as defaultTheme_1, e as esm } from './withStyles-26123ebc.js';
import { r as react } from './index-4f10c776.js';

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

export { useTheme_1 as u };
