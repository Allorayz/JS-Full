// algo
// 1. create new login form
// 2. add new login form before old input
// 3. change type 'text' in name=passwaord in 'password'

function finishForm() {
  const loginForm = document.querySelector('.login-form');
  const input = document.createElement('input');
  input.setAttribute('name', 'login');
  loginForm.prepend(input);

  document.querySelector('[name=password]').setAttribute('type', 'password');
}

finishForm();

export { finishForm };
