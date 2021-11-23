// начальный массив
const numbersList = [5, 15, 8, 10, -4, 50, 220];

/* метод map */
/* const newArr = arr.map(callback) - создает и возвращает новый массив. Длина нового и исходного массивов равны
   ф-ция callback запустится по очереди для каждого элемента начального массива arr
   элементы массива newArr - это результат вызова callback для каждого элемента arr
   newArr[i] = callback(arr[i]) */

// c помощью метода map создай новый массив squaredNumbers, в котором будут квадраты чисел из numbersList
// выведи squaredNumbers в консоль

// input func, this (optional)
// output  arr

// @callback
// input elem
// output elem
// BAD
// const mapRes = numbersList.map(el => {
//   const res = el * el;
//   return res;
// });

console.log(numbersList.map(el => 'my number is ' + el));

/* метод find */
/* const arrElement = arr.find(callback) - вернет первый элемент массива arr, который удовлетворяет условию в callback.
   ф-ция callback запустится по очереди для каждого элемента начального массива arr 
   если callback(arr[i]) вернет true, то find прекратит поиск и вернет этот элемент */

// c помощью метода find найди первое нечетное число в numbersList и выведи его в консоль

// find
// input func
// output elem or undefined

// @callback
// input el, index (optional)
// output boolean

// BAD
// const findRes = numbersList.find(el => {
//   if (el > 300) {
//     return true;
//   }
//   return false;
// });
// console.log(findRes);

// GOOD
console.log(numbersList.find(el => el % 2 === 0));

// WRONG METHOD
console.log(numbersList.filter(el => el % 2 === 0)[0]);

/* метод forEach */
/* arr.forEach(callback) - итерирует массив и выполняет callback функцию по очереди для каждого элемента 
начального массива arr. callback функция ничего не должна возвращать */

// c помощью метода forEach выведи в консоль только положителные элементы массива numbersList

// forEach // не используется
// input func, this (optional)
// output arr

// callback
// input el, index
// output el
const newArr = [];
numbersList.forEach(el => {
  if (el > 100) {
    newArr.push(el);
  }
});

/* метод reduce */
/* const newArr = arr.reduce(callback) - применяет функцию callback к каждому элементу массива (слева-направо), 
возвращая одно результирующее значение. Функция callback принимает два параметра - accumulator, currentValue */

// С помощью метода reduce посчитай сумму чисел массива transactions которые больше 100
// выведи в консоль результат выполнения, а так же массив transactions после выполнения reduce

const transactions = [5, 0, 8, 10, -4, 50, 220, 1203, 556, 41];

// reduce
// in func, acc init value, this (optional)
// out number

// callback
// in: acc (number), el(number), index (optional)
// out: acc (number)

// bad
// const sumRes = transactions.reduce((acc, el) => {
//   console.log('acc:' + acc);
//   console.log('el:' + el);

//   return acc + el;
// });

// good
const sumRes = transactions.reduce((acc, el) => acc + el);
console.log(sumRes);

/* sort - отсортирует массив в заданом порядке */

// c помощью метода sort отсортируй массив numbersList1 по убыванию, результат помести в переменную sortedArr1
// выведи в консоль sortedArr1, а так же массив numbersList1 после выполнения sort

// const numbersList1 = [6, 20, 33, 43, 8];

// put your code here

// c помощью метода sort отсортируй массив numbersList2 по убыванию, но чтобы исходный массив не менялся.
// результат помести в переменную sortedArr2
// выведи в консоль sortedArr2, а так же массив numbersList2 после выполнения sort

// const numbersList2 = [6, 20, 33, 43, 8];

// put your code here
