const calc = initValue => {
  let result = initValue;

  const calculator = {
    add(value) {
      result += value;
      return this;
    },

    mult(value) {
      result *= value;
      return this;
    },

    div(value) {
      result /= value;
      return this;
    },

    subtrack(value) {
      result -= value;
      return this;
    },

    result() {
      return result;
    },
  };

  return calculator;
};

const result = calc(7).add(3).mult(10).div(5).subtrack(5).result();
console.log(result);

export { calc };
