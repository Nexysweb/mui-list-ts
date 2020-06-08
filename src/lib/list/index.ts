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
  ListBody
  //PaginationUnit,PaginationWrapper
} from './ui';

import ListSuper from './list-super';
import PaginationMaterial from './pagination-material';

// by default we use the pagination from Material UI
const Pagination = PaginationMaterial; // PaginationSuper({ PaginationUnit, PaginationWrapper });

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

export default List;
