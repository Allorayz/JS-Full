// inp obj
// out boolean

// algo:
// 1. compare length, if not equal -> false
// 2. iterate obj 1 keys
// 3. if(compare value1 != value2) -> false
// 4.

function compareObjects(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  // if (Object.keys(obj1).length !== Object.keys(obj2).length) {
  //   return false;
  // }

  if (keys1.length !== keys2.length) {
    return false;
  }

  // eslint-disable-next-line no-restricted-syntax
  for (const key of keys1) {
    console.log(obj1[key]);
    // console.log(obj2[key]);
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

// на !!!!some!!!!
// что-то новое

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};

console.log(compareObjects(obj1, obj2)); // ==> false
console.log(compareObjects(obj2, obj3)); // ==> false
console.log(compareObjects(obj1, obj4)); // ==> true
