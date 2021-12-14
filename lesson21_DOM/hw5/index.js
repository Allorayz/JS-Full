function setButton(buttonText) {
  const setText = document.querySelector('body');
  setText.innerHTML = `<button>${buttonText}</button>`;
}

setButton('text button');

export { setButton };
