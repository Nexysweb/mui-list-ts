export interface AsyncDataConfig<A> {
  nPerPage: number;
  pageIdx: number;
  filters: { [k in keyof A | 'globalSearch']?: any };
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
