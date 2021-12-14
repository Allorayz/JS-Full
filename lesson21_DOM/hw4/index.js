function setTitle(text) {
  const setText = document.querySelector('.title');
  setText.textContent = text;
}

setTitle('ok, its work?');

export { setTitle };
