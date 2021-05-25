import React from "../../_snowpack/pkg/react.js";
import {getPagination, getPageTiles} from "./utils/pagination-utils.js";
const Pagination = ({PaginationUnit, PaginationWrapper}) => (props) => {
  const {n, nPerPage, idx, onClick} = props;
  if (n === 0) {
    return null;
  }
  const {nPage} = getPagination(n, nPerPage);
  const units = getPageTiles(idx, nPage).map((i) => {
    if (i < 0) {
      return /* @__PURE__ */ React.createElement(PaginationUnit, {
        key: i,
        isDisabled: true
      }, "...");
    }
    return /* @__PURE__ */ React.createElement(PaginationUnit, {
      key: i,
      isActive: i === idx,
      onClick: () => onClick(i)
    }, i);
  });
  return /* @__PURE__ */ React.createElement(PaginationWrapper, null, /* @__PURE__ */ React.createElement(PaginationUnit, {
    isDisabled: idx === 1,
    onClick: () => onClick(idx - 1)
  }, "«"), units, /* @__PURE__ */ React.createElement(PaginationUnit, {
    isDisabled: idx === nPage,
    onClick: () => onClick(idx + 1)
  }, "»"));
};
export default Pagination;
