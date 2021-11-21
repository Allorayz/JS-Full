const increaseEvenEl = (arr, delta) => {
  if (!Array.isArray(arr)) return null;
  return arr.map(num => (num % 2 === 0 ? num + delta : num));
};

console.log(increaseEvenEl([1, 2, 3, 5, 6, 8, 10], 20));
