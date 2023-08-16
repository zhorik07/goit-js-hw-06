let counterValue = 0;
const span = document.querySelector('#counter #value');
const minus = span.previousElementSibling;
const plus = span.nextElementSibling;
minus.addEventListener('click', rem);
plus.addEventListener('click', add);

function rem() {
  counterValue -= 1;
  span.textContent = counterValue;
  
}
function add() {
  counterValue += 1;
  span.textContent = counterValue
  
}