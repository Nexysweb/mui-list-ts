import {
  GlobalSearch,
  HeaderUnit,
  FilterUnit,
  OrderController,
  Row,
  ColCell,
  RecordInfo,
  NoRow,
  ListWrapper,
  ListContainer,
  ListHeader,
  ListBody,
  PaginationUnit,
  PaginationWrapper
} from './ui';
import ListSuper from './list-super';
import PaginationSuper from './pagination';
import * as OrderUtils from './order-utils';

const Pagination = PaginationSuper({ PaginationUnit, PaginationWrapper });

const List = ListSuper({
  HeaderUnit,
  FilterUnit,
  OrderController,
  ColCell,
  GlobalSearch,
  NoRow,
  Row,
  ListWrapper,
  ListContainer,
  ListHeader,
  ListBody,
  RecordInfo,
  Pagination
});

export { PaginationSuper, ListSuper, OrderUtils, List };
