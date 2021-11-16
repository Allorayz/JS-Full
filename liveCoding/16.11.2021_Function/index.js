console.log('hello');

function getSenseofLife() {
  //   console.log(42);
  return 42;
}
console.log(getSenseOfLife());

// const res = getSenseofLife();
// console.log(res);

//========

function getSquared(num) {
  return num * num;
}

//test data
console.log(getSquared(10));
console.log(getSquared(0));
console.log(getSquared(-10));
console.log(getSquared(10.5));

//========
// input: num
// output: underfined
//function declaration
function printMessage(num) {
  // console.log('I am ' + num + ' years old');
  console.log(`I am ${num} years old`);
}

//function expr
// const printMessage = function (num) {
//   // console.log('I am ' + num + ' years old');
//   console.log(`I am ${num} years old`);
// };

// test data
console.log(printMessage(50));
console.log(printMessage(12));
console.log(printMessage(0));

//========

const mult = (firstNum, secondNum) => {
  return firstNum * secondNum;
};

//test data
console.log(mult(10, 15));
console.log(mult(10, -15));

//======

const getMagicNumber = () => 17;

//test data
console.log(getMagicNumber());
