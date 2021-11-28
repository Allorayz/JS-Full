// 1. Проверить на вход занчение аргумента, должен быть массив.
// 2. Если не масив или пустой массив вернуть null
// 3. пройтись по массиву и возвести все числа в квадрат
// 4. вернуть минимальное значение квадрата числа

export const getMinSquareNumber = arr => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  const result = arr.map(elem => elem * elem);
  return Math.min(...result);
};

console.log(getMinSquareNumber([10, 9, 15, 8, -10]));
console.log(getMinSquareNumber('[10, 9, 15, 8, -10,]'));
console.log(getMinSquareNumber([]));
