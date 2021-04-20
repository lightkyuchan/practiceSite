'use strict';

function productInfo() {
    const strImg = localStorage.getItem('product');    
    
    //경로앞에 http삭제
    let strSrc = strImg.substr(21);

    const img  = document.querySelector('.img');
    const info = document.querySelector('#info');
    const price = document.querySelector('#price');

    loadJson()
    .then(items => { 
        items.forEach(item => {
            if(item.image === strSrc) {
                img.firstElementChild.src = item.image;
                info.textContent = item.info;
                price.textContent = item.price;
            }
        });
    })
}

function loadJson() {    
    return fetch('data/product.json')    
    .then(response => response.json())    
    .then(json => json.items);
}


productInfo();