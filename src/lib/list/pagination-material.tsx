/**
 * Pagination from MUI
 * it is easy to create your own version, by using this file as an example
 * see
 * https://material-ui.com/api/pagination/#props
 * https://material-ui.com/api/pagination-item/#props
 * https://material-ui.com/components/pagination/#basic-pagination
 */
import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import PaginationMaterial from '@material-ui/lab/Pagination';
import { getPagination } from './utils/pagination-utils';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      '& > *': {
        marginTop: theme.spacing(2)
      }
    }
  })
);

export interface InnerProps {
  idx: number;
  n: number;
  nPerPage: number;
  onClick: (num: number) => void;
}

const Pagination = (props: InnerProps): JSX.Element | null => {
  const { n, nPerPage, idx, onClick } = props;
  const classes = useStyles();

  if (n === 0) {
    return null;
  }

  const { nPage } = getPagination(n, nPerPage);

  return (
    <div className={classes.root}>
      <PaginationMaterial
        page={idx}
        onChange={(_a: any, b: number): void => onClick(b)}
        count={nPage}
      />
    </div>
  );
};

export default Pagination;
