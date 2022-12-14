// CSS styles
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

    .center {
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        z-index: 10;
    }
    
    .ring {
        position: absolute;
        width: 200px;
        height: 200px;
        border-radius: 50%;
        animation: ring 2s linear infinite;
    }
    
    @keyframes ring {
        0% {
            transform: rotate(0deg);
            box-shadow: 1px 5px 2px #e65c00;
        }
        50% {
            transform: rotate(180deg);
            box-shadow: 1px 5px 2px #18b201;
        }
        100% {
            transform: rotate(360deg);
            box-shadow: 1px 5px 2px #0456c8;
        }
    }
    
    .ring:before {
        position: absolute;
        content: '';
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        border-radius: 50%;
        box-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
    }
    
    .center span {
        color: #737373;
        font-size: 20px;
        letter-spacing: 1px;
        text-transform: uppercase;
        line-height: 200px;
        animation: text 3s ease-in-out infinite;
    }
    
    @keyframes text {
        50%{
            color: white;
        }
    }    
`

const loadingSpinnerHTML = `    
    <div class="center">
        <div class="ring"></div>
        <span>loading...</span>
    </div>
`

// attach css style to html head
const styleElement = document.createElement('style')
styleElement.innerText = styles
document.head.appendChild(styleElement)

// create modal overlay div and add spinner
const modalOverlay = document.createElement('div')
modalOverlay.classList.add('_modal_overlay')
modalOverlay.innerHTML = loadingSpinnerHTML

const body = document.querySelector('body')
body.appendChild(modalOverlay)

// open modal with function
function openLoadingModal() {
    modalOverlay.classList.add('active')    
}

// open modal listener with id
const openModalFromElementId = document.querySelector('#openModalBtn')

if (openModalFromElementId) {
    openModalFromElementId.addEventListener('click', () => {
        modalOverlay.classList.add('active')
        modalOverlay.activeTime = new Date()
    })    
}

// open modal listener with class
const openModalFromClass = document.querySelector('.openModalBtn')

if (openModalFromClass) {
    openModalFromClass.addEventListener('click', () => {
        modalOverlay.classList.add('active')
    })    
}

// close modal after some time
const secondsToEnableCloseBtn = 30

modalOverlay.addEventListener('click', () => {
    console.log('close button pushed');
    const secondsPassedAfterOpened = getSecondsBetweenDates(modalOverlay.activeTime)

    if (secondsPassedAfterOpened > secondsToEnableCloseBtn) {
        modalOverlay.classList.remove('active')        
    }
})

function getSecondsBetweenDates(start, end = new Date()) {
    const seconds = start.getTime() / 1000
    const secondsNow = end.getTime() / 1000
    return secondsNow - seconds    
}
