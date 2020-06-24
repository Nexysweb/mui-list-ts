export interface AsyncDataConfig {
  nPerPage: number;
  pageIdx: number;
  filters: any;
  sort: any;
}

export interface AsyncDataReturn<A> {
  meta: {
    n: number;
  };
  data: A[];
}
