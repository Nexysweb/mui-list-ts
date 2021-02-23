import React from "../../../_snowpack/pkg/react.js";
import {IconButton, Popover} from "../../../_snowpack/pkg/@material-ui/core.js";
import FilterListIcon from "../../../_snowpack/pkg/@material-ui/icons/FilterList.js";
import CloseIcon from "../../../_snowpack/pkg/@material-ui/icons/Close.js";
import {makeStyles, createStyles} from "../../../_snowpack/pkg/@material-ui/core/styles.js";
const useStyles = makeStyles((theme) => createStyles({
  content: {
    padding: theme.spacing(1, 2)
  },
  iconButton: {
    padding: "5px"
  },
  resetIcon: {
    fontSize: 12
  }
}));
const PopoverFilter = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const {children, isActive, onReset} = props;
  const handleReset = () => {
    onReset();
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(IconButton, {
    onClick: handleClick,
    style: {color: isActive ? "#000" : "#ccc"},
    className: classes.iconButton
  }, /* @__PURE__ */ React.createElement(FilterListIcon, null)), isActive && /* @__PURE__ */ React.createElement(IconButton, {
    onClick: handleReset,
    className: classes.iconButton,
    "data-testid": "reset-button"
  }, /* @__PURE__ */ React.createElement(CloseIcon, {
    className: classes.resetIcon
  })), /* @__PURE__ */ React.createElement(Popover, {
    open,
    anchorEl,
    onClose: handleClose,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "center"
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "center"
    }
  }, /* @__PURE__ */ React.createElement("div", {
    className: classes.content
  }, children)));
};
export default PopoverFilter;
