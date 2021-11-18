// let sum = ''; // переменная в которой будет храниться результат
// for (let n = 1; n <= 100; n += 1) {
//   //   console.log(n);
//   sum += String(n);
// }
// console.log(sum);

let n = 1;
let sum = 1;

do {
  n += 1;
  sum += String(n);
} while (n < 100);

console.log('Result ' + sum);
