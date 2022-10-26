const closeBtn = document.querySelector('.closeBtn')
const searchBtn = document.querySelector('.searchBtn')
const searchBox = document.querySelector('.searchBox')

const header = document.querySelector('header')
const nav = document.querySelector('.navigation')
const menuToggle = document.querySelector('.menuToggle')

searchBtn.addEventListener('click', () => {
    closeBtn.classList.add('active')
    searchBtn.classList.add('active')
    searchBox.classList.add('active')
    menuToggle.classList.add('hide')
})

closeBtn.addEventListener('click', () => {
    closeBtn.classList.remove('active')
    searchBtn.classList.remove('active')
    searchBox.classList.remove('active')
    menuToggle.classList.remove('hide')
})

menuToggle.addEventListener('click', () => {
    header.classList.toggle('open')
    closeBtn.classList.remove('active')
    searchBtn.classList.remove('active')
    searchBox.classList.remove('active')
})
