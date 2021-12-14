// algo
// 1. create new login form
// 2. add new login form before old input
// 3. change type 'text' in name=passwaord in 'password'

function finishForm() {
  const setLogin = document.querySelector('input');
  setLogin.setAttribute('name', 'login');

  const newInput = document.createElement('input');

  const setNewInput = document.querySelector('.login-form');
  setNewInput.append(newInput);

  newInput.setAttribute('type', 'password');
  newInput.setAttribute('name', 'password');
}

// finishForm();

export { finishForm };
