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
  Loader
} from "./ui/index.js";
import ListSuper from "./list-super.js";
import PaginationMaterial from "./pagination-material.js";
const Pagination = PaginationMaterial;
const List = (props) => ListSuper({
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
  Pagination,
  Loader
})(props);
export default List;
