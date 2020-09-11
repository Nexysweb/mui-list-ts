import { State } from './type';

const getInitialState = <A>(
  data?: A[],
  sortAttribute?: keyof A,
  sortDescAsc?: boolean
): State<A> => ({
  data: data ? data : [],
  filters: {},
  loading: false,
  numberOfTotalRows: data && data.length ? data.length : 0,
  sortAttribute,
  sortDescAsc: sortDescAsc !== undefined ? sortDescAsc : true,
  pageIdx: 1
});

export default getInitialState;
