const styles = `
    ._modal_overlay {
        position: fixed;
        opacity: 0;
        transition: 600ms ease-in-out;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, .5);
        pointer-events: none;
    }

    ._modal_overlay.active {
        pointer-events: all;
        opacity: 1;
    }
`

const styleElement = document.createElement('style')
styleElement.innerText = styles
document.head.appendChild(styleElement)

const modalOverlay = document.createElement('div')
modalOverlay.classList.add('_modal_overlay')

const body = document.querySelector('body')
body.appendChild(modalOverlay)


// Open modal listener
const openModalBtn = document.querySelector('#openModalBtn')

openModalBtn.addEventListener('click', () => {
    modalOverlay.classList.add('active')
})
