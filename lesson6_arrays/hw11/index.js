'use strict';

/**
 * @param {number[]} arr
 * @param {number} num
 * @return {boolean}
 */
const includes = (arr, num) => {
  for (let i of arr) {
    if (i === num) {
      return true;
    }
  }
  return false;
};
// examples
console.log(includes([1, 4, 8, 3], 4)); // ==> true
console.log(includes([1, 4, 8, 3], 5)); // ==> false
