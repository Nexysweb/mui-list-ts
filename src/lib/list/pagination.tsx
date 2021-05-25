import React from 'react';

import { getPagination, getPageTiles } from './utils/pagination-utils';
import { PaginationPropsInner, PaginationProps } from './ui-type';

const Pagination =
  ({ PaginationUnit, PaginationWrapper }: PaginationPropsInner) =>
  (props: PaginationProps): JSX.Element | null => {
    const { n, nPerPage, idx, onClick } = props;

    if (n === 0) {
      return null;
    }

    const { nPage } = getPagination(n, nPerPage);

    const units = getPageTiles(idx, nPage).map((i: number) => {
      if (i < 0) {
        return (
          <PaginationUnit key={i} isDisabled={true}>
            ...
          </PaginationUnit>
        );
      }

      return (
        <PaginationUnit
          key={i}
          isActive={i === idx}
          onClick={(): void => onClick(i)}
        >
          {i}
        </PaginationUnit>
      );
    });

    return (
      <PaginationWrapper>
        <PaginationUnit
          isDisabled={idx === 1}
          onClick={(): void => onClick(idx - 1)}
        >
          &laquo;
        </PaginationUnit>
        {units}
        <PaginationUnit
          isDisabled={idx === nPage}
          onClick={(): void => onClick(idx + 1)}
        >
          &raquo;
        </PaginationUnit>
      </PaginationWrapper>
    );
  };

export default Pagination;
