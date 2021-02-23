import { r as react } from './index-fc424163.js';

/* eslint-disable react-hooks/rules-of-hooks, react-hooks/exhaustive-deps */
function useControlled(_ref) {
  var controlled = _ref.controlled,
      defaultProp = _ref.default;
      _ref.name;
      _ref.state;

  var _React$useRef = react.useRef(controlled !== undefined),
      isControlled = _React$useRef.current;

  var _React$useState = react.useState(defaultProp),
      valueState = _React$useState[0],
      setValue = _React$useState[1];

  var value = isControlled ? controlled : valueState;

  var setValueIfUncontrolled = react.useCallback(function (newValue) {
    if (!isControlled) {
      setValue(newValue);
    }
  }, []);
  return [value, setValueIfUncontrolled];
}

export { useControlled as u };
