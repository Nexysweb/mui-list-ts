import React from 'react';

import * as UIType from '@nexys/core-list/dist/list/ui-type';
import { paginationBoundaries } from '@nexys/core-list/dist/list/utils/pagination-utils';

import Alert from '../../components/alert';
import GlobalSearch from './global-search';
import PopoverFilter from './popover-filter';
import FilterUnit from './filter-unit';
import Loader from './loader';

import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  TableContainer
} from '@material-ui/core';

import {
  KeyboardArrowUp as ChevronUp,
  KeyboardArrowDown as ChevronDown,
  UnfoldMore as SortDefault
} from '@material-ui/icons';

import {
  PaginationUnitProps,
  NoRowProps,
  ListWrapperProps,
  ListContainerProps,
  ListBodyProps,
  RecordInfoProps,
  ListHeaderProps,
  RowProps,
  ColCellProps,
  PaginationWrapperProps,
  OrderControllerUpAndDownProps,
  OrderControllerProps
} from '@nexys/core-list/dist/list/ui-type';

export const NoRow = (props: NoRowProps): JSX.Element | null => {
  if (props.n > 0) {
    return null;
  }

  return <Alert type="warning">No rows found</Alert>;
};

export const PaginationWrapper = (
  props: PaginationWrapperProps
): JSX.Element => {
  return (
    <nav>
      <ul className="pagination">{props.children}</ul>
    </nav>
  );
};

export const PaginationUnit = (
  props: PaginationUnitProps
): JSX.Element | null => {
  const { isActive, isDisabled, children, onClick } = props;

  // here we disable the button in case it is not valid
  if (isDisabled) {
    return null;
  }

  const className =
    'page-item' + (isActive ? ' active' : '') + (isDisabled ? ' disabled' : '');

  return (
    <li className={className}>
      <button className="page-link" onClick={onClick}>
        {children}
      </button>
    </li>
  );
};

export const ColCell = (props: ColCellProps): JSX.Element => {
  const { children, colSpan, style } = props;
  return (
    <TableCell colSpan={colSpan} style={style}>
      {children}
    </TableCell>
  );
};

export const HeaderUnit = (props: UIType.HeaderUnitProps): JSX.Element => {
  const { children } = props;

  return <TableCell style={{ fontWeight: 'bold' }}>{children}</TableCell>;
};

export const OrderControllerUpAndDown = (
  props: OrderControllerUpAndDownProps
): JSX.Element => {
  return (
    <span>
      <span key={'asc'} onClick={(): void => props.onClick(true)}>
        <ChevronUp />
      </span>
      <span key={'desc'} onClick={(): void => props.onClick(false)}>
        <ChevronDown />
      </span>
    </span>
  );
};

export const OrderController = (props: OrderControllerProps): JSX.Element => {
  const { onClick, descAsc } = props;

  let Icon = SortDefault;
  if (descAsc !== null) {
    Icon = descAsc ? ChevronUp : ChevronDown;
  }

  return (
    <div
      style={{
        cursor: 'pointer',
        display: 'inline-block',
        color: descAsc === null ? '#ccc' : '#000'
      }}
      onClick={(): void => onClick(null)}
    >
      <Icon />
    </div>
  );
};

export const ListWrapper = (props: ListWrapperProps): JSX.Element => {
  const { children } = props;
  return <div className="table-responsive-sm">{children}</div>;
};

export const ListContainer = (props: ListContainerProps): JSX.Element => {
  const { children, maxHeight, stickyHeader = false } = props;
  return (
    <TableContainer style={maxHeight ? { maxHeight } : undefined}>
      <Table size="small" stickyHeader={stickyHeader}>
        {children}
      </Table>
    </TableContainer>
  );
};

export const Row = (props: RowProps): JSX.Element => {
  const { children } = props;
  return <TableRow>{children}</TableRow>;
};

export const ListHeader = (props: ListHeaderProps): JSX.Element => {
  const { children } = props;
  return <TableHead>{children}</TableHead>;
};

export const ListBody = (props: ListBodyProps): JSX.Element => {
  const { children } = props;
  return <TableBody>{children}</TableBody>;
};

export const RecordInfo = (props: RecordInfoProps): JSX.Element | null => {
  const { nPerPage, idx, n } = props;

  if (n === 0) {
    return null;
  }

  const { start, end } = paginationBoundaries(idx, nPerPage);

  return (
    <p className="pull-right">
      Showing {start + 1} to {Number(start) + Number(nPerPage) > n ? n : end} of{' '}
      {n} entries
    </p>
  );
};

export { FilterUnit, GlobalSearch, PopoverFilter, Loader };
