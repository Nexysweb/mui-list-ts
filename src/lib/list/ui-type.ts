// these are the types that define the UI Elements that needs to be defined
import { Filter } from '../types/filter';

export interface HeaderUnitProps {
  children: React.ReactNode | JSX.Element;
}

interface CheckboxInputValue<A> {
  name: keyof A;
  value: {
    func: Function;
    value: number | string;
  };
}

export interface FilterUnitProps<A> {
  filter?: boolean | Filter<A>;
  filters: any;
  name: keyof A | 'id' | 'uuid';
  onChange: (
    inputValue:
      | { name: keyof A | 'id' | 'uuid'; value: any; type?: string }
      | CheckboxInputValue<A>
  ) => void;
  onReset: (name: keyof A | 'id' | 'uuid') => void;
  debounceWait?: number;
}

export interface OrderControllerProps {
  descAsc: boolean | null;
  onClick: (a: null) => void;
}

export interface ColCellProps {
  children: React.ReactNode | JSX.Element;
  colSpan?: number;
  style?: React.CSSProperties;
}

export interface GlobalSearchProps {
  filters: any;
  onChange: (inputValue: { name: 'globalSearch'; value: any }) => void;
  debounceWait?: number;
  search?: boolean;
}

export interface NoRowProps {
  n: number;
}

export interface RowProps {
  children: React.ReactNode | JSX.Element;
}

export interface ListWrapperProps {
  children: React.ReactNode | JSX.Element;
}

export interface ListContainerProps {
  children: React.ReactNode | JSX.Element;
  maxHeight?: number;
  stickyHeader?: boolean;
}

export interface ListContainerProps {
  children: React.ReactNode | JSX.Element;
  maxHeight?: number;
  stickyHeader?: boolean;
}

export interface ListHeaderProps {
  children: React.ReactNode | JSX.Element;
}

export interface ListBodyProps {
  children: React.ReactNode | JSX.Element;
}

export interface RecordInfoProps {
  idx: number;
  n: number;
  nPerPage: number;
}

export interface PaginationUnitProps {
  children: React.ReactNode | JSX.Element;
  isActive?: boolean;
  isDisabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface PaginationWrapperProps {
  children: React.ReactNode | JSX.Element;
}

export interface PaginationPropsInner {
  PaginationUnit: (props: PaginationUnitProps) => JSX.Element;
  PaginationWrapper: (props: PaginationWrapperProps) => JSX.Element;
}

export interface PaginationProps {
  idx: number;
  n: number;
  nPerPage: number;
  onClick: (num: number) => void;
}

export interface ColCellProps {
  children: React.ReactNode | JSX.Element;
  colSpan?: number;
  style?: React.CSSProperties;
}

export interface PaginationWrapperProps {
  children: React.ReactNode | JSX.Element;
}

export interface OrderControllerUpAndDownProps {
  onClick: (isAscending: boolean) => void;
}

export interface OrderControllerProps {
  descAsc: boolean | null;
  onClick: (a: null) => void;
}

export interface OuterProps<A> {
  HeaderUnit: (props: HeaderUnitProps) => JSX.Element;
  FilterUnit: (props: FilterUnitProps<A>) => JSX.Element | null;
  OrderController: (props: OrderControllerProps) => JSX.Element;
  ColCell: (props: ColCellProps) => JSX.Element;
  GlobalSearch: (props: GlobalSearchProps) => JSX.Element | null;
  NoRow: (props: NoRowProps) => JSX.Element | null;
  Row: (props: RowProps) => JSX.Element;
  ListWrapper: (props: ListWrapperProps) => JSX.Element;
  ListContainer: (props: ListContainerProps) => JSX.Element;
  ListHeader: (props: ListHeaderProps) => JSX.Element;
  ListBody: (props: ListBodyProps) => JSX.Element;
  RecordInfo: (props: RecordInfoProps) => JSX.Element | null;
  Pagination: (props: PaginationProps) => JSX.Element | null;
  Loader: () => JSX.Element;
}
