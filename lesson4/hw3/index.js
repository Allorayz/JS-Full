// start => 0 <= end <=100
// start and end const
// result = 0;
// вывод результата в консоль без ретурн
// попадает только под одно из условий

let start = 1;
let end = 100;
let result = 0;

for (let i = start; i <= end; i += 1) {
  // console.log(i); // значаение переменной i=start
  if (i % 5 === 0) {
    console.log(i);
  } // условие +
  else if (i % 2 === 0 && i % 4 !== 0) {
    result += i;
  } else if (i % 3 === 0) {
    result -= i;
  } else if (i % 4 === 0) {
    result *= i;
  }
}
