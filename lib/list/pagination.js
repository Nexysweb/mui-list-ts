import React from "../../_snowpack/pkg/react.js";
import {getPagination, getPageTiles} from "./utils/pagination-utils.js";
const Pagination = ({PaginationUnit: PaginationUnit2, PaginationWrapper: PaginationWrapper2}) => function(props) {
  const {n, nPerPage, idx, onClick} = props;
  if (n === 0) {
    return null;
  }
  const {nPage} = getPagination(n, nPerPage);
  const units = getPageTiles(idx, nPage).map((i) => {
    if (i < 0) {
      return /* @__PURE__ */ React.createElement(PaginationUnit2, {
        key: i,
        isDisabled: true
      }, "...");
    }
    return /* @__PURE__ */ React.createElement(PaginationUnit2, {
      key: i,
      isActive: i === idx,
      onClick: () => onClick(i)
    }, i);
  });
  return /* @__PURE__ */ React.createElement(PaginationWrapper2, null, /* @__PURE__ */ React.createElement(PaginationUnit2, {
    isDisabled: idx === 1,
    onClick: () => onClick(idx - 1)
  }, "\xAB"), units, /* @__PURE__ */ React.createElement(PaginationUnit2, {
    isDisabled: idx === nPage,
    onClick: () => onClick(idx + 1)
  }, "\xBB"));
};
export default Pagination;
