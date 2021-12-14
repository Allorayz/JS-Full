function getTitleElement() {
  const titleElem = document.querySelector('.title');
  console.dir(titleElem);
  return titleElem;
}

// test data1
getTitleElement();

function getInputElement() {
  const inputElem = document.querySelector('[type = "text"]');
  console.dir(inputElem);
  return inputElem;
}

// test data 2
getInputElement();

export { getTitleElement, getInputElement };
