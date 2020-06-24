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

import ListSuper, { InnerProps } from './list-super';
import PaginationMaterial from './pagination-material';

// by default we use the pagination from Material UI
const Pagination = PaginationMaterial; // PaginationSuper({ PaginationUnit, PaginationWrapper });

const List = <A>(props: InnerProps<A>): JSX.Element =>
  ListSuper<A>({
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
  })(props);

export default List;
