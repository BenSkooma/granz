const toggleMenuBtn = document.getElementsByClassName('mainnav-btn')[0]
const mobileNav = document.getElementsByClassName('page-mainnav')[0]
const siteBody = document.getElementsByClassName('site')[0]

toggleMenuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('is-open')
    siteBody.classList.toggle('noscroll')
})