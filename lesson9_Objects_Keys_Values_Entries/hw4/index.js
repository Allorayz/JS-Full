const rooms = {
  room1: [{ name: 'Alex' }, { name: 'Max' }, { name: 'Jonh' }, { name: 'Nastya' }],
  room2: [{ name: 'Leks' }, { name: 'Ban' }],
  room3: [{ name: 'Jack' }, { name: 'Stewie' }, { name: 'Denis' }],
};

const getPeople = obj =>
  Object.values({ ...obj })
    .flat() // подмассив поднял на 1 уровень вложеннойсти
    .map(el => el.name); // перебор каждого элемента

console.log(getPeople(rooms));
