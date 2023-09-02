const options = {
    openOnLoad: false,
    type: 'warning',
    background: 'white',
    titleColor: 'blue',
    message: 'Usuário criado com sucesso',
    title: 'SUCESSO',
    redirectBtn: {
        content: 'LOGIN',
        path: 'https://github.com/edneyRoldao?tab=repositories'
    },
    closeAutoSeconds: 5
}

const styles = `
    @import url('https://fonts.cdnfonts.com/css/glacial-indifference-2');

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
        display: flex;
        justify-content: center;
        align-items: center;
    }

    ._modal_content {
        padding-left: 20px;
        padding-top: 5px;
        height: 15%;
        width: 50%;
        background-color: white;
        border-radius: 5px
    }

    ._modal_overlay.active {
        pointer-events: all;
        opacity: 1;
    }

    ._close_modal {
        color: #aaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
        margin-right: 10px;
        margin-top: -7px;      
    }

    ._close_modal:hover,
    ._close_modal:focus {  
        text-decoration: none;
        cursor: pointer;
    }

    ._modal_title{
        font-size: 35px;
        font-family: 'Glacial Indifference', sans-serif;        
        color: ${options.titleColor};
        letter-spacing: 3px;
        border-bottom: 2px solid #67CB95;
        font-weight: bold;
      }

      ._modal_message {
        font-size: 20px;
        margin-top: 15px;
        font-family: 'Glacial Indifference', sans-serif;        
      }

      ._modal_btn {
        letter-spacing: 3px;
        font-size: 25px;
        width: 120px;
        height: 45px;
        border-radius: 5px;
        background: #67CB95;
        border: 0px;
        transition: 0.4s;
        float: right;
        margin-top: 30px;
        margin-right: 10px;
        padding-top: 5px;
        color: #fff;
        text-align: center;
        text-decoration: none;
      }
`

const modalBaseHTML = `<div class="_modal_overlay">{placeholder}</div>`

const body = document.querySelector('body')

// modal html build init
const modalOverlay = document.createElement('div')
const modalContent = document.createElement('div')
const modalStyleElement = document.createElement('style')
const modalTitleElement = document.createElement('span')
const modalCloseElement = document.createElement('span')
const modalMessageElement = document.createElement('p')

modalStyleElement.innerText = styles
document.head.appendChild(modalStyleElement)
modalOverlay.classList.add('_modal_overlay')
body.appendChild(modalOverlay)

modalContent.classList.add('_modal_content')
modalOverlay.appendChild(modalContent)

modalTitleElement.classList.add('_modal_title')
modalTitleElement.textContent = options.title

modalCloseElement.classList.add('_close_modal')
modalCloseElement.innerHTML = '&times;'
modalCloseElement.addEventListener('click', closeModal)

modalMessageElement.classList.add('_modal_message')
modalMessageElement.textContent = options.message

modalContent.appendChild(modalTitleElement)
modalContent.appendChild(modalCloseElement)
modalContent.appendChild(modalMessageElement)

if (options.redirectBtn) {
    const modalBtnElement = document.createElement('a')
    modalBtnElement.classList.add('_modal_btn')
    modalBtnElement.href = options.redirectBtn.path
    modalBtnElement.textContent = options.redirectBtn.content
    modalContent.appendChild(modalBtnElement)
}

// modal html build end

function openModal() {
    modalOverlay.classList.add('active')
}

function closeModal() {
    if (modalOverlay.classList.contains('active')) {
        modalOverlay.classList.remove('active')    
    }        
}

// options config
if (options.openOnLoad) {
    openModal()
}

if (options.closeAutoSeconds) {
    setTimeout(closeModal, options.closeAutoSeconds * 1000)
}
