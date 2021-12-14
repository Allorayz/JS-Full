class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }

  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }

  setAge(newAge) {
    if (newAge < 0) {
      return false;
    }
    this.age = newAge;
    if (newAge >= 25) {
      this.requestNewPhoto();
    }
    return newAge;
  }

  static createEmpty() {
    return new User('', null);
  }
}

export { User };

// const user1 = new User('Max', 18);
// console.log(user1);
// user1.setAge(30);
// console.log(user1);
// user1.requestNewPhoto();
