const userName = document.querySelector('#name-input');
const span = document.querySelector('#name-output');
userName.addEventListener('input', onInput);

function onInput(elem) {
  if (elem..currentTarget.value.trim()) {
    span.textContent = elem.currentTarget.value;
  } else  {
    span.textContent = 'Anonymous';
  }
}
