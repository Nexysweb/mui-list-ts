export interface Config<A> {
  maxHeight?: number;
  nPerPage?: number;
  pagination?: boolean;
  search?: boolean;
  sortAttribute?: keyof A;
  sortDescAsc?: boolean;
  stickyHeader?: boolean;
  recordInfo?: boolean; // config: enable/disabled display n out of m page caption
}
