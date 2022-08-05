const darkModeToggle = document.querySelector('header .darkmode-toggle');
const body = document.body
let isDarkMode = localStorage.getItem("dark-mode")

const enableDarkMode = () => {
    body.className = "dark-mode"
    localStorage.setItem('dark-mode', true)
}
const disableDarkMode = () => {
    body.className = ""
    localStorage.removeItem('dark-mode')
}

if(isDarkMode) enableDarkMode;

darkModeToggle.addEventListener('click', (e) => {
    isDarkMode = localStorage.getItem("dark-mode")
    // if darkMode is enabled, then turn it off on click
    if(isDarkMode) {
        disableDarkMode()
    }else {
        enableDarkMode()
    }

})
