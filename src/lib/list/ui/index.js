import React from 'react';

import Alert from '../../components/alert';
import { paginationBoundaries } from '../order-utils';
import { SearchUnit } from './form';
import GlobalSearch from './global-search';

import { 
  Table, TableBody, TableCell, TableRow, TableHead, TableContainer, 
  Popover, IconButton
 } from '@material-ui/core';

import { KeyboardArrowUp as ChevronUp, KeyboardArrowDown as ChevronDown,  ArrowUpward, ArrowDownward, FilterList as FilterListIcon } from '@material-ui/icons';

export const NoRow = props => {
  if (props.n > 0) {
    return null;
  }

  return <Alert type="warning">No rows found</Alert>;
}

export const PaginationWrapper = props => {
  return (<nav>
    <ul className="pagination">
      {props.children}
    </ul>
  </nav>);
}

export const PaginationUnit = props => {
  const { isDisabled } = props;

  // here we disable the button in case it is not valid
  if (isDisabled) {
    return null;
  }

  const className = 'page-item' + (props.isActive ? ' active' : '') + (isDisabled ? ' disabled' : '');
  return <li className={className}><button className="page-link" onClick={props.onClick}>{props.children}</button></li>;
}

export const ColCell = props => {
  const { children} = props;
  return <TableCell>{children}</TableCell>
}

export const HeaderUnit= props => {
  const { children } = props;

  return <TableCell>{children}</TableCell>;
}

export const PopoverFilter= props => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const { children } = props;

  return <><IconButton onClick={handleClick}><FilterListIcon/></IconButton><Popover
    open={open}
    anchorEl={anchorEl}
    onClose={handleClose}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
  >{children}</Popover></>;
}

export const FilterUnit = props => {
  const { name, filter, filters, onChange } = props;

  if ((typeof filter === 'boolean' && filter === true) || (typeof filter === 'object' && filter.type === 'string')) {
    return (<PopoverFilter >
      <SearchUnit name={name} value={filters[name]} onChange={onChange}/>
    </PopoverFilter>);
  }

  if (typeof filter === 'object' && filter.type === 'category' && Array.isArray(filter.options)) {
    const v = filters[name] ? filters[name].value : [];

    return <PopoverFilter >
      {filter.options.map((option, i) => <span key={i}><input checked={v.includes(option.id)} type="checkbox" onChange={v => 
        onChange({name, value: {value: option.id, func: filter.func}})}/> {option.name}<br/></span>)}
    </PopoverFilter>
  }

  return null;
}

export const OrderControllerUpAndDown = props => {
  return (<span>
    <span key={"asc"} onClick={_ => props.onClick(true)}><ChevronUp/></span>
    <span key={"desc"} onClick={_ => props.onClick(false)}><ChevronDown/></span>
  </span>);
}

export const OrderController = props => {
  const { onClick, descAsc } = props;

  const Icon = descAsc ? ArrowUpward : ArrowDownward;

  return (<small style={{cursor: 'pointer'}} onClick={_ => onClick(null)}><Icon/></small>);
} 

export const ListWrapper = props => {
  const { children} = props;
  return <div className="table-responsive-sm">{children}</div>;
}

export const ListContainer = props => {
  const { children} = props;
  return <TableContainer><Table>{children}</Table></TableContainer>;
}

export const Row = props => {
  const { children} = props;
  return <TableRow>{children}</TableRow>;
}

export const ListHeader = props => {
  const { children} = props;
  return <TableHead>{children}</TableHead>;
}

export const ListBody = props => {
  const { children} = props;
  return <TableBody>{children}</TableBody>;
}

export const RecordInfo = props => {
  const { nPerPage, idx, n } = props;

  if (n === 0) {
    return null;
  }

  const { start, end } = paginationBoundaries(idx, nPerPage);
  return <p className="pull-right">Showing {start + 1} to {(Number(start) + Number(nPerPage)) > n ? n : end} of {n} entries</p>
}

export {GlobalSearch}