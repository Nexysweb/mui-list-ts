import { SortAttribute, DefinitionItem } from '../../types';

export const getAttribute = <A>(attribute: keyof A, a: A): SortAttribute => {
  const ac = String(a[attribute]);

  if (typeof ac === 'number' && typeof ac === 'boolean') {
    return ac;
  }

  return String(ac).toLocaleLowerCase();
};

const getCompareAttributes = <A>(
  a: A,
  b: A,
  attributeOrFunc: keyof A | ((input: A) => SortAttribute)
): { ac: SortAttribute; bc: SortAttribute } => {
  if (typeof attributeOrFunc === 'function') {
    const ac = attributeOrFunc(a);
    const bc = attributeOrFunc(b);

    return { ac, bc };
  }

  const ac = getAttribute<A>(attributeOrFunc, a);
  const bc = getAttribute<A>(attributeOrFunc, b);

  return { ac, bc };
};

const compareFunc = <A>(
  a: A,
  b: A,
  attributeOrFunc: keyof A | ((input: A) => SortAttribute)
): -1 | 0 | 1 => {
  const { ac, bc } = getCompareAttributes<A>(a, b, attributeOrFunc);

  if (ac < bc) {
    return -1;
  }
  if (ac > bc) {
    return 1;
  }
  return 0;
};

export const order = <A>(
  data: A[],
  sortAttribute: keyof A | ((input: A) => SortAttribute),
  sortDescAsc: boolean
): A[] => {
  if (!sortAttribute) {
    return data;
  }

  const ordered: A[] = data.sort((a, b) => compareFunc<A>(a, b, sortAttribute));

  if (sortDescAsc === false) {
    return ordered.reverse();
  }

  return ordered;
};

export const getSort = <A>(
  def: DefinitionItem<A>[],
  sortAttribute: keyof A
): (keyof A | ((input: A) => SortAttribute)) | keyof A => {
  const i = def.find(x => x.name === sortAttribute);
  if (!i || !i.sort) {
    throw Error('sort attribute could not be matched');
  }

  if (typeof i.sort === 'object' && 'getAttribute' in i.sort) {
    return i.sort.getAttribute;
  }

  return sortAttribute;
};
