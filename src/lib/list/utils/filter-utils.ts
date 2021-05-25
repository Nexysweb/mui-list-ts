import { DefinitionItem, Filter, FiltersType } from '../../types';
import { PropFiltersType } from '../../types/config';

export const compareString = (main: string, searchString: string): boolean =>
  main.toLowerCase().indexOf(searchString.toLowerCase()) > -1;

// interface Search {
//   value: string;
//   func: (d: any, searchValue: string) => boolean;
// }

export type FilterSearchValue = string | number | boolean;
export const toFilterArray = <A>(
  filters: { [k in keyof A]?: FilterSearchValue }
): FilterUnit<A>[] =>
  Object.entries(filters).map(([k, v]) => ({
    name: k as keyof A,
    value: v as FilterSearchValue
  }));
// above is generalization of
// const filterArray:FilterUnit<Animal>[] = Object.entries(filters).map(([k, v]) => ({name: k as keyof Animal, value: v as FilterSearchValue}))

export const compare = (
  main: any,
  search: string | number | boolean //| Search,
): boolean => {
  const mainType = typeof main;
  const searchType = typeof search;

  if (searchType === 'string') {
    // here casting the `main` so that it can match with the search even if not of the same type
    switch (mainType) {
      case 'string':
        return compareString(main as string, search as string);
      case 'number':
        return main === Number(search);
      default:
        return false;
    }
  }

  return false;
};

// this is a hack that will work for nested objects... leaving like this until better option
export const searchInObject = (searchString: string, object: any): boolean =>
  JSON.stringify(object).toLowerCase().includes(searchString.toLowerCase());

// same as above but only works with linear object, the rsult will be more precise though
export const searchInObjectLinear = (
  searchString: string,
  object: any
): boolean =>
  Object.keys(object)
    .map(o => {
      const main = object[o];

      return compare(main, searchString);
    })
    .reduce((a, b) => a || b);

export type FilterFunc<A> = (
  d: A,
  searchValue: any[],
  filtersObj?: FiltersType<A>
) => boolean;
export type FilterUnit<A> = {
  name: keyof A | 'globalSearch';
  value: string | number | boolean | { value: any; func: FilterFunc<A> };
};

// todo here unfortunately `k` cant be typed as keyof A, typescript bug/limitation?
export const applyFilter = <A>(data: A[], filters: FiltersType<A>): A[] => {
  const filterArray = toFilterArray<A>(filters);

  if (filterArray.length === 0) {
    return data;
  }

  return data.filter((d: A) => {
    return filterArray
      .map(f => {
        if (f.name === 'globalSearch' && typeof f.value === 'string') {
          return searchInObject(f.value, d);
        }

        if (f.name !== 'globalSearch') {
          const key: keyof A = f.name;

          if (typeof f.value === 'object') {
            if (typeof f.value.func === 'function' && f.value.value) {
              if (Array.isArray(f.value.value) && f.value.value.length > 0) {
                return f.value.func(d, f.value.value, filters);
              } else {
                return f.value.func(d, f.value.value.value, filters);
              }
            }
            return true;
          }

          return compare(d[key], f.value);
        }

        return true;
      })
      .reduce((a, b) => a && b);
  });
};

export const addRemoveToArray = <T = any>(v: T, a: T[] = []): T[] => {
  if (!a) {
    return [v];
  }

  if (a.includes(v)) {
    const idx = a.indexOf(v);
    a.splice(idx, 1);

    return a;
  }

  a.push(v);

  return a;
};

export const updateFilters = <A>(
  filters: any,
  v: {
    name: keyof A | 'globalSearch' | 'id' | 'uuid';
    value: any;
    type?: string;
  }
): FiltersType<A> => {
  if (v.value === null || v.value === '') {
    delete filters[v.name];
  } else {
    // if object
    if (typeof v.value !== 'string') {
      if (v.type === 'category') {
        if (!filters[v.name]) {
          filters[v.name] = { value: [], func: v.value.func };
        }

        filters[v.name].value = addRemoveToArray(
          v.value.value,
          filters[v.name].value
        );

        if (filters[v.name].value.length === 0) {
          delete filters[v.name];
        }
      } else {
        if (!filters[v.name]) {
          filters[v.name] = { value: null, func: v.value.func };
        }

        filters[v.name].value = v.value;
      }
    } else {
      // if string
      filters[v.name] = v.value;
    }
  }

  // setState({ ...state, filters, pageIdx });
  return filters;
};

export const getFilterObj = <A>(
  def: DefinitionItem<A>[],
  filterAttribute: keyof A
): Filter<A> | keyof A => {
  const i = def.find(x => x.name === filterAttribute);
  if (!i || !i.filter) {
    throw Error('filter attribute could not be matched');
  }

  if (typeof i.filter === 'object' && 'func' in i.filter) {
    return {
      type: i.filter.type,
      func: i.filter.func
    };
  }

  return filterAttribute;
};

export const transformFilterPropToStateFilter = <A>(
  def: DefinitionItem<A>[],
  filters: PropFiltersType<A>
): FiltersType<A> => {
  return Object.entries(filters)
    .map(([key, value]) => {
      const filterObj = getFilterObj<A>(def, key as keyof A);
      return {
        key,
        value,
        filterObj
      };
    })
    .reduce((acc: any, cur) => {
      const { key } = cur;

      let filter: any;
      if (typeof (cur.filterObj as Filter<A>).func === 'function') {
        filter = {
          value:
            (cur.filterObj as Filter<A>).type === 'select'
              ? { value: cur.value }
              : cur.value,
          func: (cur.filterObj as Filter<A>).func
        };
      } else {
        filter = cur.value;
      }

      acc[key] = filter;
      return acc;
    }, {});
};

export const debounce = (wait: number = 200): ((func: () => void) => void) => {
  let timeout: any; //NodeJS.Timeout

  return (func: () => void): void => {
    clearTimeout(timeout);
    timeout = setTimeout(func, wait);
  };
};
