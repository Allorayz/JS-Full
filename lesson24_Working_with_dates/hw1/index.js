const startNewDate = new Date();
const endNewDate = new Date(2021, 1, 10, 10, 10, 10);

const getDiff = (startDate, endDate) => {
  const getNewDate = new Date(startDate - endDate);

  const newDay = parseInt(getNewDate / (1000 * 60 * 60 * 24));
  const newHour = parseInt((getNewDate / (1000 * 60 * 60)) % 24);
  const newMin = parseInt((getNewDate / (1000 * 60)) % 60);
  const newSec = parseInt((getNewDate / 1000) % 60);

  return `${newDay}d ${newHour}h ${newMin}m ${newSec}s`;
};

const date = getDiff(startNewDate, endNewDate);
console.log(date);

export { getDiff };
