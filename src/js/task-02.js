const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients')
console.log(list)

const element = ingredients.map((elem) => {
  const li = document.createElement("li");
  li.classList.add("item");
  li.textContent = elem;
  return li;
});
list.append(...element);
