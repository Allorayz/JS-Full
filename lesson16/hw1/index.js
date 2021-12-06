export const createArrayOfFunctions = num => {
  let newArr = [];

  if (num === undefined) {
    return newArr;
  }

  if (num !== Number(num)) {
    return null;
  }

  for (let i = 0; i < num; i += 1) {
    console.log(i);
    newArr[i] = () => {
      return i;
    };
  }
  return newArr;
};

console.log(createArrayOfFunctions(7)[5]);
