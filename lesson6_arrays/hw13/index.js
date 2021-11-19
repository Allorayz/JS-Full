// const uniqueCount = arr => {
//   const array = [];
//   if (!Array.isArray(arr)) {
//     return null;
//   }

//   for (let i = 0; i < arr.length; i += 1) {
//     if (!array.includes(arr[i])) {
//       array.push(arr[i]);
//     }
//   }

//   return array.length;
// };

function uniqueCount(array) {
  if (!Array.isArray(array)) return null;
  const uniqueSet = [...new Set(array)];
  return uniqueSet.length;
}

console.log(uniqueCount([1, 4, 1, 8, 3, 4, 8, 8])); // => 4
