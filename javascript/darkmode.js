const home = document.querySelector('.home')
const about = document.querySelector('.about')
const project = document.querySelector('.project')
const contact = document.querySelector('.contact')
const footer = document.querySelector('.footer')
const scrollDark = document.querySelector('.scrollDark')
const navbar = document.querySelector('.navbar')


const iconMode = document.querySelector('.iconMode')

    iconMode.addEventListener('click', () => {
    home.classList.toggle('dark')
    about.classList.toggle('dark')
    project.classList.toggle('dark')
    contact.classList.toggle('dark')
    footer.classList.toggle('dark')
    scrollDark.classList.toggle('dark')
    navbar.classList.toggle('dark')

})