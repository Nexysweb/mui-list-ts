/**
 * get the number of pages
 * @param  {[type]} n        total number of rows
 * @param  {[type]} nPerPage number of rows per page
 * @return {[type]}          number of pages
 */
export const getNPage = (n, nPerPage) => {
  return Math.ceil(n/nPerPage);
}

export const getPagination = (n, nPerPageIn) => {
  const nPerPage = nPerPageIn || 10;
  const nPage = getNPage(n, nPerPage);
  const idx = 1;

  return {
    idx,
    nPerPage,
    nPage
  }
}

/**
 * get list of page based on the index (-i means that there's a gap - we do not use null so that it can than be used as an index)
 * @param  {[type]} idx   the page on which the user id
 * @param  {[type]} nPage the total amount of pages
 * @return {[type]}       [1, null, idx - 1, idx, idx + 1, null, nPage]
 */
export const getPageTiles = (idx, nPage) => {
  if (idx < 1) {
    idx = 1;
  }

  if (idx > nPage) {
    idx = nPage;
  }

  const b1 = idx - 1;
  const b2 = idx + 1;

  // init array
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
    arr.push(3)
  }

  if (b1 > 2  && nPage > 4) {
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
}