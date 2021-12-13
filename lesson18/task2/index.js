export const wallet = {
  transactions: [1, 5, 7, -1, 9],
  getMax() {
    // console.log(...this.transactions);
    return Math.max(...this.transactions);
  },
  getMin() {
    return Math.min(...this.transactions);
  },
};
console.log(wallet.getMax());
console.log(wallet.getMin());
