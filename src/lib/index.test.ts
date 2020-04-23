import * as Index from './index';

test('imports', () => {
  //expect(typeof Index.List).toEqual('function');
  expect(typeof Index.ListSuper).toEqual('function');
  expect(typeof Index.PaginationSuper).toEqual('function');
  expect(typeof Index.OrderUtils).toEqual('object');
  expect(typeof Index.Types).toEqual('object');
});
