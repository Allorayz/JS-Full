function setTitle(text) {
  const someTitle = document.querySelector('.title');
  someTitle.textContent = text;
  return someTitle;
}

setTitle('its work?');
