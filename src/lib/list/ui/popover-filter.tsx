import React from 'react';
import { IconButton, Popover } from '@material-ui/core';
import { FilterList as FilterListIcon } from '@material-ui/icons';

interface PopoverFilterProps {
  children: React.ReactNode | JSX.Element;
}

const PopoverFilter = (props: PopoverFilterProps): JSX.Element => {
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

  const { children } = props;

  return (
    <>
      <IconButton onClick={handleClick}>
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
        {children}
      </Popover>
    </>
  );
};

export default PopoverFilter;
