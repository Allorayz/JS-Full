function squaredNumbers() {
  const squareNum = document.querySelectorAll('li[data-number');
  squareNum.forEach(function (item) {
    // item.dataset.number;
    // console.log(item)
    // console.log(a.dataset.number)
    item.dataset.squaredNumber = item.dataset.number * item.dataset.number;
    // console.log(item)
  });
  // console.log(findClass2)
}

squaredNumbers();

// export { squaredNumbers };
