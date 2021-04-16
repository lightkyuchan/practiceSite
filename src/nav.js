'use strict';

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
    
    //logo search
    _logo.innerHTML = logo.createHtmlString(icons[0]);
    _search.innerHTML = search.createHtmlString(icons[1]);

    //search에 input가져오는거
    const searchText = _search.firstElementChild;    
    //input의 초기 값
    searchText.value = 'Search...';

    //버튼들
    const navBtn = icons.filter( (btn) => btn.type === 'btn' );    
    _navBtns.innerHTML = navBtn.map( (btn) => navBtns.createHtmlString(btn));
}

//헨들링?? main에서 써주기위해 export
export function load()
{
    loadJson()
    .then(icons => {
        displayIcons(icons);
    })
    .catch(console.log);
}
