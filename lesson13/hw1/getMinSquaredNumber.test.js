import { getMinSquareNumber } from './getMinSquaredNumber';

it('should be null if array is empty', () => {
  const result = getMinSquareNumber([]);
  expect(result).toEqual(null);
});

it('should be null if String', () => {
  const result = getMinSquareNumber('[]');
  expect(result).toEqual(null);
});

it('should be the least square of numbers in the array', () => {
  const result = getMinSquareNumber([10, 9, 15, 8, -10]);
  expect(result).toEqual(64);
});
