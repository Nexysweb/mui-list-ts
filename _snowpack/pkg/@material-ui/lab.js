import { _ as _objectWithoutProperties } from '../common/withStyles-aee6c48a.js';
import { _ as _extends } from '../common/extends-7477639a.js';
import { r as react } from '../common/index-4f10c776.js';
import '../common/index-6c76b257.js';
import { _ as __pika_web_default_export_for_treeshaking__ } from '../common/clsx.m-e1755476.js';
import { s as styles$1 } from '../common/index-5e72d9b5.js';
import { c as createSvgIcon } from '../common/ButtonBase-613d6e71.js';
import { P as Paper, I as IconButton } from '../common/IconButton-bd60d287.js';
import { c as capitalize } from '../common/SvgIcon-0e2b2a02.js';
import '../common/objectWithoutPropertiesLoose-d5128f55.js';
import '../common/hoist-non-react-statics.cjs-8d567bb6.js';
import '../common/index-b1a4b8f9.js';
import '../common/_commonjsHelpers-53bde9c7.js';
import '../common/useTheme-4361569e.js';
import '../common/spacing-c43e981a.js';
import '../common/extends-196a4166.js';
import '../common/createMuiTheme-d9782252.js';
import '../common/typography-5291ae2f.js';
import '../common/withStyles-916e8ff8.js';
import '../common/styled-86c5c31f.js';
import '../common/index-419aa426.js';
import '../common/TransitionGroupContext-cc6d71cd.js';
import '../common/defaultTheme-be5ac3bc.js';

/**
 * @ignore - internal component.
 */

var SuccessOutlinedIcon = createSvgIcon( /*#__PURE__*/react.createElement("path", {
  d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
}));

/**
 * @ignore - internal component.
 */

var ReportProblemOutlinedIcon = createSvgIcon( /*#__PURE__*/react.createElement("path", {
  d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
}));

/**
 * @ignore - internal component.
 */

var ErrorOutlineIcon = createSvgIcon( /*#__PURE__*/react.createElement("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}));

/**
 * @ignore - internal component.
 */

var InfoOutlinedIcon = createSvgIcon( /*#__PURE__*/react.createElement("path", {
  d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
}));

/**
 * @ignore - internal component.
 */

var CloseIcon = createSvgIcon( /*#__PURE__*/react.createElement("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}));

var styles = function styles(theme) {
  var getColor = theme.palette.type === 'light' ? styles$1.darken : styles$1.lighten;
  var getBackgroundColor = theme.palette.type === 'light' ? styles$1.lighten : styles$1.darken;
  return {
    /* Styles applied to the root element. */
    root: _extends({}, theme.typography.body2, {
      borderRadius: theme.shape.borderRadius,
      backgroundColor: 'transparent',
      display: 'flex',
      padding: '6px 16px'
    }),

    /* Styles applied to the root element if `variant="standard"` and `color="success"`. */
    standardSuccess: {
      color: getColor(theme.palette.success.main, 0.6),
      backgroundColor: getBackgroundColor(theme.palette.success.main, 0.9),
      '& $icon': {
        color: theme.palette.success.main
      }
    },

    /* Styles applied to the root element if `variant="standard"` and `color="info"`. */
    standardInfo: {
      color: getColor(theme.palette.info.main, 0.6),
      backgroundColor: getBackgroundColor(theme.palette.info.main, 0.9),
      '& $icon': {
        color: theme.palette.info.main
      }
    },

    /* Styles applied to the root element if `variant="standard"` and `color="warning"`. */
    standardWarning: {
      color: getColor(theme.palette.warning.main, 0.6),
      backgroundColor: getBackgroundColor(theme.palette.warning.main, 0.9),
      '& $icon': {
        color: theme.palette.warning.main
      }
    },

    /* Styles applied to the root element if `variant="standard"` and `color="error"`. */
    standardError: {
      color: getColor(theme.palette.error.main, 0.6),
      backgroundColor: getBackgroundColor(theme.palette.error.main, 0.9),
      '& $icon': {
        color: theme.palette.error.main
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="success"`. */
    outlinedSuccess: {
      color: getColor(theme.palette.success.main, 0.6),
      border: "1px solid ".concat(theme.palette.success.main),
      '& $icon': {
        color: theme.palette.success.main
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="info"`. */
    outlinedInfo: {
      color: getColor(theme.palette.info.main, 0.6),
      border: "1px solid ".concat(theme.palette.info.main),
      '& $icon': {
        color: theme.palette.info.main
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="warning"`. */
    outlinedWarning: {
      color: getColor(theme.palette.warning.main, 0.6),
      border: "1px solid ".concat(theme.palette.warning.main),
      '& $icon': {
        color: theme.palette.warning.main
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="error"`. */
    outlinedError: {
      color: getColor(theme.palette.error.main, 0.6),
      border: "1px solid ".concat(theme.palette.error.main),
      '& $icon': {
        color: theme.palette.error.main
      }
    },

    /* Styles applied to the root element if `variant="filled"` and `color="success"`. */
    filledSuccess: {
      color: '#fff',
      fontWeight: theme.typography.fontWeightMedium,
      backgroundColor: theme.palette.success.main
    },

    /* Styles applied to the root element if `variant="filled"` and `color="info"`. */
    filledInfo: {
      color: '#fff',
      fontWeight: theme.typography.fontWeightMedium,
      backgroundColor: theme.palette.info.main
    },

    /* Styles applied to the root element if `variant="filled"` and `color="warning"`. */
    filledWarning: {
      color: '#fff',
      fontWeight: theme.typography.fontWeightMedium,
      backgroundColor: theme.palette.warning.main
    },

    /* Styles applied to the root element if `variant="filled"` and `color="error"`. */
    filledError: {
      color: '#fff',
      fontWeight: theme.typography.fontWeightMedium,
      backgroundColor: theme.palette.error.main
    },

    /* Styles applied to the icon wrapper element. */
    icon: {
      marginRight: 12,
      padding: '7px 0',
      display: 'flex',
      fontSize: 22,
      opacity: 0.9
    },

    /* Styles applied to the message wrapper element. */
    message: {
      padding: '8px 0'
    },

    /* Styles applied to the action wrapper element if `action` is provided. */
    action: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: 'auto',
      paddingLeft: 16,
      marginRight: -8
    }
  };
};
var defaultIconMapping = {
  success: /*#__PURE__*/react.createElement(SuccessOutlinedIcon, {
    fontSize: "inherit"
  }),
  warning: /*#__PURE__*/react.createElement(ReportProblemOutlinedIcon, {
    fontSize: "inherit"
  }),
  error: /*#__PURE__*/react.createElement(ErrorOutlineIcon, {
    fontSize: "inherit"
  }),
  info: /*#__PURE__*/react.createElement(InfoOutlinedIcon, {
    fontSize: "inherit"
  })
};

var _ref = /*#__PURE__*/react.createElement(CloseIcon, {
  fontSize: "small"
});

var Alert = /*#__PURE__*/react.forwardRef(function Alert(props, ref) {
  var action = props.action,
      children = props.children,
      classes = props.classes,
      className = props.className,
      _props$closeText = props.closeText,
      closeText = _props$closeText === void 0 ? 'Close' : _props$closeText,
      color = props.color,
      icon = props.icon,
      _props$iconMapping = props.iconMapping,
      iconMapping = _props$iconMapping === void 0 ? defaultIconMapping : _props$iconMapping,
      onClose = props.onClose,
      _props$role = props.role,
      role = _props$role === void 0 ? 'alert' : _props$role,
      _props$severity = props.severity,
      severity = _props$severity === void 0 ? 'success' : _props$severity,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'standard' : _props$variant,
      other = _objectWithoutProperties(props, ["action", "children", "classes", "className", "closeText", "color", "icon", "iconMapping", "onClose", "role", "severity", "variant"]);

  return /*#__PURE__*/react.createElement(Paper, _extends({
    role: role,
    square: true,
    elevation: 0,
    className: __pika_web_default_export_for_treeshaking__(classes.root, classes["".concat(variant).concat(capitalize(color || severity))], className),
    ref: ref
  }, other), icon !== false ? /*#__PURE__*/react.createElement("div", {
    className: classes.icon
  }, icon || iconMapping[severity] || defaultIconMapping[severity]) : null, /*#__PURE__*/react.createElement("div", {
    className: classes.message
  }, children), action != null ? /*#__PURE__*/react.createElement("div", {
    className: classes.action
  }, action) : null, action == null && onClose ? /*#__PURE__*/react.createElement("div", {
    className: classes.action
  }, /*#__PURE__*/react.createElement(IconButton, {
    size: "small",
    "aria-label": closeText,
    title: closeText,
    color: "inherit",
    onClick: onClose
  }, _ref)) : null);
});
var Alert$1 = styles$1.withStyles(styles, {
  name: 'MuiAlert'
})(Alert);

export { Alert$1 as Alert };
