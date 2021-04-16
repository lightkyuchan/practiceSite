'use strict';

//처리해야할 순서?
//1.json파일 생성(icon에 관한것들)
//2.json파일 읽기
//3.html에 뿌려주기

class CreateHtmlString {    
    createHtmlString() { }
}

class Logo extends CreateHtmlString {

    createHtmlString(icon) {        
        return `   
            <a href="#"><img src=${icon.icon} alt=${icon.type}></a>     
        `;
    }
}

class Search extends CreateHtmlString {
    
    createHtmlString(icon) {
        return `
          <input type="text" id="searchText"> 
          <img src=${icon.icon} alt=${icon.type} id="searchBtn">
        `;
    }
}

class NavBtns extends CreateHtmlString {

    createHtmlString(icon) {
        return `
        <li>
          <a href="#"><img src=${icon.icon} alt=${icon.type}></a>
        </li>
        `;
    }
}

const logo = new Logo();
const search = new Search();
const navBtns = new NavBtns();

//json가져오기
function loadJson() {
    return fetch('data/icons.json')
    .then(response => response.json())
    .then(json => json.icons);
}

//html에 보여주기
function displayIcons(icons) {    
    const _logo = document.querySelector('.logo');    
    const _search = document.querySelector('.search');        
    const _navBtns = document.querySelector('.navBtns');
    
    _logo.innerHTML = logo.createHtmlString(icons[0]);
    _search.innerHTML = search.createHtmlString(icons[1]);

    const searchText = _search.firstElementChild;
    
    searchText.value = 'Search...';

    const navBtn = icons.filter( (btn) => btn.type === 'btn' );
    
    _navBtns.innerHTML = navBtn.map( (btn) => navBtns.createHtmlString(btn));
}

export function load()
{
    console.log('aaaaa');
    loadJson()
    .then(icons => {
        displayIcons(icons);
    })
    .catch(console.log);
}
