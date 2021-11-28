const reverseString = str => {
  if (typeof str !== 'string') {
    return null;
  }
  return str.split('').reverse().join('');
};

console.log(reverseString('!dsadasdd dasdasd'));
console.log(reverseString(20 - 5));
