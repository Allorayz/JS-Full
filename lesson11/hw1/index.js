// 1. Проверить первый аргумент на typeOf = String
// 2. Если не задана второй аргумент(количество символов), то по умолчанию = 10
// 3. Обязательно проверить заверщение цикла!!!
// 4. функция должна вернуть массив в конце, и дополнить последний аргумент " . " до нужного количества символов.

const splitString = (str, numberOfSymbol) => {
  const strArr = [];
  let startPosition = 0;

  if (str === !String) {
    return null;
  }
  if (numberOfSymbol === undefined) {
    numberOfSymbol = 10;
  }

  while (true) {
    let chunk = str.substr(startPosition, numberOfSymbol);
    // console.log(chunk);
    if (chunk.length === 0) {
      break;
    }
    if (chunk.length < numberOfSymbol) {
      chunk += '.'.repeat(numberOfSymbol - chunk.length);
    }
    strArr.push(chunk.slice(0));
    startPosition += numberOfSymbol;
  }
  return strArr;
};

console.log(splitString('ddhhsywmdymhg', 6));
