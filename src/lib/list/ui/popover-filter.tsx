import React from 'react';
import { IconButton, Popover } from '@material-ui/core';
import { FilterList as FilterListIcon } from '@material-ui/icons';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      padding: theme.spacing(1, 2)
    }
  })
);

interface PopoverFilterProps {
  children: React.ReactNode | JSX.Element;
  isActive?: boolean;
}

const PopoverFilter = (props: PopoverFilterProps): JSX.Element => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const { children, isActive } = props;

  return (
    <>
      <IconButton
        onClick={handleClick}
        style={{ color: isActive ? '#000' : '#ccc' }}
      >
        <FilterListIcon />
      </IconButton>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
      >
        <div className={classes.content}>{children}</div>
      </Popover>
    </>
  );
};

export default PopoverFilter;
