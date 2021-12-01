// inp: object
// out: array

// algo
// 1. get keys & values +++
// 2. get id to every value (map) +++
// 3. sort
// 4.
// first solution
// const getCustomersList = obj => {
//   const keys = Object.keys(obj);
//   const values = Object.values(obj);

//   return values
//     .map((el, index) => {
//       return { ...el, id: keys[index] };
//     })
//     .sort((a, b) => a.age - b.age);
// };

// ref OK
// const getCustomersList = obj => {
//   const keys = Object.keys(obj);

//   return Object.values(obj)
//     .map((el, index) => ({ ...el, id: keys[index] }))
//     .sort((a, b) => a.age - b.age);
// };

// ref++
const getCustomersList = obj => {
  return Object.entries(obj)
    .map(([id, customer]) => ({ ...customer, id }))
    .sort((a, b) => a.age - b.age);
};

// destructing
const arr = [10, 22, 11];
const [el1, el2] = arr;
console.log(el1, el2);

const obj = {
  name: 'James',
  age: 111,
  city: 'London',
};
const { age, name, city } = obj;
console.log(age);
console.log(name);
console.log(city);

function hello({ age, name, city }) {
  // ....
}

// // reduce
// const getCustomersList = obj => {
//   const objKeys = Object.keys(obj);

//   return objKeys
//     .reduce((acc, key) => {
//       acc.push({ ...obj[key], id: key });
//       return acc;
//     }, [])
//     .sort((a, b) => a.age - b.age);
// };

// test data
const consumers = {
  'consumer-id-1': {
    name: 'William',
    age: 54,
  },
  'consumer-id-2': {
    name: 'Tom',
    age: 17,
  },
};

console.log(getCustomersList(consumers));
