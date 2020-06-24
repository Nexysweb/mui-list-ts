import {
  getPagination,
  getNPage,
  getPageTiles,
  paginationBoundaries,
  withPagination
} from '../pagination-utils';

test('gepagination', () => {
  const r = getPagination(23, 20);

  expect(r).toEqual({ idx: 1, nPage: 2, nPerPage: 20 });
});

test('getNPage', () => {
  expect(getNPage(20, 10)).toEqual(2);
});

test('getNPage - 2', () => {
  expect(getNPage(21, 10)).toEqual(3);
});

test('getNPage - 0 record', () => {
  expect(getNPage(0, 10)).toEqual(0);
});

test('getPageTiles, n=1', () => {
  const n = 1;

  expect(getPageTiles(1, n)).toEqual([1]);
  expect(getPageTiles(0, n)).toEqual([1]);
  expect(getPageTiles(-1, n)).toEqual([1]);
});

test('getPageTiles, n=2', () => {
  const n = 2;

  expect(getPageTiles(1, n)).toEqual([1, 2]);
  expect(getPageTiles(2, n)).toEqual([1, 2]);
});

test('getPageTiles, n=3', () => {
  const n = 3;

  expect(getPageTiles(1, n)).toEqual([1, 2, 3]);
  expect(getPageTiles(2, n)).toEqual([1, 2, 3]);
  expect(getPageTiles(3, n)).toEqual([1, 2, 3]);
});

test('getPageTiles, n=4', () => {
  const n = 4;

  expect(getPageTiles(1, n)).toEqual([1, 2, 3, 4]);
  expect(getPageTiles(2, n)).toEqual([1, 2, 3, 4]);
  expect(getPageTiles(3, n)).toEqual([1, 2, 3, 4]);
  expect(getPageTiles(4, n)).toEqual([1, 2, 3, 4]);
});

test('getPageTiles, n=5', () => {
  const n = 5;

  expect(getPageTiles(1, n)).toEqual([1, 2, 3, -2, n]);
  expect(getPageTiles(2, n)).toEqual([1, 2, 3, -2, n]);
  expect(getPageTiles(3, n)).toEqual([1, 2, 3, 4, n]);
  expect(getPageTiles(4, n)).toEqual([1, -1, 3, 4, n]);
  expect(getPageTiles(5, n)).toEqual([1, -1, 3, 4, n]);
});

test('getPageTiles, n=6', () => {
  const n = 6;

  expect(getPageTiles(1, n)).toEqual([1, 2, 3, -2, n]);
  expect(getPageTiles(2, n)).toEqual([1, 2, 3, -2, n]);
  expect(getPageTiles(3, n)).toEqual([1, 2, 3, 4, -2, n]);
  expect(getPageTiles(4, n)).toEqual([1, -1, 3, 4, 5, n]);
  expect(getPageTiles(5, n)).toEqual([1, -1, 4, 5, n]);
  expect(getPageTiles(6, n)).toEqual([1, -1, 4, 5, n]);
});

test('getPageTiles, n=7', () => {
  const n = 7;

  expect(getPageTiles(1, n)).toEqual([1, 2, 3, -2, n]);
  expect(getPageTiles(2, n)).toEqual([1, 2, 3, -2, n]);
  expect(getPageTiles(3, n)).toEqual([1, 2, 3, 4, -2, n]);
  expect(getPageTiles(4, n)).toEqual([1, -1, 3, 4, 5, -2, n]);
  expect(getPageTiles(5, n)).toEqual([1, -1, 4, 5, 6, n]);
  expect(getPageTiles(6, n)).toEqual([1, -1, 5, 6, n]);
  expect(getPageTiles(7, n)).toEqual([1, -1, 5, 6, n]);
});

test('getPageTiles, n=8', () => {
  const n = 8;

  expect(getPageTiles(1, n)).toEqual([1, 2, 3, -2, n]);
  expect(getPageTiles(2, n)).toEqual([1, 2, 3, -2, n]);
  expect(getPageTiles(3, n)).toEqual([1, 2, 3, 4, -2, n]);
  expect(getPageTiles(4, n)).toEqual([1, -1, 3, 4, 5, -2, n]);
  expect(getPageTiles(5, n)).toEqual([1, -1, 4, 5, 6, -2, n]);
  expect(getPageTiles(6, n)).toEqual([1, -1, 5, 6, 7, n]);
  expect(getPageTiles(7, n)).toEqual([1, -1, 6, 7, n]);
  expect(getPageTiles(8, n)).toEqual([1, -1, 6, 7, n]);
});

test('getPageTiles, n=9', () => {
  const n = 9;

  expect(getPageTiles(1, n)).toEqual([1, 2, 3, -2, n]);
  expect(getPageTiles(2, n)).toEqual([1, 2, 3, -2, n]);
  expect(getPageTiles(3, n)).toEqual([1, 2, 3, 4, -2, n]);
  expect(getPageTiles(4, n)).toEqual([1, -1, 3, 4, 5, -2, n]);
  expect(getPageTiles(5, n)).toEqual([1, -1, 4, 5, 6, -2, n]);
  expect(getPageTiles(6, n)).toEqual([1, -1, 5, 6, 7, -2, n]);
  expect(getPageTiles(7, n)).toEqual([1, -1, 6, 7, 8, n]);
  expect(getPageTiles(8, n)).toEqual([1, -1, 7, 8, n]);
  expect(getPageTiles(9, n)).toEqual([1, -1, 7, 8, n]);
});

test('getPageTiles, n=10', () => {
  const n = 10;

  expect(getPageTiles(1, n)).toEqual([1, 2, 3, -2, n]);
  expect(getPageTiles(2, n)).toEqual([1, 2, 3, -2, n]);
  expect(getPageTiles(3, n)).toEqual([1, 2, 3, 4, -2, n]);
  expect(getPageTiles(4, n)).toEqual([1, -1, 3, 4, 5, -2, n]);
  expect(getPageTiles(5, n)).toEqual([1, -1, 4, 5, 6, -2, n]);
  expect(getPageTiles(6, n)).toEqual([1, -1, 5, 6, 7, -2, n]);
  expect(getPageTiles(7, n)).toEqual([1, -1, 6, 7, 8, -2, n]);
  expect(getPageTiles(8, n)).toEqual([1, -1, 7, 8, 9, n]);
  expect(getPageTiles(9, n)).toEqual([1, -1, 8, 9, n]);
  expect(getPageTiles(n, n)).toEqual([1, -1, 8, 9, n]);
});

describe('paginationBoundaries', () => {
  it('should return proper shape', () => {
    const re = paginationBoundaries(1, 5);
    expect(re.start).toBeDefined();
    expect(re.end).toBeDefined();
  });

  it('should return correct values', () => {
    let re = paginationBoundaries(1, 5);
    expect(re.start).toBe(0);
    expect(re.end).toBe(5);

    re = paginationBoundaries(11, 13);
    expect(re.start).toBe(130);
    expect(re.end).toBe(143);
  });
});

describe('withPagination', () => {
  it('should slice data properly', () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let paginatedData = withPagination(data, 1, 1);

    expect(paginatedData.length).toBe(1);
    expect(paginatedData[0]).toBe(1);

    paginatedData = withPagination(data, 4, 2);

    expect(paginatedData.length).toBe(2);
    expect(paginatedData[0]).toBe(7);
    expect(paginatedData[1]).toBe(8);
  });
});
