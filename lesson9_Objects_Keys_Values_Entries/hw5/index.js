const getTotalRevenue = transactions => {
  let num = 0;
  transactions.map(el => {
    num += el.amount;
  });
  return num;
};

const dayTransactions = [
  { userId: 22, amount: 60, operation: 'sell' },
  { userId: 22, amount: 160, operation: 'buy' },
  { userId: 44, amount: 90, operation: 'sell' },
];

// const getTotalRevenue = transactions =>
//   dayTransactions.map(el => el.amount).reduce((a, b) => a + b);

console.log(getTotalRevenue(dayTransactions)); // ==> 310
