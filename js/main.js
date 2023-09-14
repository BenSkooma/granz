const toggleMenuBtn = document.getElementsByClassName('mainnav-btn')[0]
const mobileNav = document.getElementsByClassName('page-mainnav')[0]

toggleMenuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('is-open')
})