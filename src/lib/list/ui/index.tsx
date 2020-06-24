import React from 'react';

import Alert from '../../components/alert';
import { paginationBoundaries } from '../utils/pagination-utils';
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
  ArrowUpward,
  ArrowDownward
} from '@material-ui/icons';

interface NoRowProps {
  n: number;
}

export const NoRow = (props: NoRowProps): JSX.Element | null => {
  if (props.n > 0) {
    return null;
  }

  return <Alert type="warning">No rows found</Alert>;
};

interface PaginationWrapperProps {
  children: React.ReactNode | JSX.Element;
}

export const PaginationWrapper = (
  props: PaginationWrapperProps
): JSX.Element => {
  return (
    <nav>
      <ul className="pagination">{props.children}</ul>
    </nav>
  );
};

interface PaginationUnitProps {
  children: React.ReactNode | JSX.Element;
  isActive?: boolean;
  isDisabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

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

interface ColCellProps {
  children: React.ReactNode | JSX.Element;
  colSpan?: number;
}

export const ColCell = (props: ColCellProps): JSX.Element => {
  const { children, colSpan } = props;
  return <TableCell colSpan={colSpan}>{children}</TableCell>;
};

interface HeaderUnitProps {
  children: React.ReactNode | JSX.Element;
}

export const HeaderUnit = (props: HeaderUnitProps): JSX.Element => {
  const { children } = props;

  return <TableCell style={{ fontWeight: 'bold' }}>{children}</TableCell>;
};

interface OrderControllerUpAndDownProps {
  onClick: (isAscending: boolean) => void;
}

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

interface OrderControllerProps {
  descAsc: boolean;
  onClick: (a: null) => void;
}

export const OrderController = (props: OrderControllerProps): JSX.Element => {
  const { onClick, descAsc } = props;

  const Icon = descAsc ? ArrowUpward : ArrowDownward;

  return (
    <small style={{ cursor: 'pointer' }} onClick={(): void => onClick(null)}>
      <Icon />
    </small>
  );
};

interface ListWrapperProps {
  children: React.ReactNode | JSX.Element;
}

export const ListWrapper = (props: ListWrapperProps): JSX.Element => {
  const { children } = props;
  return <div className="table-responsive-sm">{children}</div>;
};

interface ListContainerProps {
  children: React.ReactNode | JSX.Element;
}

export const ListContainer = (props: ListContainerProps): JSX.Element => {
  const { children } = props;
  return (
    <TableContainer>
      <Table>{children}</Table>
    </TableContainer>
  );
};

interface RowProps {
  children: React.ReactNode | JSX.Element;
}

export const Row = (props: RowProps): JSX.Element => {
  const { children } = props;
  return <TableRow>{children}</TableRow>;
};

interface ListHeaderProps {
  children: React.ReactNode | JSX.Element;
}

export const ListHeader = (props: ListHeaderProps): JSX.Element => {
  const { children } = props;
  return <TableHead>{children}</TableHead>;
};

interface ListBodyProps {
  children: React.ReactNode | JSX.Element;
}

export const ListBody = (props: ListBodyProps): JSX.Element => {
  const { children } = props;
  return <TableBody>{children}</TableBody>;
};

interface RecordInfoProps {
  idx: number;
  n: number;
  nPerPage: number;
}

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
