import { load } from './nav.js';
import { menuLoad } from './menu.js';
'use strict'

//nav Load
load();
//menulist
const menu = menuLoad();

//메뉴 클릭시 상세화면
function setEventLisner() {
    const container = document.querySelector('.menuList');

    if(container !== null) {
        container.addEventListener('click', () => product() );
    }
    
}

function product() {        
    //다른 페이지로 값을 넘겨주는거    
    localStorage.setItem('product',event.target.src);
    location.href = 'product.html'; 
}

setEventLisner();


