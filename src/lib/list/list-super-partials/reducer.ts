import { ActionType, Action, State } from './type';

function listSuperReducer<A>(state: State<A>, action: Action): State<A> {
  if (action.type === ActionType.FETCH_DATA_REQUEST) {
    return {
      ...state,
      loading: true
    };
  }

  if (action.type === ActionType.FETCH_DATA_SUCCESS) {
    const { data, numberOfTotalRows } = action.payload;
    return {
      ...state,
      loading: false,
      data,
      numberOfTotalRows
    };
  }

  if (action.type === ActionType.FILTER_CHANGE) {
    const { filters, pageIdx } = action.payload;
    return {
      ...state,
      filters,
      pageIdx
    };
  }

  if (action.type === ActionType.ORDER_CHANGE) {
    const { sortDescAsc, sortAttribute, pageIdx } = action.payload;
    return {
      ...state,
      sortDescAsc,
      sortAttribute,
      pageIdx
    };
  }

  if (action.type === ActionType.PAGE_CHANGE) {
    const { pageIdx } = action.payload;
    return {
      ...state,
      pageIdx
    };
  }

  return state;
}

export default listSuperReducer;
