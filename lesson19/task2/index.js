const vehicle = {
  __proto__: name,

  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};

export const getOwnProps = obj => {
  const resultArr = [];
  for (let prop in obj) {
    console.log(prop);
    if (obj.hasOwnProperty(prop) && typeof obj[prop] !== 'function') {
      resultArr.push(prop);
    }
  }
  return resultArr;
};

console.log(getOwnProps(vehicle));
