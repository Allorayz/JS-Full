function checkSum(arr) {
  let res = 0;
  for (let i = 0; i < arr.length; i += 1) {
    res += arr[i];
  }
  if (res > 100) {
    return true;
  }
  if (!Array.isArray(arr)) {
    return null;
  }
  return false;
}

console.log(checkSum([15, 80, 10]));
console.log(checkSum([-40, 80, 50]));
console.log(checkSum([100, 50]));
console.log(checkSum(100));
