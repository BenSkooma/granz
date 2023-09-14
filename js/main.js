const toggleMenuBtn = document.getElementsByClassName('mainnav-btn')[0]
const mobileNav = document.getElementsByClassName('page-mainnav')[0]
const pageBody = document.getElementsByClassName('page')[0]

toggleMenuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('is-open')
    pageBody.classList.toggle('noscroll')
})