const getTotalPrice = arr => {
  let sum = 0;
  arr.map(el => (sum += el));
  return '$' + Math.floor(sum * 100) / 100;
};
const numbersArr = [17.159];
const numbersArr1 = [17.159, 18.156];
const numbersArr2 = [17.159, -18.156];

console.log(getTotalPrice(numbersArr));
console.log(getTotalPrice(numbersArr1));
console.log(getTotalPrice(numbersArr2));
