function checker(arr) {
  if (!Array.isArray(arr)) return null;
  let sumMinMax = Math.min.apply(null, arr) + Math.max.apply(null, arr);
  if (sumMinMax > 1000) {
    return true;
  }
  return false;
}
console.log(checker([2, 2, 3, 4, 999]));
