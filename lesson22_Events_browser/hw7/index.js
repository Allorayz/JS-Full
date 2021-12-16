const input = document.querySelector('.text-input');

function inputValue(event) {
  console.log(event.target.value);
}

input.addEventListener('change', inputValue);
