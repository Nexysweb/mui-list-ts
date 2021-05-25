import React from "../../../_snowpack/pkg/react.js";
import {paginationBoundaries} from "../../../_snowpack/pkg/@nexys/core-list/dist/list/utils/pagination-utils.js";
import Alert from "../../components/alert.js";
import GlobalSearch from "./global-search.js";
import PopoverFilter from "./popover-filter.js";
import FilterUnit from "./filter-unit.js";
import Loader from "./loader.js";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  TableContainer
} from "../../../_snowpack/pkg/@material-ui/core.js";
import {
  KeyboardArrowUp as ChevronUp,
  KeyboardArrowDown as ChevronDown,
  UnfoldMore as SortDefault
} from "../../../_snowpack/pkg/@material-ui/icons.js";
export const NoRow = (props) => {
  if (props.n > 0) {
    return null;
  }
  return /* @__PURE__ */ React.createElement(Alert, {
    type: "warning"
  }, "No rows found");
};
export const PaginationWrapper = (props) => {
  return /* @__PURE__ */ React.createElement("nav", null, /* @__PURE__ */ React.createElement("ul", {
    className: "pagination"
  }, props.children));
};
export const PaginationUnit = (props) => {
  const {isActive, isDisabled, children, onClick} = props;
  if (isDisabled) {
    return null;
  }
  const className = "page-item" + (isActive ? " active" : "") + (isDisabled ? " disabled" : "");
  return /* @__PURE__ */ React.createElement("li", {
    className
  }, /* @__PURE__ */ React.createElement("button", {
    className: "page-link",
    onClick
  }, children));
};
export const ColCell = (props) => {
  const {children, colSpan, style} = props;
  return /* @__PURE__ */ React.createElement(TableCell, {
    colSpan,
    style
  }, children);
};
export const HeaderUnit = (props) => {
  const {children} = props;
  return /* @__PURE__ */ React.createElement(TableCell, {
    style: {fontWeight: "bold"}
  }, children);
};
export const OrderControllerUpAndDown = (props) => {
  return /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("span", {
    key: "asc",
    onClick: () => props.onClick(true)
  }, /* @__PURE__ */ React.createElement(ChevronUp, null)), /* @__PURE__ */ React.createElement("span", {
    key: "desc",
    onClick: () => props.onClick(false)
  }, /* @__PURE__ */ React.createElement(ChevronDown, null)));
};
export const OrderController = (props) => {
  const {onClick, descAsc} = props;
  let Icon = SortDefault;
  if (descAsc !== null) {
    Icon = descAsc ? ChevronUp : ChevronDown;
  }
  return /* @__PURE__ */ React.createElement("div", {
    style: {
      cursor: "pointer",
      display: "inline-block",
      color: descAsc === null ? "#ccc" : "#000"
    },
    onClick: () => onClick(null)
  }, /* @__PURE__ */ React.createElement(Icon, null));
};
export const ListWrapper = (props) => {
  const {children} = props;
  return /* @__PURE__ */ React.createElement("div", {
    className: "table-responsive-sm"
  }, children);
};
export const ListContainer = (props) => {
  const {children, maxHeight, stickyHeader = false} = props;
  return /* @__PURE__ */ React.createElement(TableContainer, {
    style: maxHeight ? {maxHeight} : void 0
  }, /* @__PURE__ */ React.createElement(Table, {
    size: "small",
    stickyHeader
  }, children));
};
export const Row = (props) => {
  const {children} = props;
  return /* @__PURE__ */ React.createElement(TableRow, null, children);
};
export const ListHeader = (props) => {
  const {children} = props;
  return /* @__PURE__ */ React.createElement(TableHead, null, children);
};
export const ListBody = (props) => {
  const {children} = props;
  return /* @__PURE__ */ React.createElement(TableBody, null, children);
};
export const RecordInfo = (props) => {
  const {nPerPage, idx, n} = props;
  if (n === 0) {
    return null;
  }
  const {start, end} = paginationBoundaries(idx, nPerPage);
  return /* @__PURE__ */ React.createElement("p", {
    className: "pull-right"
  }, "Showing ", start + 1, " to ", Number(start) + Number(nPerPage) > n ? n : end, " of", " ", n, " entries");
};
export {FilterUnit, GlobalSearch, PopoverFilter, Loader};
