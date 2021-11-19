function sortAsc(array) {
  if (!Array.isArray(array)) return null;
  array.sort(function (a, b) {
    return a - b;
  });
  return array;
}

function sortDesc(array) {
  if (!Array.isArray(array)) return null;
  array.sort(function (a, b) {
    return b - a;
  });
  return array;
}

console.log(sortAsc([2, 2, 3, 4, 999]));
console.log(sortDesc([2, 2, 3, 4, 999]));
