import { FiltersType } from '../../types';

export interface State<A> {
  sortAttribute?: keyof A;
  sortDescAsc: boolean;
  filters: FiltersType<A>;
  pageIdx: number;
  data: A[];
  numberOfTotalRows: number;
  loading: boolean;
}

export enum ActionType {
  FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST',
  FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS',
  FILTER_CHANGE = 'FILTER_CHANGE',
  ORDER_CHANGE = 'ORDER_CHANGE',
  PAGE_CHANGE = 'PAGE_CHANGE'
}

export interface Action {
  type: ActionType;
  payload?: any;
}
