// How to work on tech tasks. Step by step guide

// 1. Learn requirement  +++
// 2. Create step by step algo (& input/output for funtions)
// 3. Write draft solution & testing
// 4. Refactoring & final testing -> final solution

// algo
// 1. iterate nembers from 2 to num => i
// 2. iterate from 2 to i => number
// 3. if % === 0(остаток от деления 0) - not prime(не простое)// если остаток от деление i на number равно 0 - то не простое
// 4.

/**
 * @param {number} num
 * @return {undefined}
 */

// input: num
// output: bool
function isPrime(number) {
  for (let index = 2; index < number; index += 1) {
    // console.log('INNER NUMBER' + number);
    if (number % index === 0) {
      return false;
    }
  }
  return true;
}

// input: num
// output: undefined
function getPrimes(num) {
  for (let i = 2; i <= num; i += 1) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

getPrimes(15);

// input: num
// output: undefined
// function getPrimes(num) {
//   for (let i = 2; i <= num; i += 1) {
//     // console.log('CHECKING NUMBER ' + i);

//     let isPrime = true;

//     for (let number = 2; number < i; number += 1) {
//       // console.log('INNER NUMBER' + number);
//       if (i % number === 0) {
//         // console.log('NUMBER ' + i + ' IS NOT PRIME');
//         isPrime = false;
//         break;
//       }
//     }

//     if (isPrime) {
//       console.log(i);
//     }
//   }
// }

// test fata
