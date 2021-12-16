const button = document.querySelector('.search__btn');

function consoleText() {
  const inputValue = document.querySelector('.search__input').value;
  console.log(inputValue);
}

button.addEventListener('click', consoleText);
