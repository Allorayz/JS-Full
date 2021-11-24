const array = [1, 2, 3, 4, 5];
console.log(array);

// input arr, func
// output arr

// calback
// input el, index, array
// output boolean

// algo
// 1. iterate
// 2. apply callback for every el
// 3. if callback true - add to the new arr

const filterArrayElements = (arr, callback) => {
  const result = [];

  for (let index = 0; index < arr.length; index += 1) {
    const el = arr[index];

    if (callback(el, index, arr)) {
      result.push(el);
    }
  }

  return result;
};

const initialArr = [1, 5, 7, 10, 15, 50, 70, 100];
// отдельная переменная для проверки
// const oddNum = el => {
//   if (el % 2 === 1) {
//     return true;
//   }
//   return false;
// };
const oddNum = el => el % 2 === 1;

// test data
console.log(filterArrayElements(initialArr, oddNum));

// test data 3

console.log(
  filterArrayElements(initialArr, (el, index) => {
    if (index <= 2) {
      return true;
    }
    return false;
  }),
);
