const login_button = document.querySelector('#login-button');
const close_login_button = document.querySelector('#close-login-button');
const sign_up_link = document.querySelector('#sign-up');

const sign_up_button = document.querySelector('#sign-up-button');
const close_sign_up_button = document.querySelector('#close-sign-up-button');

login_button.addEventListener('click', openLoginForm);
close_login_button.addEventListener('click', closeLoginForm);

sign_up_button.addEventListener('click', openSignUpForm);
close_sign_up_button.addEventListener('click', closeSignUpForm);

sign_up_link.addEventListener('click', closeLoginForm);
sign_up_link.addEventListener('click', openSignUpForm);

function openLoginForm() {
    let a = document.getElementById('login-container');
    a.classList.remove('display-none');
    a.classList.add('display-flex');
}

function closeLoginForm() {
    let a = document.getElementById('login-container');
    a.classList.remove('display-flex');
    a.classList.add('display-none');
}



function openSignUpForm() {
    let a = document.getElementById('sign-up-container');
    a.classList.remove('display-none');
    a.classList.add('display-flex');
}

function closeSignUpForm() {
    let a = document.getElementById('sign-up-container');
    a.classList.remove('display-flex');
    a.classList.add('display-none');
}