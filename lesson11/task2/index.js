// 1. проверка является ли аргумент массивом
// 2. условие для сортировки снизу вверх и наоборот, через метод localCompare
// 3. вернуть отсортированный массив

const contacts = [
  {
    name: 'Tom',
    phoneNumber: '666-66-66',
  },
  {
    name: 'John',
    phoneNumber: '555-55-55',
  },
  {
    name: 'Ann',
    phoneNumber: '444-44-44',
  },
  {
    name: 'Marrie',
    phoneNumber: '333-33-33',
  },
  {
    name: 'Suzy',
    phoneNumber: '222-22-22',
  },
  {
    name: 'Alex',
    phoneNumber: '111-11-11',
  },
];

const sortContacts = (arr, isAsc = true) => {
  if (!Array.isArray(arr)) {
    return null;
  }

  const result = arr.sort((a, b) => {
    if (isAsc) {
      return a.name.localeCompare(b.name);
    }
    return b.name.localeCompare(a.name);
  });
  return result;
};

console.log(sortContacts(contacts, false));
console.log(sortContacts(contacts, true));
console.log(sortContacts(contacts));
console.log(sortContacts({ contacts }));
