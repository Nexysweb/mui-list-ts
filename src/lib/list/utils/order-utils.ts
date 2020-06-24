import { SortCompareOut } from '../../types/definition';

export const getAttribute = <A>(attribute: keyof A, a: A): SortCompareOut => {
  const ac = String(a[attribute]);

  if (typeof ac === 'number' && typeof ac === 'boolean') {
    return ac;
  }

  return String(ac).toLocaleLowerCase();
};

const getCompareAttributes = <A>(
  a: A,
  b: A,
  attributeOrFunc: keyof A | ((input: A) => SortCompareOut)
): { ac: SortCompareOut; bc: SortCompareOut } => {
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
  attributeOrFunc: keyof A | ((input: A) => SortCompareOut)
): number => {
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
  sortAttribute: keyof A | ((input: A) => SortCompareOut),
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
