import NexysUtil from '@nexys/utils';
const { get } = NexysUtil.ds;

export const getAttribute = (attribute: any, a: any): any => {
  const ac = get(attribute, a);

  if (typeof ac === 'string') {
    return ac.toLocaleLowerCase();
  }

  return ac;
};

export const order = (
  data: any[],
  sortAttribute: string,
  sortDescAsc: boolean
): any[] => {
  if (!sortAttribute) {
    return data;
  }

  // use function in utils
  const compare = (a: any, b: any, attribute: string): number => {
    const ac = getAttribute(attribute, a);
    const bc = getAttribute(attribute, b);

    if (ac < bc) {
      return -1;
    }
    if (ac > bc) {
      return 1;
    }
    return 0;
  };

  const ordered = data.sort((a, b) => compare(a, b, sortAttribute));

  if (sortDescAsc === false) {
    return ordered.reverse();
  }

  return ordered;
};

export const paginationBoundaries = (
  idx: number,
  nPerPage: number
): { start: number; end: number } => {
  const start = (idx - 1) * nPerPage;
  const end = idx * nPerPage;

  return { start, end };
};

export const orderWithPagination = (
  data: any[],
  idx: number,
  nPerPage: number
): any[] => {
  const { start, end } = paginationBoundaries(idx, nPerPage);

  return data.slice(start, end);
};
