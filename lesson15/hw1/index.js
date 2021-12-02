export function createCalculator() {
  let result = 0;

  const add = num => (result += num);

  const decrease = num => (result -= num);

  const reset = () => (result = 0);

  const getMemo = () => result;

  return {
    add,
    decrease,
    reset,
    getMemo,
  };
}

const calculator1 = createCalculator();
const calculator2 = createCalculator();

console.log(calculator1.add(3));
console.log(calculator1.add(4));
console.log(calculator1.add(5));
console.log(calculator1.decrease(10));
console.log(calculator1.reset());

console.log(calculator1.getMemo());
