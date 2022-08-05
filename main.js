
import { close, clickedOutside, removeOnWindowClick, addGlobalEventListener } from "./js/function.js"
import { } from "./js/dropdown.js"
import { } from "./js/darkmode.js"
import { } from './js/globalEvent.js'
import { } from "./js/posts.js"

import { closeSideNav, contacts, footerBtns, friends, menuBar, sideNav} from "./js/selector.js"

VanillaTilt.init(document.querySelectorAll(".user-card"), {
    max: 25,
    speed: 200,
    scale: 1.05,
    glare: true,
    "max-glare": 0.2,
    easing: 'linear',
    gyroscope: false
});

// Close Buttons EventListener
close()

// Friends and Contacts - Open friends Div On footer icons click
footerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if(btn.dataset.contactBtn == "true") {
            contacts.classList.toggle('open')
            clickedOutside(contacts, '.friend-card')
            
        }else if(btn.dataset.friendBtn == "true") {
            friends.classList.toggle('open')
            clickedOutside(friends, '.friend-card')
        }
    })
})
// removeOnWindowClick('.animate', contacts, 'open')


// Open MenuBar - onclick
menuBar.addEventListener('click', (e) => {
    sideNav.classList.add('open')
})
// Close MenuBar - onclick
closeSideNav.addEventListener('click', () => {
    sideNav.classList.remove('open')
})
window.onclick = (e) => {
    const target = e.target
    const isMenuIcon = target.matches('.menu-icon') || target.matches('.menu-span') || target.matches('.sidenav-container')

    if(!isMenuIcon) {
        const isOpen = sideNav.classList.contains('open')
        if(isOpen) {
            sideNav.classList.remove('open')
        }
    }
}



