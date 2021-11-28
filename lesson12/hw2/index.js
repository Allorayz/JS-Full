// 1. методом filter перебрать массив на наличие Numbers
// 2. методом map вернуть массив чиссел.

const cleanTransactionsList = sum => {
  let res = sum.filter(el => {
    if (Number(el)) {
      console.log('после проверки на число' + el);
      return el;
    }
  });

  return res.map(el => '$' + Number(el).toFixed(2));
};

console.log(cleanTransactionsList(['1.9', '12.5', '9', '0.2 ', '6 dollars ']));
