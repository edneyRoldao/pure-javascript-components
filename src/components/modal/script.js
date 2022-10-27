const openModalBtn = document.querySelector('#modal')
const overlay = document.querySelector('#overlay')

openModalBtn.addEventListener('click', () => {
    overlay.classList.add('active')
})
