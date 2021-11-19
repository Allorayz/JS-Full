function cloneArr(arr) {
  let cloneArray = [];
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let i = 0; i < arr.length; i += 1) {
    cloneArray.push(arr[i]);
  }
  return cloneArray;
}

console.log(cloneArr([1, 2, 3, 4, 5]));
