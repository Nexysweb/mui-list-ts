import { DefinitionItem, FiltersType } from '../../types';
import { State } from './type';

const getInitialState = <A>(
  def: DefinitionItem<A>[],
  data?: A[],
  sortAttribute?: keyof A,
  sortDescAsc?: boolean,
  filters?: FiltersType<A>
): State<A> => ({
  data: data ? data : [],
  filters: filters || {},
  loading: false,
  numberOfTotalRows: data && data.length ? data.length : 0,
  sortAttribute,
  sortDescAsc: sortDescAsc !== undefined ? sortDescAsc : true,
  pageIdx: 1
});

export default getInitialState;
