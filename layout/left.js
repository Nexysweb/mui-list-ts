import React from "../_snowpack/pkg/react.js";
import {Link} from "../_snowpack/pkg/react-router-dom.js";
import {list} from "../list/index.js";
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Drawer,
  IconButton
} from "../_snowpack/pkg/@material-ui/core.js";
import clsx from "../_snowpack/pkg/clsx.js";
import {makeStyles} from "../_snowpack/pkg/@material-ui/core/styles.js";
import {ChevronLeft as ChevronLeftIcon} from "../_snowpack/pkg/@material-ui/icons.js";
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  toolbar: {
    paddingRight: 24
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9)
    }
  }
}));
const ListUnit = (props) => {
  const {label, path} = props;
  return /* @__PURE__ */ React.createElement(Link, {
    to: path
  }, /* @__PURE__ */ React.createElement(ListItem, {
    button: true
  }, /* @__PURE__ */ React.createElement(ListItemText, {
    primary: label
  })));
};
const mainListItems = list.map((l, i) => /* @__PURE__ */ React.createElement(ListUnit, {
  key: i,
  path: l.path,
  label: l.label
}));
const LeftNav = (props) => {
  const {onClose, open} = props;
  const classes = useStyles();
  const handleDrawerClose = () => {
    onClose();
  };
  return /* @__PURE__ */ React.createElement(Drawer, {
    variant: "permanent",
    classes: {
      paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
    },
    open
  }, /* @__PURE__ */ React.createElement("div", {
    className: classes.toolbarIcon
  }, /* @__PURE__ */ React.createElement(IconButton, {
    onClick: handleDrawerClose
  }, /* @__PURE__ */ React.createElement(ChevronLeftIcon, null))), /* @__PURE__ */ React.createElement(Divider, null), /* @__PURE__ */ React.createElement(List, null, /* @__PURE__ */ React.createElement(ListUnit, {
    label: "Home",
    path: "/"
  }), mainListItems));
};
export default LeftNav;
