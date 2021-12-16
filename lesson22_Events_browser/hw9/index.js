const buttons = document.querySelectorAll('.pagination__page');

function handleClick(event) {
  console.log(event.target.getAttribute('data-page-number'));
}

buttons.forEach(elem => elem.addEventListener('click', handleClick));
