const name = {
  name: `Argo`,
};

export const vehicle = {
  __proto__: name,

  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};

export const ship = {
  __proto__: vehicle,

  startMachine() {
    console.log(`${this.name} lifting anchor up`);
    ship.move();
  },
  stopMachine() {
    ship.stop();
    console.log(`${this.name} lifting anchor down`);
  },
};

// vehicle.move();
// vehicle.stop();
ship.startMachine();
ship.stopMachine();
