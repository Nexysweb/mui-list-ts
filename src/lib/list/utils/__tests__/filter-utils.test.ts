import { DefinitionItem, Filter, FiltersType } from '../../../types';
import {
  applyFilter,
  compare,
  compareString,
  searchInObject,
  addRemoveToArray,
  toFilterArray,
  updateFilters,
  getFilterObj,
  transformFilterPropToStateFilter
} from '../filter-utils';

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

describe('toFilterArray', () => {
  it('should transform filters object to an array in the right structure', () => {
    const filters: FiltersType<Animal> = {
      name: 'el',
      location: 'Asia'
    };

    const filterArray = toFilterArray(filters);

    expect(filterArray).toHaveLength(2);
    expect(filterArray[0]).toEqual({ name: 'name', value: 'el' });
    expect(filterArray[1]).toEqual({ name: 'location', value: 'Asia' });
  });
});

test('filter 1', () => {
  const filters: FiltersType<Animal> = { name: 'el' };
  const fData = [
    { name: 'Elephant', location: 'Africa', country: { name: 'Tanzania' } },
    { name: 'Antelope', location: 'Africa', country: { name: 'Namibia' } }
  ];

  expect(applyFilter(data, filters)).toEqual(fData);
});

test('filter 2', () => {
  const filters: FiltersType<Animal> = { name: 'sh', location: 'eu' };
  const fData = [
    { name: 'Sheep', location: 'Europe', country: { name: 'United Kingdom' } }
  ];

  expect(applyFilter(data, filters)).toEqual(fData);
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

interface CompliciatedDummyShape {
  name: {
    common: string;
    native: string;
  };
  short: string;
}

describe('updateFilters', () => {
  describe('value is null', () => {
    it('should remove proper filter', () => {
      const filters = {
        name: 'John'
      };

      const newFilters = updateFilters<DummyShape>(filters, {
        name: 'name',
        value: null
      });

      expect(newFilters.name).toBe(undefined);
    });
  });

  describe('value is empty string', () => {
    it('should remove proper filter', () => {
      const filters = {
        name: 'John'
      };

      const newFilters = updateFilters<DummyShape>(filters, {
        name: 'name',
        value: ''
      });

      expect(newFilters.name).toBe(undefined);
    });
  });

  describe('value is something else', () => {
    describe('value is a string', () => {
      it('should add proper filter', () => {
        const filters = {};

        const newFilters = updateFilters<DummyShape>(filters, {
          name: 'name',
          value: 'John'
        });

        expect(newFilters.name).toBe('John');
      });
    });

    describe('value is an object', () => {
      describe('type is category', () => {
        it('should add proper filter', () => {
          const filters = {};

          let newFilters = updateFilters<CompliciatedDummyShape>(filters, {
            type: 'category',
            name: 'name',
            value: {
              value: 'DO',
              func: (): boolean => true
            }
          });

          expect(newFilters.name.value.length).toBe(1);
          expect(newFilters.name.value[0]).toBe('DO');

          newFilters = updateFilters<CompliciatedDummyShape>(filters, {
            type: 'category',
            name: 'name',
            value: {
              value: 'JO',
              func: (): boolean => true
            }
          });

          expect(newFilters.name.value.length).toBe(2);
          expect(newFilters.name.value[0]).toBe('DO');
          expect(newFilters.name.value[1]).toBe('JO');
        });

        it('should remove proper filter', () => {
          const filters = {};

          let newFilters = updateFilters<CompliciatedDummyShape>(filters, {
            type: 'category',
            name: 'name',
            value: {
              value: 'DO',
              func: (): boolean => true
            }
          });

          expect(newFilters.name.value.length).toBe(1);

          newFilters = updateFilters<CompliciatedDummyShape>(filters, {
            type: 'category',
            name: 'name',
            value: {
              value: 'JO',
              func: (): boolean => true
            }
          });

          expect(newFilters.name.value.length).toBe(2);

          newFilters = updateFilters<CompliciatedDummyShape>(filters, {
            type: 'category',
            name: 'name',
            value: {
              value: 'JO',
              func: (): boolean => true
            }
          });

          expect(newFilters.name.value.length).toBe(1);
          expect(newFilters.name.value[0]).toBe('DO');
        });
      });

      describe('type is NOT category', () => {
        it('should add proper filter', () => {
          const filters = {};

          const newFilters = updateFilters<CompliciatedDummyShape>(filters, {
            name: 'name',
            value: {
              value: 'John',
              func: (): boolean => true
            }
          });

          expect(newFilters.name).toMatchInlineSnapshot(`
            Object {
              "func": [Function],
              "value": Object {
                "func": [Function],
                "value": "John",
              },
            }
          `);
        });
      });
    });
  });
});

describe('getFilterObj', () => {
  const def: DefinitionItem<DummyShape>[] = [
    {
      name: 'name',
      filter: {
        type: 'category',
        func: (dataRow, value) => true
      }
    },
    {
      name: 'value',
      filter: true
    }
  ];

  describe('filter is OBJECT', () => {
    it('should return the right obj', () => {
      const re = getFilterObj(def, 'name') as Filter<DummyShape>;

      expect(re.type).toBe('category');
      expect(re.func).toBeDefined();
    });
  });

  describe('filter is NOT OBJECT', () => {
    it('should return filterAttribute', () => {
      const re = getFilterObj(def, 'value');

      expect(re).toBe('value');
    });
  });
});

describe('transformFilterPropToStateFilter', () => {
  const def: DefinitionItem<Animal>[] = [
    {
      name: 'name',
      filter: {
        type: 'category',
        func: (dataRow, value) => true
      }
    },
    {
      name: 'location',
      filter: true
    },
    {
      name: 'country',
      filter: {
        type: 'select',
        func: (dataRow, value) => true
      }
    }
  ];

  describe('filter.func is a function', () => {
    const filters: FiltersType<Animal> = {
      name: ['elephant', 'tiger'],
      country: 'Switzerland'
    };

    describe('filter.type is SELECT', () => {
      const re = transformFilterPropToStateFilter(def, filters);

      expect(re.country.value).toEqual({ value: 'Switzerland' });
      expect(re.country.func).toBeDefined();
      expect(typeof re.country.func).toBe('function');
    });

    describe('filter.type is NOT SELECT', () => {
      const re = transformFilterPropToStateFilter(def, filters);

      expect(re.name.value).toEqual(['elephant', 'tiger']);
      expect(re.name.func).toBeDefined();
      expect(typeof re.name.func).toBe('function');
    });
  });

  describe('filter.func is NOT a function', () => {
    const filters: FiltersType<Animal> = {
      location: 'Asia'
    };

    it('should transform prop correctly', () => {
      const re = transformFilterPropToStateFilter(def, filters);

      expect(re.location).toEqual('Asia');
    });
  });
});
