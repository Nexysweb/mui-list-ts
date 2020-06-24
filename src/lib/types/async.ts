import { FiltersType } from '../list/list-super-partials';

export interface AsyncDataConfig<A> {
  nPerPage: number;
  pageIdx: number;
  filters: FiltersType<A>;
  sort: {
    descAsc: boolean;
    attribute?: keyof A;
  };
}

export interface AsyncDataReturn<A> {
  meta: {
    n: number;
  };
  data: A[];
}
