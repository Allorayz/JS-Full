function createButton(buttonText) {
  const button = document.createElement('button');
  button.textContent = buttonText;
  document.querySelector('body').append(button);
}

// createButton('axe');

export { createButton };
