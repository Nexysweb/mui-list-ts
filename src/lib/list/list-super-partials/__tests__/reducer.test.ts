import getInitialState from '../state';
import { ActionType } from '../type';
import reducer from '../reducer';
import { DefinitionItem } from '../../../types';

interface DummyData {
  id: number;
  name: string;
}

const def: DefinitionItem<DummyData>[] = [
  {
    name: 'id'
  },
  {
    name: 'name'
  }
];

describe('List Super Reducer', () => {
  const initialState = getInitialState(def);

  it('should handle FETCH_DATA_REQUEST', () => {
    const newState = reducer(initialState, {
      type: ActionType.FETCH_DATA_REQUEST
    });
    expect(newState.loading).toBe(true);
  });

  it('should handle FETCH_DATA_SUCCESS', () => {
    const newState = reducer(initialState, {
      type: ActionType.FETCH_DATA_SUCCESS,
      payload: {
        data: [
          { id: 1, name: 'First' },
          { id: 2, name: 'Second' }
        ],
        numberOfTotalRows: 2
      }
    });
    expect(newState.loading).toBe(false);
    expect(newState.data.length).toBe(2);
    expect(newState.numberOfTotalRows).toBe(2);
  });

  it('should handle FILTER_CHANGE', () => {
    const newState = reducer(initialState, {
      type: ActionType.FILTER_CHANGE,
      payload: {
        pageIdx: 3,
        filters: { name: 'Some filter' }
      }
    });
    expect(newState.filters).toEqual({ name: 'Some filter' });
    expect(newState.pageIdx).toBe(3);
  });

  it('should handle ORDER_CHANGE', () => {
    const newState = reducer(initialState, {
      type: ActionType.ORDER_CHANGE,
      payload: {
        sortDescAsc: true,
        sortAttribute: 'name',
        pageIdx: 1
      }
    });
    expect(newState.sortAttribute).toBe('name');
    expect(newState.sortDescAsc).toBe(true);
    expect(newState.pageIdx).toBe(1);
  });

  it('should handle PAGE_CHANGE', () => {
    const newState = reducer(initialState, {
      type: ActionType.PAGE_CHANGE,
      payload: { pageIdx: 5 }
    });
    expect(newState.pageIdx).toBe(5);
  });
});
