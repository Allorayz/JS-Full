function getSection(num) {
  const span = document.querySelector(`span[data-number="${num}"]`);
  //   console.log(span);
  return span.closest('.box').getAttribute('data-section');
}

// getSection(6);

export { getSection };
