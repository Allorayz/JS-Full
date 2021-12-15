const checkbox = document.querySelector('.task-status');
checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    return console.log(true);
  }
  return console.log(false);
});
