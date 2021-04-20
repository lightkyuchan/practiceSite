'use strict';

const submit   = document.querySelector('.submit > button');
const id       = document.querySelector('.email > input');
const password = document.querySelector('.password > input');
const register = document.querySelector('.register');

id.addEventListener('click', () => {
    id.value = '';
})

password.addEventListener('click', () => {
    password.value = '';
})

register.addEventListener('click', () => {
    document.querySelector('.join').style.display = 'block';
    document.querySelector('.login').style.display = 'none';
})

function onButtonClick() {    
    const email = document.querySelector('.email > input');
    const pw    = document.querySelector('.password > input');

    if(email.value === '' || pw.value === '') {
        alert('id와pw를 입력하세요');
        return;
    }

    const emailCheck = checkEmail(email.value);

    if(emailCheck) { console.log('good'); }
    else { console.log('bad'); }
}

//email검사하는거 퍼옴
function checkEmail(str) {   
     let reg_email = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

     if(!reg_email.test(str)) { return false; }    
     else { return true; }     
}           

submit.addEventListener('click', () => {
    onButtonClick();
});


//회원가입
function setEventListener() {    
    //login을 진행하다 좀 아닌거 같아서 회원가입에서 새롭게 짜보려함..
    const container = document.querySelector('.join');

    container.addEventListener('click', event => onClickJoin(event));
}

function onClickJoin(event) {    
    if(event.target.type === 'text') { event.target.value = ''; } 

    if(event.target.id === 'joinBtn') { join(); }

    if(event.target.id ==='singIn') {        
        document.querySelector('.join').style.display = 'none';
        document.querySelector('.login').style.display = 'block';
    }
}

function join() {
    const form       = document.querySelector('.form');    
    let   inputArray = [];
    let   index      = 0;
    let   email      = false;
    let   pw         = '';

    for(let input of form.children) {
        if(input.tagName === 'INPUT') {
            inputArray[index] = input            
            ++index;
        }
    }

    for(let input of inputArray) {
        if(input.value === '') { console.log('bad'); }

        if(input.name === 'email') { email = checkEmail(input.value); }
        if(input.name === 'password') { pw = input.value; }
        if(input.name === 'confirm') { 
            pw !== input.value ? console.log('pw bad') : console.log('pw good');
        }
    }

    if(email === false) { console.log('email bad');  }
}

setEventListener();