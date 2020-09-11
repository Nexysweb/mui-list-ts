import { DefinitionItem } from '../../../types';
import getInitialState from '../state';

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

describe('List Super getInitialState', () => {
  it('should initialize with right default values', () => {
    const state = getInitialState(def);

    expect(state.filters).toEqual({});
    expect(state.loading).toBe(false);
    expect(state.pageIdx).toBe(1);
  });

  describe('data is UNDEFINED', () => {
    it('should initialize state with empty array', () => {
      const state = getInitialState(def);

      expect(state.data).toEqual([]);
      expect(state.numberOfTotalRows).toBe(0);
    });
  });

  describe('data is DEFINED', () => {
    it('should initialize state with passed data', () => {
      const dummyData: DummyData[] = [
        {
          id: 1,
          name: 'John'
        },
        {
          id: 2,
          name: 'Jane'
        }
      ];
      const state = getInitialState<DummyData>(def, dummyData);

      expect(state.data.length).toBe(2);
      expect(state.data[0].id).toBe(1);
      expect(state.data[0].name).toBe('John');
      expect(state.data[1].id).toBe(2);
      expect(state.data[1].name).toBe('Jane');
      expect(state.numberOfTotalRows).toBe(2);
    });
  });

  describe('sortAttribute is UNDEFINED', () => {
    it('should initialize state with undefined prop', () => {
      const state = getInitialState(def);

      expect(state.sortAttribute).toEqual(undefined);
    });
  });

  describe('sortAttribute is DEFINED', () => {
    it('should initialize state with right value', () => {
      const state = getInitialState<DummyData>(def, undefined, 'id');

      expect(state.sortAttribute).toBe('id');
    });
  });

  describe('sortDescAsc is UNDEFINED', () => {
    it('should initialize state with right value', () => {
      const state = getInitialState(def);

      expect(state.sortDescAsc).toEqual(true);
    });
  });

  describe('sortDescAsc is DEFINED', () => {
    it('should initialize state with right value', () => {
      const state = getInitialState(def, undefined, undefined, false);

      expect(state.sortDescAsc).toEqual(false);
    });
  });
});
