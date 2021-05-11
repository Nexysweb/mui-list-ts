import { _ as _extends } from './extends-7477639a.js';
import { r as react } from './index-4f10c776.js';
import { r as require$$2 } from './SvgIcon-74a91a81.js';

/**
 * Private module reserved for @material-ui/x packages.
 */

function createSvgIcon(path, displayName) {
  var Component = react.memo(react.forwardRef(function (props, ref) {
    return /*#__PURE__*/react.createElement(require$$2, _extends({
      ref: ref
    }, props), path);
  }));

  Component.muiName = require$$2.muiName;
  return Component;
}

var useEnhancedEffect = typeof window !== 'undefined' ? react.useLayoutEffect : react.useEffect;
/**
 * https://github.com/facebook/react/issues/14099#issuecomment-440013892
 *
 * @param {function} fn
 */

function useEventCallback(fn) {
  var ref = react.useRef(fn);
  useEnhancedEffect(function () {
    ref.current = fn;
  });
  return react.useCallback(function () {
    return (ref.current).apply(void 0, arguments);
  }, []);
}

export { createSvgIcon as c, useEventCallback as u };
