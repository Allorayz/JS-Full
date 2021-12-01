// ===>> LIVE CODING 29.11.2021

// in: object, string, value (any type)
// out: object
function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj;
}

// function addPropertyV2(obj, key, value) {
//   // inp target obj, source obj1 .. source objN
//   // out target obj

//   const sourceObj = { [key]: value };
//   Object.assign(obj, sourceObj);

//   return obj;
// }

function addPropertyV2(obj, key, value) {
  return Object.assign(obj, { [key]: value });
}

function addPropertyWrong(obj, key, value) {
  const objNew = Object.assign({ [key]: value }, obj);
  return objNew;
}

function addPropertyV3(obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
}

// function addPropertyV4(obj, key, value) {
//   const newObj = { ...obj, [key]: value };
//   return newObj;
// }

function addPropertyV4(obj, key, value) {
  return { ...obj, [key]: value };
}

// test data
const transaction = {
  value: 170,
};
// console.log(addPropertyV1(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
// console.log(transaction);

// console.log(addPropertyV2(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
// console.log(transaction);

console.log(addPropertyV4(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
console.log(transaction);
