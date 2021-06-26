import { c as createCommonjsModule } from './_commonjsHelpers-37fa8da4.js';
import { i as interopRequireDefault, _ as _extends_1 } from './extends-8f2605c9.js';
import { r as react } from './index-8732a38f.js';
import { r as require$$2 } from './SvgIcon-fdd7e06c.js';

var createSvgIcon_1 = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createSvgIcon;

var _extends2 = interopRequireDefault(_extends_1);

var _react = interopRequireDefault(react);

var _SvgIcon = interopRequireDefault(require$$2);

function createSvgIcon(path, displayName) {
  var Component = _react.default.memo(_react.default.forwardRef(function (props, ref) {
    return _react.default.createElement(_SvgIcon.default, (0, _extends2.default)({
      ref: ref
    }, props), path);
  }));

  Component.muiName = _SvgIcon.default.muiName;
  return Component;
}
});

export { createSvgIcon_1 as c };
