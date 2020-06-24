import { SortCompareOut, DefinitionItem } from '../../../types';
import { getAttribute, order, getSort } from '../order-utils';

interface A {
  name: {
    first: string;
  };
}

test('getAttribute', () => {
  const a = { name: 'Michaël' };

  expect(getAttribute('name', a)).toEqual('michaël');
});

test('order', () => {
  const data = [{ name: 'Nicholas' }, { name: 'Michaël' }, { name: 'Alban' }];

  const r = order(data, 'name', true);

  const e = [{ name: 'Alban' }, { name: 'Michaël' }, { name: 'Nicholas' }];

  expect(r).toEqual(e);
});

test('order custom', () => {
  const data = [
    { name: { first: 'Nicholas' } },
    { name: { first: 'Michaël' } },
    { name: { first: 'Alban' } },
    { name: { first: 'Bernard' } }
  ];
  const f = (input: A): SortCompareOut => input.name.first;

  const r = order(data, f, true);

  const e = [
    { name: { first: 'Alban' } },
    { name: { first: 'Bernard' } },
    { name: { first: 'Michaël' } },
    { name: { first: 'Nicholas' } }
  ];

  expect(r).toEqual(e);
});

interface DummyShape {
  name: string;
  value: string;
}

describe('getSort', () => {
  describe('sort function is NOT defined', () => {
    it('should return right attribute', () => {
      const def: DefinitionItem<DummyShape>[] = [
        {
          name: 'name',
          sort: true
        },
        {
          name: 'value'
        }
      ];
      const sortAttribute = getSort(def, 'name');
      expect(sortAttribute).toBe('name');
    });
  });

  describe('sort function is defined properly', () => {
    it('should return right the sort function', () => {
      const def: DefinitionItem<DummyShape>[] = [
        {
          name: 'name',
          sort: {
            func: (): SortCompareOut => {
              return 1;
            }
          }
        },
        {
          name: 'value'
        }
      ];
      const sortFunction = getSort(def, 'name');

      // the if is only for typescript
      if (typeof sortFunction === 'function') {
        expect(sortFunction({ name: 'test', value: 'val' })).toBe(1);
      } else {
        throw new Error('Something went wrong');
      }
    });
  });
});
