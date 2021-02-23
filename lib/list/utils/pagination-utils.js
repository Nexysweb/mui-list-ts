export const getNPage = (n, nPerPage) => {
  return Math.ceil(n / nPerPage);
};
export const getPagination = (n, nPerPageIn) => {
  const nPerPage = nPerPageIn || 10;
  const nPage = getNPage(n, nPerPage);
  const idx = 1;
  return {
    idx,
    nPerPage,
    nPage
  };
};
export const getPageTiles = (idx, nPage) => {
  if (idx < 1) {
    idx = 1;
  }
  if (idx > nPage) {
    idx = nPage;
  }
  const b1 = idx - 1;
  const b2 = idx + 1;
  const arr = [idx];
  if (idx > 1) {
    arr.unshift(b1);
  }
  if (idx === nPage && nPage > 3) {
    arr.unshift(b1 - 1);
  }
  if (idx < nPage) {
    arr.push(b2);
  }
  if (idx === 1 && nPage > 3) {
    arr.push(3);
  }
  if (b1 > 2 && nPage > 4) {
    arr.unshift(-1);
  }
  if (b1 > 1) {
    arr.unshift(1);
  }
  if (b2 < nPage - 1 && nPage > 4) {
    arr.push(-2);
  }
  if (b2 < nPage) {
    arr.push(nPage);
  }
  return arr;
};
export const paginationBoundaries = (idx, nPerPage) => {
  const start = (idx - 1) * nPerPage;
  const end = idx * nPerPage;
  return {start, end};
};
export const withPagination = (data, idx, nPerPage) => {
  const {start, end} = paginationBoundaries(idx, nPerPage);
  return data.slice(start, end);
};
