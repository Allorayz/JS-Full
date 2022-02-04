export const addImage = imgSrc => {
  const p = new Promise((resolveCb, rejectCb) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'My photo');
    imgElem.src = imgSrc;
    const containerElem = document.querySelector('.page');
    containerElem.append(imgElem);

    const onImageLoaded = () => {
      const { width, height } = imgElem;
      resolveCb({ width, height });
    };

    imgElem.addEventListener('load', onImageLoaded);

    imgElem.addEventListener('error', () => rejectCb(new Error('Image load failed')));
  });

  return p;
};

const imgSrc = 'https://server.com/image.png';

const result = addImage(imgSrc);

result.then(data => console.log(data));

// console.log(result);
