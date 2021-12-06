// algo
// 1. create empty array where we get push elements of array(message)
// 2. create function for each of type (warn, error, log)
// 3. Sort by time, new messages go first
// 4. If there is no set type, return an empty array

export function createLogger() {
  let memory = [];

  function warn(elem) {
    memory.push({
      message: elem,
      dateTime: new Date(),
      type: 'warn',
    });
  }

  function error(elem) {
    memory.push({
      message: elem,
      dateTime: new Date(),
      type: 'error',
    });
  }

  function log(elem) {
    memory.push({
      message: elem,
      dateTime: new Date(),
      type: 'log',
    });
  }

  function getRecords(type) {
    // console.log(type)
    // if (type !== undefined) {
    //     let result = memory.filter(el => el.type === type);
    //     return result;
    // }

    if (type !== undefined) {
      let result = memory.filter(el => el.type === type).sort((a, b) => b.dateTime - a.dateTime);
      console.log(result);
      return result;
    } else {
      return memory.sort((a, b) => b.dateTime - a.dateTime);
    }
  }

  return {
    warn,
    error,
    log,
    getRecords,
  };
}

const logger = createLogger();
console.log(logger.log('User logged in'));
console.log(logger.warn('User try to restricted page'));
console.log(logger.log('User logged out'));
console.log(logger.error('Unexpected error on the site'));
console.log(logger.getRecords()); // [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User try to restricted page', type: 'warn', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
console.log(logger.getRecords('log')); // [{ message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
console.log(logger.getRecords('error')); // [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }]
console.log(logger.getRecords('warn')); // [{ message: 'User try to restricted page', type: 'warn', dateTime: Date }]
