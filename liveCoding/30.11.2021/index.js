'use strict';

/**
 * @param {string[]} keysList
 * @param {array} valuesList
 * @return {object}
 */
// algo
// 1. create empty object +++
// 2. iterate arrays & put key/value to the obj
// 3. choose method

// inp: array1, array2;
// out: obj;

// BAD
// function buildObject(keysList, valuesList) {
//   const res = {};
//   for (let index = 0; index < keysList.length; index += 1) {
//     res[keysList[index]] = valuesList[index];
//   }

//   return res;
// }

// GOOD
// function buildObject(keysList, valuesList) {
//   return keysList.reduce((acc, key, index) => {
//     // acc[key] = valuesList[index];
//     // return acc;
//     return { ...acc, [key]: valuesList[index] };
//   }, {});
// }

// короткий вариант без 1 ретерна
function buildObject(keysList, valuesList) {
  return keysList.reduce((acc, key, index) => ({ ...acc, [key]: valuesList[index] }), {});
}

// examples
// const keys = ['name', 'address', 'age'];
// const values = ['Bob', 'Ukraine', 34];
// const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }

const keys = ['name', 'address', 'age', 'city'];
const values = ['Alex', 'Ukraine', 24, 'Kharkiv'];
console.log(buildObject(keys, values));
