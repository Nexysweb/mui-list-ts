import React from "../_snowpack/pkg/react.js";
import {
  CssBaseline,
  AppBar,
  Container,
  Toolbar,
  IconButton,
  Typography,
  Grid,
  Paper
} from "../_snowpack/pkg/@material-ui/core.js";
import clsx from "../_snowpack/pkg/clsx.js";
import {makeStyles} from "../_snowpack/pkg/@material-ui/core/styles.js";
import {Menu as MenuIcon} from "../_snowpack/pkg/@material-ui/icons.js";
import Footer from "./footer.js";
import LeftNav from "./left.js";
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  toolbar: {
    paddingRight: 24
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 240
  }
}));
const Index = ({children}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: classes.root
  }, /* @__PURE__ */ React.createElement(CssBaseline, null), /* @__PURE__ */ React.createElement(AppBar, {
    position: "absolute",
    className: clsx(classes.appBar, open && classes.appBarShift)
  }, /* @__PURE__ */ React.createElement(Toolbar, {
    className: classes.toolbar
  }, /* @__PURE__ */ React.createElement(IconButton, {
    edge: "start",
    color: "inherit",
    "aria-label": "open drawer",
    onClick: handleDrawerOpen,
    className: clsx(classes.menuButton, open && classes.menuButtonHidden)
  }, /* @__PURE__ */ React.createElement(MenuIcon, null)), /* @__PURE__ */ React.createElement(Typography, {
    component: "h1",
    variant: "h6",
    color: "inherit",
    noWrap: true,
    className: classes.title
  }, "MUI-List"))), /* @__PURE__ */ React.createElement(LeftNav, {
    open,
    onClose: handleClose
  }), /* @__PURE__ */ React.createElement("main", {
    className: classes.content
  }, /* @__PURE__ */ React.createElement("div", {
    className: classes.appBarSpacer
  }), /* @__PURE__ */ React.createElement(Container, {
    maxWidth: "lg",
    className: classes.container
  }, /* @__PURE__ */ React.createElement(Grid, {
    container: true,
    spacing: 3
  }, /* @__PURE__ */ React.createElement(Grid, {
    item: true,
    xs: 12
  }, /* @__PURE__ */ React.createElement(Paper, {
    className: classes.paper
  }, children))), /* @__PURE__ */ React.createElement(Footer, null))));
};
export default Index;
