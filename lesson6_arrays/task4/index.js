'use strict';

/**
 * @param {number[]} numbers
 * @return {number[]}
 */
// function swap(numbers) {
//   let res = [];
//   let count = 0;
//   let update;
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (i !== 0) {
//       res[count] = numbers[i];
//       count += 1;
//     }
//     if (i === 0) {
//       update = numbers[i];
//     }
//   }
//   return [...res, update];
// }

function swap(numbers) {
  const [start, ...rest] = numbers;
  return [...rest, start];
}

/**
 * @param {number[]} numbers
 * @return {number[]}
 */
function swapManual(numbers) {
  let res = [];
  for (let i = 1; i < numbers.length; i += 1) {
    res.push(numbers[i]);
  }
  res.push(numbers[0]);
  return res;
}
// examples
// console.log(swap([1, 10, 9, 11])); // ==> [10, 9, 11, 1]
console.log(swapManual([50, 10, 9, 11])); // ==> [10, 9, 11, 1]
