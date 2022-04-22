const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector(".username");
const greetings = document.querySelector('.greeting');
const clockBox = document.querySelector('.clock-box');
const quoteBox = document.querySelector('.quote-box');

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    paintGreetings(userName)
}

function paintGreetings(userName) {
    clockBox.classList.remove(HIDDEN_CLASSNAME);
    greetings.innerText = `Hello, ${userName}!`;
    quoteBox.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername == null) {
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(savedUsername);
}