'use strict';

/**
 * @param {number} from
 * @param {number} to
 * @return {number[]}
 */
function getSpecialNumbers(from, to) {
  let result = [];
  //   let count = 0;
  for (let i = from; i <= to; i += 1) {
    if (i % 3 === 0) {
      //   result[count] = i;
      //   count += 1;
      result.push(i);
    }
  }

  return result;
}

// examples
console.log(getSpecialNumbers(1, 10)); // ==> [3, 6, 9]
console.log(getSpecialNumbers(-10, 10)); // ==> [-9, -6, -3, 0, 3, 6, 9]
console.log(getSpecialNumbers(1, 2)); // ==> [ ]
