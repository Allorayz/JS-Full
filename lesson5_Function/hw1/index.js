let sum = 0;
function getSum(firstNumber, secondNumber) {
  for (let i = firstNumber; i <= secondNumber; i += 1) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}
