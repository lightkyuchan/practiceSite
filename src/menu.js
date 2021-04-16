'use strict'

let newArray = [];    

function loadJson() {    
    return fetch('data/product.json')    
    .then(response => response.json())    
    .then(json => json.items);
}

function displayItems(items) {    
    const container = document.querySelector('.menuList');        

    const count = 10;
    for(let i=0; i<count; ++i)
    {
        newArray[i] = items[i];
    }

    container.innerHTML = newArray.map( (item) => createHTMLString(item)).join('');    
}

function createHTMLString(item) {    
    return `
        <li>
            <img src=${item.image} alt="product">
            <span>${item.info}</span>
            <span>${item.price}</span>
        </li>
    `;
}

function createBtn(items) {
    const container = document.querySelector('.btn');
    
    const limit = 10;
    const length = Math.ceil(items.length / limit);
    let count = 1;
    
    for(let i=0; i<length; ++i) {
        let newBtn = document.createElement('button');

        newBtn.setAttribute('value',count);
        newBtn.textContent = count;

        container.appendChild(newBtn);

        ++count;
    }

    container.firstChild.style.color = 'blue';

    container.addEventListener('click', event => onButtonClick(event,items));
}

function onButtonClick(event,items) {
    if(event.target.value === undefined) { return; }
    
    const container = document.querySelector('.btn');

    let index   = event.target.value * 10;
    let limit   = 10;
    let current = index - limit;
    let count   = 0;

    if(index > items.length) { index = items.length; }

    newArray = [];    

    for(let i=current; i<index; ++i) {
        newArray[count] = items[i];
        ++count;
    }

    for(let child of container.childNodes) {
        console.log(child);
        child.style.color = 'black';
    }

    const menu = document.querySelector('.menuList');
    menu.innerHTML = newArray.map( (item) => createHTMLString(item)).join('');    
    
    event.target.style.color = 'blue';    
}

export function menuLoad() {
    loadJson()
    .then(items => {
        displayItems(items);
        createBtn(items);
    })
    .catch(console.log);
}
