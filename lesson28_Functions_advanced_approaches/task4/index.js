const add5 = value => value + 5; //
const mult3 = value => value * 3; //
const div4 = value => value / 4; // набор коротких функций которые будут входить в композицю

const compose =
  (...funcs) =>
  value => {
    return funcs.reduce((acc, func) => func(acc), value);
  }; // композиция, которая через каррирование принимает первым аргументом набор функций, а вторым аргументов значение (value)

const doEverything = compose(add5, mult3, div4); // поочередное выполнениие функций
console.log(doEverything(12));

export { compose };
