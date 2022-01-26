const counterElement = document.querySelector('.counter');
const counterValueElem = document.querySelector('.counter__value');

const onCounterChangeHandler = event => {
  const isButton = event.target.classList.contains('counter__button');

  if (!isButton) {
    return;
  }

  const action = event.target.dataset.action;

  const oldValue = Number(counterValueElem.textContent);

  const newValue = action === 'decrease' ? oldValue - 1 : oldValue + 1;

  localStorage.setItem('counterValue', newValue);

  counterValueElem.textContent = newValue;
};

counterElement.addEventListener('click', onCounterChangeHandler);

const onStorageChangeHandler = event => {
  counterValueElem.textContent = event.newValue;
};

window.addEventListener('storage', onStorageChangeHandler);

const onDocLoadedHandler = () => {
  counterValueElem.textContent = localStorage.getItem('counterValue') || 0;
};

document.addEventListener('DOMContentLoaded', onDocLoadedHandler);
