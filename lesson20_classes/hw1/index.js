'use strict';

/**
 * @field {string} id
 * @field {number} price
 * @field {date} dateCreated
 * @field {boolean} isConfirmed
 * @field {date} dateConfirmed
 * @field {string} city
 * @field {string} type
 */

class Order {
  constructor(price, city, type) {
    this.id = `${Math.random()}`;
    this.price = price;
    this.dateCreated = new Date();
    this.isConfirmed = false;
    this.dateConfirmed = '';
    this.city = city;
    this.type = type;
  }

  checkPrice() {
    return this.price > 1000;
  }

  confirmOrder() {
    this.isConfirmed = true;
    this.dateConfirmed = new Date();
  }

  isValidType() {
    if (this.type === 'Buy' || this.type === 'Sell') {
      return true;
    }
    return false;
  }
}

// const newOrder = new Order(50000, 'Tokyo', 'Buy');

// console.log(newOrder);
// console.log(newOrder.checkPrice());
// newOrder.confirmOrder();
// console.log(newOrder);
// console.log(newOrder.isValidType());

export { Order };
