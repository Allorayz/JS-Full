const mult = a => b => a * b;

const mult1 = mult(5); // mult(a) = 5
const res1 = mult1(5); // mult(b) = 5, 5*5 =25
console.log(res1); // 25

// ---------------------------------------

const twice = c => mult(c)(2); // первый аргумент задается С, второй аргумент указан (2)
console.log(twice(5)); // указав (С), получили выполенение алгоритма twice = a*b, b=2, c=5

const triple = d => mult(d)(3);
console.log(triple(5));

export { mult, twice, triple };
