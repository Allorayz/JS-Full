const getRandomNumbers = (length, from, to) => {
  let arr = [];
  for (let i = 0; i < length; i += 1) {
    if (to - from < 1) {
      return null;
    }
    arr.push(Math.floor(Math.random() * (to - from) + from));
  }
  return arr;
};

// examples
console.log(getRandomNumbers(5, 1.4, 3.22));
console.log(getRandomNumbers(5, 1.4, 3.22));
// console.log(getRandomNumbers(5, -1.4, 3.22));
console.log(getRandomNumbers(5, 3, 6));
