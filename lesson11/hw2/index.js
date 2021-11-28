// 1.Проверить аргументы на typeOf = String
// 2.По первому аргументу происходит поиск
// 3.Если второй аргумент пустая строка, то вернуть null
// 4.Должна вернуть число вложенностей

const countOccurrences = (str1, str2) => {
  if (str2 === '') {
    return null;
  }

  let count = 0;
  let position = str1.indexOf(str2);
  // console.log(position);
  while (position !== -1) {
    console.log('#index ' + position);
    count += 1;
    position = str1.indexOf(str2, position + 1);
  }
  return count;
};

console.log(countOccurrences('eqweqweqweqweq', 'q'));
