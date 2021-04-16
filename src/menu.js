'use strict'

let index     = 10;
let length    = 0;
let pageCount = 0;
let count     = 10;

function loadJson() {    
    return fetch('data/product.json')    
    .then(response => response.json())    
    .then(json => json.items);
}

function displayItems(items) {    
    const container = document.querySelector('.menuList');        
    
    length = items.length;

    let newArray = [];    

    for(let i=0; i<index; ++i)
    {
        newArray[i] = items[i];
    }

    container.innerHTML = newArray.map( (item) => createHTMLString(item)).join('');    

    return length;
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

function createBtn() {
    
}

loadJson()
    .then(items => displayItems(items))
    .then(length => createBtn(length))
    .catch(console.log);