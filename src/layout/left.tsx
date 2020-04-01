import React from 'react';

import { Link } from 'react-router-dom';
import { list } from '../list';

import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Drawer,
  IconButton
} from '@material-ui/core';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import { ChevronLeft as ChevronLeftIcon } from '@material-ui/icons';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },

  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9)
    }
  }
}));

interface ListUnitProps {
  label: string;
  path: string;
}

const ListUnit = (props: ListUnitProps): JSX.Element => {
  const { label, path } = props;
  return (
    <Link to={path}>
      <ListItem button>
        <ListItemText primary={label} />
      </ListItem>
    </Link>
  );
};

const mainListItems = list.map((l, i) => (
  <ListUnit key={i} path={l.path} label={l.label} />
));

interface LeftNavProps {
  onClose: () => void;
  open: boolean;
}

const LeftNav = (props: LeftNavProps): JSX.Element => {
  const { onClose, open } = props;
  const classes = useStyles();

  const handleDrawerClose = (): void => {
    onClose();
  };

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
      }}
      open={open}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListUnit label={'Home'} path={'/'} />
        {mainListItems}
      </List>
    </Drawer>
  );
};

export default LeftNav;
