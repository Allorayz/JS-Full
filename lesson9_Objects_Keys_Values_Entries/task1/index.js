const getAdults = usersObj => {
  // {'Tom': 17, 'John Doe': 19, 'Bob': 18} => [ ['Tom', 17], ['John Doe', 19], ['Bob', 18] ]
  const usersArray = Object.entries(usersObj);
  // [ ['John Doe': 19, 'Bob': 18] ]
  const filteredUsersArray = usersArray.filter(user => user[1] >= 18);
  // [ ['John Doe', 'Bob'] ]
  const usersNames = filteredUsersArray.map(user => user[0]);
  return usersNames;
};

const user = {
  Tom: 17,
  'John Doe': 19,
  Bob: 18,
};
