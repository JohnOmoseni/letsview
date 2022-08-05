import { closeBtnsArray } from "./selector.js";

export function close() {
    // console.log(closeBtnsArray)
    closeBtnsArray.forEach(closeBtn => {
        closeBtn.addEventListener('click', (e) => {
            console.log(closeBtn.parentElement)
            const parent = closeBtn.parentElement;
            parent.remove();
    
        })
    })
}

export function removeOnWindowClick(selector, iconContent, showClass, parent='') {
    window.addEventListener('click', (e) => {
        const isContainerClick = e.target.matches(selector) ||
                                e.target.closest(parent)
        if(!isContainerClick) {
            iconContent.classList.remove(showClass)
        }
        // console.log(e.target, isContainerClick);
    })
}

export function clickedOutside(container, className) {
    container.addEventListener('click', (e) => {
        const target = e.target;
    
        const isCard = target.closest(className)
        if(!isCard) {
            container.classList.remove('open')
        }
    })
}

export function addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, (e) => {
        const isSelector = e.target.closest(selector);
        if(isSelector) {
            callback(e);
        }
    })
}