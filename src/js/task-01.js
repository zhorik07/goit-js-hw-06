const list = document.querySelector('#categories');
const items = [...list.children];
console.log(`Number of categories: ${items.length}`)

items.forEach((elem) => {
    const [elemTitle, elemUl] = elem.children;
    const titleText = elemTitle.textContent;
    const totalLi = elemUl.childElementCount;
    
    console.log(`Category: ${titleText}`);
    console.log(`Elements: ${totalLi}`);
    })