import { load } from './nav.js';
import { menuLoad } from './menu.js';
import { search } from './menu.js';
'use strict'

//nav Load
load();
//menulist
 menuLoad();

//메뉴 클릭시 상세화면
function setEventLisner() {
    const container = document.querySelector('.menuList');

    if(container !== null) {
        container.addEventListener('click', () => product() );
    }    

    const searchContainer = document.querySelector('.search');
    searchContainer.addEventListener('click', () => searchInit(searchContainer) )
}

function searchInit(searchContainer) {    
    //console.log(searchContainer.childNodes[1].tagName);
    let text = null;
    let btn  = null;

    for(let value of searchContainer.childNodes) {    
        if(value.tagName === 'INPUT') { text = value; }
        if(value.tagName === 'IMG')   { btn  = value; }
    }
    
    text.addEventListener('click', () => {
        if(text.value === 'Search...' ) { text.value = ''; }
    });

    btn.addEventListener('click', () => search(text.value) );
}

function product() {        
    //다른 페이지로 값을 넘겨주는거    
    localStorage.setItem('product',event.target.src);
    location.href = 'product.html'; 
}

setEventLisner();


