function defer(func, ms) {
  return function () {
    setTimeout(() => func.apply(this, arguments), ms);
  };
}

// const user = {
//   name: 'Tom',
//   sayHi() {
//     console.log(`Hi,  a, ${this.name}`);
//   },
// };

// sayHi();

// const defferedSayHi = defer(user.sayHi, 1000);

// defferedSayHi.call(user);
// defferedSayHi.call({ name: 'Bob' });

export { defer };
