import { SortCompareOut } from '../../../types/definition';
import { getAttribute, order } from '../order-utils';

interface A {
  name: {
    first: string;
  };
}

test('getAttribute', () => {
  const a = { name: 'Michaël' };

  expect(getAttribute('name', a)).toEqual('michaël');
});

test('order', () => {
  const data = [{ name: 'Nicholas' }, { name: 'Michaël' }, { name: 'Alban' }];

  const r = order(data, 'name', true);

  const e = [{ name: 'Alban' }, { name: 'Michaël' }, { name: 'Nicholas' }];

  expect(r).toEqual(e);
});

test('order custom', () => {
  const data = [
    { name: { first: 'Nicholas' } },
    { name: { first: 'Michaël' } },
    { name: { first: 'Alban' } },
    { name: { first: 'Bernard' } }
  ];
  const f = (input: A): SortCompareOut => input.name.first;

  const r = order(data, f, true);

  const e = [
    { name: { first: 'Alban' } },
    { name: { first: 'Bernard' } },
    { name: { first: 'Michaël' } },
    { name: { first: 'Nicholas' } }
  ];

  expect(r).toEqual(e);
});
