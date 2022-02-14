export const delay = num => {
  const res = new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, num);
  });
  return res;
};
delay(3000).then(() => console.log('Done'));
