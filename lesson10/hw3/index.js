'use strict';

/**
 * @param {number} num
 * @param {number} prec
 * @return {number[]}
 */
const superRound = (num, prec) => {
  const res = [];
  const mathPrec = Math.pow(10, prec);
  res.push(Math.floor(num * mathPrec) / mathPrec);
  res.push(Math.trunc(num * mathPrec) / mathPrec);
  res.push(Math.ceil(num * mathPrec) / mathPrec);
  res.push(Math.round(num * mathPrec) / mathPrec);
  res.push(+num.toFixed(prec));
  return res;
};

// examples
console.log(superRound(11.12556, 2)); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
console.log(superRound(6.11, 3)); // ==> [6.11, 6.11, 6.11, 6.11, 6.11]
