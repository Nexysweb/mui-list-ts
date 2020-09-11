export type PropFiltersType<A> = { [k in keyof A]?: any };

export interface Config<A> {
  debounceWait?: number;
  filters?: PropFiltersType<A>;
  maxHeight?: number;
  nPerPage?: number;
  pagination?: boolean;
  search?: boolean;
  sortAttribute?: keyof A;
  sortDescAsc?: boolean;
  stickyHeader?: boolean;
  recordInfo?: boolean; // config: enable/disabled display n out of m page caption
}
