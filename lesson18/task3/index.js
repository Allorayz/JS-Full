// algo
// 1. разбить массив на элементы
// 2. возвести каждое число в квадрат
// 3. просуммировать значения квадратов

// inp: array
// out: num
export function sumOfSquares(...numbers) {
  // console.log(...numbers);
  return [...numbers]
    .map(elem => elem * elem)
    .reduce((acc, elem) => {
      return acc + elem;
    });
}

// const numbers = [1, -2, 3, 4, -5];
console.log(sumOfSquares(1, -2, 3, 4, -5));
