var getStartedBg = document.getElementById('signup_box_area_bg');
var logInPageBg = document.getElementById('logIn_box');
var signUpPageBg = document.getElementById('signup_box');

function getStartedBtn(){
    getStartedBg.style.visibility = 'visible';
    logInPageBg.style.visibility = 'visible';
}

function signUpPageBtn(){
    getStartedBg.style.visibility = 'visible';
    logInPageBg.style.visibility = 'hidden';
    signUpPageBg.style.visibility = 'visible';
}

function logInPageBtn(){
    getStartedBg.style.visibility = 'visible';
    signUpPageBg.style.visibility = 'hidden';
    logInPageBg.style.visibility = 'visible';
}

function getStartedPageCloseBtn(){
    getStartedBg.style.visibility = 'hidden';
    signUpPageBg.style.visibility = 'hidden';
    logInPageBg.style.visibility = 'hidden';
}