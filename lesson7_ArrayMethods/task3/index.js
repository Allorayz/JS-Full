// const flatArray = arr => {
//   const flatArray = arr.reduce((acc, elem) => {
//     return acc.concat(elem);
//   }, []);
//   return flatArray;
// };

// const initArray = [1, [2, 3, 4], 5, [6]];

// console.log(flatArray(initArray));

/////=======>>>>

const flatArray = arr => arr.flat().sort((a, b) => a - b);

console.log(flatArray([1, 3, [2, 45, 4], 5, [6]]));
