import { applyFilter, compare, compareString, searchInObject, addRemoveToArray } from './filter-utils';

test('compareString', () => {
  const main = 'fullString';

  expect(compareString(main, 'ulls')).toEqual(true);
  expect(compareString(main, 'uls')).toEqual(false);

});

test('searchInObject', () => {
  const obj = {
    animal: 'lion',
    name: 'john'
  }

  expect(searchInObject('lio', obj)).toEqual(true);
  expect(searchInObject('ohn', obj)).toEqual(true);
  expect(searchInObject('kohn', obj)).toEqual(false);
});

test('compare', () => {
  expect(compare(345, "345")).toEqual(true);
  expect(compare(345, "346")).toEqual(false);
})

const data = [
  {name: 'Sheep', location: 'Europe', country: {name: 'United Kingdom'}},
  {name: 'Tiger', location: 'Asia', country: {name: 'India'}},
  {name: 'Elephant', location: 'Africa', country: {name: 'Tanzania'}},
  {name: 'Lion', location: 'Africa', country: {name: 'South Africa'}},
  {name: 'Cat', location: 'Europe', country: {name: 'Germany'}},
  {name: 'Grizzly', location: 'America', country: {name: 'Canada'}},
  {name: 'Antelope', location: 'Africa', country: {name: 'Namibia'}}];

test('filter 1', () => {
  const filters = {name: 'el'};
  const fData = [
    {name: 'Elephant', location: 'Africa', country: {name: 'Tanzania'}},
    {name: 'Antelope', location: 'Africa', country: {name: 'Namibia'}}
  ];

  expect(applyFilter(data, filters)).toEqual(fData)
});

test('filter 2', () => {
  const filters = {name: 'el', 'country.name': 'an'};
  const fData = [
    {name: 'Elephant', location: 'Africa', country: {name: 'Tanzania'}}
  ];

  expect(applyFilter(data, filters)).toEqual(fData)
});

test('addRemoveToArray', () => {
  expect(addRemoveToArray(2)).toEqual([2]);
  expect(addRemoveToArray(2, [3])).toEqual([3, 2]);
  expect(addRemoveToArray(3, [3, 2])).toEqual([2])
  expect(addRemoveToArray(4, [3, 2])).toEqual([3, 2, 4])
  expect(addRemoveToArray(4, [4])).toEqual([])
})