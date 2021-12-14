class Wallet {
  balance = 0;

  getBalance() {
    return this.balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log('No enough funds');
      return;
    }
    this.balance -= amount;
  }
}

const walletUser = new Wallet();

// console.log(walletUser.getBalance());
// walletUser.deposit(100);
// console.log(walletUser.getBalance());
// walletUser.withDraw(45);
// walletUser.withDraw(100);
// console.log(walletUser.getBalance());

export { Wallet };
