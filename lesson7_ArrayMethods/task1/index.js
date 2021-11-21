const getSpecialNumbers = numbers => {
  let specialNumbers = [];

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 3 === 0) {
      specialNumbers.push(numbers[i]);
    }
  }

  return specialNumbers;
};

// const getSpecialNumbers = arr => arr.filter(num => num % 3 === 0);

console.log(getSpecialNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
