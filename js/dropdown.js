import {removeOnWindowClick} from "./function.js";

const settings = [...document.querySelectorAll('.settings-container')];
const notifications = [...document.querySelectorAll('.notifications-container')]

const settingsBox = document.querySelector('.settings-container')
const notificationBox = document.querySelector('.notifications-container')

const dropdownBtns = document.querySelectorAll('#dropdown')
const closeBtns = document.querySelectorAll('.close-btn')

dropdownBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // const iconClass = btn.classList.value.split(' ')[1].toString()

        if(btn.classList.contains('settings-btn')) {
            notifications.forEach(block => block.classList.remove('open'))
            settings.forEach(block => block.classList.toggle('open'))
            
        }else if(btn.classList.contains('notifications-btn')){
            settings.forEach(block => block.classList.remove('open'))
            notifications.forEach(block => block.classList.toggle('open'))
        }
    })
})
removeOnWindowClick('#dropdown', settingsBox, 'open', 'li')
removeOnWindowClick('#dropdown', notificationBox, 'open', 'li')

