import { DefinitionItem, SortCompareOut } from '../types';

import {
  applyFilter,
  compare,
  compareString,
  searchInObject,
  addRemoveToArray,
  toFilterArray,
  FilterSearchValue,
  getSort
} from './filter-utils';

test('compareString', () => {
  const main = 'fullString';

  expect(compareString(main, 'ulls')).toEqual(true);
  expect(compareString(main, 'uls')).toEqual(false);
});

test('searchInObject', () => {
  const obj = {
    animal: 'lion',
    name: 'john'
  };

  expect(searchInObject('lio', obj)).toEqual(true);
  expect(searchInObject('ohn', obj)).toEqual(true);
  expect(searchInObject('kohn', obj)).toEqual(false);
});

test('compare', () => {
  expect(compare(345, '345')).toEqual(true);
  expect(compare(345, '346')).toEqual(false);
});

interface Animal {
  name: string;
  location: string;
  country: { name: string };
}

const data: Animal[] = [
  { name: 'Sheep', location: 'Europe', country: { name: 'United Kingdom' } },
  { name: 'Tiger', location: 'Asia', country: { name: 'India' } },
  { name: 'Elephant', location: 'Africa', country: { name: 'Tanzania' } },
  { name: 'Lion', location: 'Africa', country: { name: 'South Africa' } },
  { name: 'Cat', location: 'Europe', country: { name: 'Germany' } },
  { name: 'Grizzly', location: 'America', country: { name: 'Canada' } },
  { name: 'Antelope', location: 'Africa', country: { name: 'Namibia' } }
];

test('filter 1', () => {
  const filters: { [k in keyof Animal]?: FilterSearchValue } = { name: 'el' };
  const fData = [
    { name: 'Elephant', location: 'Africa', country: { name: 'Tanzania' } },
    { name: 'Antelope', location: 'Africa', country: { name: 'Namibia' } }
  ];

  expect(applyFilter(data, toFilterArray(filters))).toEqual(fData);
});

test('filter 2', () => {
  const filters = { name: 'sh', location: 'eu' };
  const fData = [
    { name: 'Sheep', location: 'Europe', country: { name: 'United Kingdom' } }
  ];

  expect(applyFilter(data, toFilterArray(filters))).toEqual(fData);
});

test('addRemoveToArray', () => {
  expect(addRemoveToArray(2)).toEqual([2]);
  expect(addRemoveToArray(2, [3])).toEqual([3, 2]);
  expect(addRemoveToArray(3, [3, 2])).toEqual([2]);
  expect(addRemoveToArray(4, [3, 2])).toEqual([3, 2, 4]);
  expect(addRemoveToArray(4, [4])).toEqual([]);
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
