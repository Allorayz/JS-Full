import { getAdults } from './index.js';

it('should return more than 18 years', () => {
  const result = getAdults({
    'John Doe': 19,
    Tom: 17,
    Bob: 18,
  });
  expect(result).toEqual({ 'John Doe': 19, Bob: 18 });
});

it('if object is empty, we will return empty object too', () => {
  expect(getAdults({})).toEqual({});
});
