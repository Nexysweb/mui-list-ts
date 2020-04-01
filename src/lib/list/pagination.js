import React from 'react';

import { getPagination, getPageTiles } from './pagination-utils';

const Pagination = ({PaginationWrapper, PaginationUnit}) => props => {
  const {n, nPerPage, idx, onClick } = props;

  if (n === 0) {
    return null;
  }

  const { nPage } = getPagination(n, nPerPage)

  const units = getPageTiles(idx, nPage).map((i) => {
    if ( i < 0 ) {
      return <PaginationUnit key={i} isDisabled={true}>...</PaginationUnit>;
    }

    return <PaginationUnit key={i} isActive={i === idx} onClick={x => onClick(i)}>{i}</PaginationUnit>;
  });

  return <PaginationWrapper>
    <PaginationUnit isDisabled={idx === 1} onClick={x => onClick(idx - 1)}>&laquo;</PaginationUnit>
    {units}
    <PaginationUnit isDisabled={idx === nPage} onClick={x => onClick(idx + 1)}>&raquo;</PaginationUnit>
  </PaginationWrapper>;
}

export default Pagination;
