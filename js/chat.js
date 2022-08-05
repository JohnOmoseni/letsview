import { } from './back-arrow.js';
import { } from './dropdown.js'


const container = document.querySelector('main .chat-container')
const sendBtn = document.querySelector('.send-message button')
const input = document.querySelector('.send-message form input')
const form = document.querySelector('.send-message form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    sendMessage();
})

function sendMessage() {
    const message = input.value.trim()
    console.log(message, container);
    if(message) addMessage(message);

    input.value = "";
    input.focus();
}

function addMessage(input) {
    const list = document.createElement('li');

    list.className = 'chat'
    list.innerHTML = input

    container.append(list)
    list.scrollIntoView(false)
    console.log(list);
}

console.log(form.offsetHeight)