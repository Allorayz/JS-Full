const sum = arr => {
  if (!Array.isArray(arr)) return null;
  return arr.reduce((acc, elements) => acc + elements);
};

console.log(sum([2, 5, 6, 3, 0, 3, -1]));
