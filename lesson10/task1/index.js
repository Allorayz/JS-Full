const array = ['17', '17.5', 17, 17, 5, NaN, undefined, null];

const getFiniteNumbers = arr => arr.filter(el => Number.isFinite(el));

console.log(getFiniteNumbers(array));

const getFiniteNumbersV2 = arr => arr.filter(el => isFinite(el));
console.log(getFiniteNumbersV2(array));

const getNaN = arr => arr.filter(el => Number.isNaN(el));
console.log(getNaN(array));

const getNaNV2 = arr => arr.filter(el => isNaN(el));
console.log(getNaNV2(array));

const getInteges = arr => arr.filter(el => Number.isInteger(el));
console.log(getInteges(array));
