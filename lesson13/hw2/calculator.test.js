import { calc } from './calculator';

it('should get sum === "+" ', () => {
  const res = calc('a + b');
  expect(res).toEqual(res);
});

it('should get sum === "-" ', () => {
  const res = calc('a - b');
  expect(res).toEqual(res);
});

it('should get sum === "*" ', () => {
  const res = calc('a * b');
  expect(res).toEqual(res);
});

it('should get sum === "/" ', () => {
  const res = calc('a / b');
  expect(res).toEqual(res);
});

it('should get null if expression === string ', () => {
  const res = calc();
  expect(res).toEqual(null);
});
