import { c as createCommonjsModule } from './_commonjsHelpers-53bde9c7.js';
import { i as interopRequireDefault, _ as _extends_1 } from './extends-196a4166.js';
import { r as react } from './index-4f10c776.js';
import { r as require$$2 } from './SvgIcon-0e2b2a02.js';

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
