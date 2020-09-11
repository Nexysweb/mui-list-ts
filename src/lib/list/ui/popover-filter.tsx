import React from 'react';
import { IconButton, Popover } from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      padding: theme.spacing(1, 2)
    },
    iconButton: {
      padding: '5px'
    },
    resetIcon: {
      fontSize: 12
    }
  })
);

interface PopoverFilterProps<A> {
  children: React.ReactNode | JSX.Element;
  onReset: () => void;
  isActive?: boolean;
}

const PopoverFilter = <A,>(props: PopoverFilterProps<A>): JSX.Element => {
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

  const { children, isActive, onReset } = props;

  const handleReset = () => {
    onReset();
  };

  return (
    <>
      <IconButton
        onClick={handleClick}
        style={{ color: isActive ? '#000' : '#ccc' }}
        className={classes.iconButton}
      >
        <FilterListIcon />
      </IconButton>

      {isActive && (
        <IconButton
          onClick={handleReset}
          className={classes.iconButton}
          data-testid="reset-button"
        >
          <CloseIcon className={classes.resetIcon} />
        </IconButton>
      )}
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
