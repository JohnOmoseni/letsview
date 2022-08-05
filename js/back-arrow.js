const backArrow = document.querySelector('.back-arrow');

backArrow.addEventListener('click', (e) => {
    console.log(e);
    window.history.back()
})
