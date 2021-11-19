// clients = ['Ann', 'John', 'User']
// balances = [1400, 87 ,-6]
// client = 'John'
// amount = 50

function withdraw(clients, balances, client, amount) {
  for (let i = 0; i < clients.length; i += 1) {
    if (clients[i] === client) {
      if (balances[i] - amount < 0) {
        return -1;
      }
      return balances[i] - amount;
    }
  }
}

console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10));
