function getItemList() {
  const elementsList = document.querySelectorAll('.technology');
  console.dir(elementsList);
  return elementsList;
}

function getItemsArray() {
  const elementArray = Array.from(document.querySelectorAll('.tool'));
  console.dir(elementArray);
  return elementArray;
}

export { getItemList, getItemsArray };
