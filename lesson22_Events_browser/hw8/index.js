const check = document.querySelector('.task-status');

function handler(event) {
  console.log(event.target.checked);
}
check.addEventListener('change', handler);
