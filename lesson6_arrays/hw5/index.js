// put your code here
function reverseArray(arr) {
  const array = [];
  for (let i = 0; i < arr.length; i += 1) {
    array.unshift(arr[i]);
  }
  if (!Array.isArray(arr)) {
    return null;
  }
  return array;
}

console.log(reverseArray(1, 2, 3));
console.log(reverseArray([1, 2, 3]));

// function reverseArray(arr) {
//   if (!Array.isArray(arr)) return null;
//   let swapArr = [];
//   for (let i = 1; i <= arr.length; i++) {
//     swapArr.push(arr[arr.length - i]);
//   }
//   return swapArr;
// }
