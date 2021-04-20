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
            <img class="product" src=${item.image} alt="product">
            <span class="product">${item.info}</span>
            <span class="product">${item.price}</span>
        </li>
    `;
}

function createBtn(items) {
    const container = document.querySelector('.btn');
    
    const limit  = 10;
    const length = Math.ceil(items.length / limit);
    let   count  = 1;
    
    for(let i=0; i<length; ++i) {
        //버튼태그 생성
        let newBtn = document.createElement('button');

        newBtn.setAttribute('value',count);
        newBtn.textContent = count;

        //버튼을 컨테이너의 자식으로 붙이기
        container.appendChild(newBtn);

        ++count;
    }

    container.firstChild.style.color = 'blue';

    container.addEventListener('click', event => onButtonClick(event,items));
}

function onButtonClick(event,items) {
    if(event.target.value === undefined) { return; }
    
    const container = document.querySelector('.btn');

    //총 상품 수
    let index   = event.target.value * 10;
    //페이지당 10개까지만 보여줄수
    let limit   = 10;
    //해당 페이지의 첫번째 index
    let current = index - limit;
    //array에 담을 index
    let count   = 0;

    if(index > items.length) { index = items.length; }

    newArray = [];    

    for(let i=current; i<index; ++i) {
        newArray[count] = items[i];
        ++count;
    }

    //버튼색 변경. 분명 모든 자식의 스타일을 바꿔주는게 있을건데
    //못찾아서 이렇게했다...
    for(let child of container.childNodes) {
        console.log(child);
        child.style.color = 'black';
    }

    //해당페이지의 상품 수 만큼 보여주는거
    const menu     = document.querySelector('.menuList');
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