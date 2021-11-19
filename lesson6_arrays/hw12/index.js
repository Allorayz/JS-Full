function removeDuplicates(array) {
  let res = [];
  if (!Array.isArray(array)) {
    return null;
  }
  for (let num of array) {
    if (!res.includes(num)) {
      res.push(num);
    }
  }
  return res;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 5]));
console.log(removeDuplicates(1, 2, 2));
