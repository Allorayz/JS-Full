function increaser(a, index) {
  let res = 0;
  if (a > index) {
    res = a + index;
    return res;
  }
  return a;
}

console.log(increaser(1, 10));
