const button = document.querySelector('.single-use-btn');
function message() {
  console.log('clicked');
  button.removeEventListener('click', message);
}

button.addEventListener('click', message);
