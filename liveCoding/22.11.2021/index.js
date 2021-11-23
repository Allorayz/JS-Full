const numbersList2 = [1, 2, 3, 4, 5];

// input num
// output num

const res = numbersList2.push('sasas');
// numbersList2[numbersList2.length] = 222;
console.log(res);
console.log(numbersList2);

// ======

const numbersList4 = [1, 2, 3, 4, 5];
// console.log(numbersList4.unshift(0));
const res1 = numbersList4.unshift(0);
console.log(res1);

// input: none
// output: num
const firstNumber = numbersList4.shift();
console.log(firstNumber);
// callback =======

/*
 * A callback is a function passed as an argument to another function
 * This technique allows a function to call another function
 * A callback function can run after another function has finished
 * */

// input: num num func
// output undefined

function sum(from, to, printer) {
  let result = 0;
  for (let index = from; index <= to; index += 1) {
    result += index;
  }

  printer(result);
}

// callback
// input: num
// output: undefined

//  test data
const num1 = 5;
const num2 = 10;

function printResultExample(result) {
  // console.log('Result is ');
  console.log(result);
}

sum(num1, num2, printResultExample);
// =======
const anotherNumbersList = [5, 0, 8, 10, -4, 50, 220];
// input: callback
// output: arr

// callback
// input: number
// output: boolean

// BAD
// const filterRes = anotherNumbersList.filter(function (num) {
//   if (num > 10) {
//     return true;
//   }
//   return false;
// });

// function sum(a, b) {
//   return a + b;
// }
// sum(1, 5, 7, 9);

// GOOD
const filterRes = anotherNumbersList.filter(el => el > 10);

// test data
console.log(filterRes);
