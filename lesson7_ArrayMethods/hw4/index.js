// function cloneArr(arr) {
//   if (!Array.isArray(arr)) return null;
//   return (cloneArr = [...arr]);
// }
///

function cloneArr(arr) {
  let clone = [];
  if (!Array.isArray(arr)) {
    return null;
  }
  return (clone = [...arr]);
}

console.log(cloneArr([1, 2, 3, 4, 5]));
