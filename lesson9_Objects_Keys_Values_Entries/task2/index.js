const users = {
  Tom: 17,
  'John Doe': 19,
  Bob: 18,
};

function copyObj(obj) {
  return { ...obj };
}

console.log(copyObj(users));
console.log(users === copyObj(users));

/// const copyObj = (obj) => Object.assign({}, obj);
