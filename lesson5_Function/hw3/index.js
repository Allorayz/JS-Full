// function sum(from, to) {
//   let res = 0;
//   for (let i = from; i <= to; i += 1) {
//     res += i;
//   }
//   return res;
// }
// console.log(sum(1, 10));

const sum = (from, to) => from + to;
// console.log(sum(1, 5));

function compareSums(a, b, c, d) {
  if (sum(a, b) > sum(c, d)) {
    return true;
  }
  return false;
}

// console.log(compareSums(3, 5, 3, 4));
// console.log(compareSums(1, 2, 3, 4));
// console.log(compareSums(-3, 5, -3, 4));
