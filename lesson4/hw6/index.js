let sum = 0;
for (let i = 0; i <= 1000; i += 1) {
  sum += i;
}
// console.log(sum);

const div = sum / 1234;
// console.log(div);
const mods = sum % 1234;
// console.log(mods);

const result = true ? div > mods : mods > div;
console.log(result);
