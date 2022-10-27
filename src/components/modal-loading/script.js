// Open modal listener
const modalOverlay = document.querySelector('._modal_overlay')
const openModalBtn = document.querySelector('#openModalBtn')

openModalBtn.addEventListener('click', () => {
    modalOverlay.classList.add('active')
})
