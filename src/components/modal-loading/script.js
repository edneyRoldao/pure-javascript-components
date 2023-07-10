// Open modal listener
const modalOverlay = document.querySelector('._modal_overlay')
const openModalBtn = document.querySelector('#openModalBtn')


function closeModal() {
    modalOverlay.classList.remove('active')
}

openModalBtn.addEventListener('click', () => {
    modalOverlay.classList.add('active')
    setTimeout(closeModal, 1000);
})
