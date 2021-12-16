const btn = document.querySelectorAll('.btn');
// console.log(btn);
function handleClick(event) {
  console.log(event.target.textContent);
}

btn.forEach(el => el.addEventListener('click', handleClick));
// btn[0].addEventListener('click', handleClick);
// btn[1].addEventListener('click', handleClick);
