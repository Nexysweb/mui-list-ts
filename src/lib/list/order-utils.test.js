import { getAttribute, order} from './order-utils';

test('getAttribute', () => {
  const a = {name: {first: 'Michaël'}};

  expect(getAttribute('name.first', a)).toEqual('michaël')
})

test('order', () => {
  const data = [
    {name: 'Nicholas'},
    {name: 'Michaël'},
    {name: 'Alban'}
  ]

  const r = order(data, 'name', true);

  const e = [
    {name: 'Alban'},
    {name: 'Michaël'},
    {name: 'Nicholas'}
  ]

  expect(r).toEqual(e);
})
