import { State } from './type';

const getInitialState = <A>(data?: A[]): State<A> => ({
  sortDescAsc: true,
  filters: {},
  pageIdx: 1,
  data: data ? data : [],
  numberOfTotalRows: data && data.length ? data.length : 0,
  loading: false
});

export default getInitialState;
