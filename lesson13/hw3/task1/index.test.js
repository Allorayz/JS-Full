import { reverseArray } from './index.js';

it('what if the argument is an array', () => {
  const result = reverseArray();
  expect(result).toEqual(null);
});

it('what if the array is reverced', () => {
  const result = reverseArray([1, 2, 3, 4, 5]);
  expect(result).toEqual([5, 4, 3, 2, 1]);
});
