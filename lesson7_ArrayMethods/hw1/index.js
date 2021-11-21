const squareArray = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }

  return arr.map(elem => elem * elem);
};

console.log(squareArray([2, 4, 5, 7, 33]));

// ======>>

// const squareArray = arr => {
//   if (!Array.isArray(arr)) return null;

//   return arr.map(num => num * num);
// };
