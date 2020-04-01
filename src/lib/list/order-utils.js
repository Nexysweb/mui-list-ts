import NexysUtil from '@nexys/utils';
const { get } = NexysUtil.ds;

export const getAttribute = (attribute, a) => {
  const ac = get(attribute, a);

  if (typeof ac === 'string') {
    return ac.toLocaleLowerCase();
  }

  return ac;
}

export const order = (data, sortAttribute, sortDescAsc) => {
  if (!sortAttribute) {
    return data;
  }

  // use function in utils
  const compare = ( a, b, attribute ) => {
    const ac = getAttribute(attribute, a);
    const bc = getAttribute(attribute, b);

    if ( ac < bc ){
      return -1;
    }
    if ( ac > bc ){
      return 1;
    }
    return 0;
  }

  const ordered = data.sort((a, b) => compare(a, b, sortAttribute));

  if (sortDescAsc === false) {
    return ordered.reverse();
  }

  return ordered;
}

export const paginationBoundaries = (idx, nPerPage) => {
  const start = (idx - 1) * nPerPage;
  const end = (idx) * nPerPage;

  return { start, end };
}

export const orderWithPagination = (data, idx, nPerPage) => {
  const { start, end } = paginationBoundaries(idx, nPerPage);

  return data.slice(start, end);
}