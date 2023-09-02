/**
 * Modal component
 * 
 * usage: on the body element you just need to add a modal tag with some attributes
 * 
 * example: <modal> modal html content or a template </modal>
 * 
 * attributes:
 * id:              to make open and close work properly                                        (is required)
 * open-on-load:    open modal after page load                                                  (is optional)
 * close-on-esc:    add this if you want to close modal when press esc key                      (is optional)
 * close-after-sec: you can close modal after some time automatically                           (is optional)
 * template-name:   you can use a modal template without add any html content inside modal tag  (is optional)
 * 
 * function open:   you can open a modal by calling this function and passing id as argument
 * function close:  you can close a modal by calling this function and passing id as argument
 * 
 */

const modalComponent = (function () {
    const modalList = Array.from(document.querySelectorAll('modal'))
    
    _attachModalStyleOnDocument()
    _configModalOverlay()
    _configCloseModalOnEscKey()
    _attachModalTemplate()

    function _attachModalStyleOnDocument() {
        const styles = `
            /* overlay styles */
            .mc_overlay { position: fixed; opacity: 0; transition: 600ms ease-in-out; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(0, 0, 0, .5); pointer-events: none; display: flex; justify-content: center; align-items: center; }
            .mc_overlay.active { pointer-events: all; opacity: 1; }

            /* loading modal styles */
            .mc_center { display: flex; text-align: center; justify-content: center; align-items: center; min-height: 100vh; z-index: 10; }
            .mc_ring { position: absolute; width: 200px; height: 200px; border-radius: 50%; animation: ring 2s linear infinite; }
            .mc_center span { color: #737373; font-size: 20px; letter-spacing: 1px; text-transform: uppercase; line-height: 200px; animation: text 3s ease-in-out infinite; }
            .mc_ring:before { position: absolute; content: ''; left: 0; top: 0; height: 100%; width: 100%; border-radius: 50%; box-shadow: 0 0 5px rgba(255, 255, 255, 0.3); }
            @keyframes text { 50% { color: white; } }    
            @keyframes ring { 0% { transform: rotate(0deg); box-shadow: 1px 5px 2px #e65c00; } 50% { transform: rotate(180deg); box-shadow: 1px 5px 2px #18b201; } 100% { transform: rotate(360deg); box-shadow: 1px 5px 2px #0456c8; } }                        
        `
        const style = document.createElement('style')
        style.innerText = styles
        document.head.appendChild(style)    
    }

    function _configModalOverlay() {
        modalList.forEach(modal => {
            modal.classList.add('mc_overlay')
    
            const id = modal.getAttribute('id')
            const openOnload = modal.getAttribute('open-on-load')
    
            if (!!openOnload || openOnload == '') {
                open(id)
            }
        })    
    }

    function _configCloseModalOnEscKey() {
        const onEscModalList = modalList.filter(item => item.getAttribute('close-on-esc') || item.getAttribute('close-on-esc') == '')
        if (!!onEscModalList.length) {
            window.addEventListener('keydown', function (event) {
                if (event.key === 'Escape') {
                    onEscModalList.forEach(item => close(item.getAttribute('id')))
                }
            })
        }    
    }

    function _closeModalAutoAfterTime(modal) {
        const closeInSeconds = modal.getAttribute('close-after-sec')

        if (!!closeInSeconds) {
            const seconds = parseInt(closeInSeconds)

            if (typeof seconds === 'number') {
                setTimeout(() => modal.classList.remove('active'), seconds * 1000)
            }
        }    
    }

    function _attachModalTemplate() {
        const templates = [
            { name: 'loading', value: '<div class="mc_center"><div class="mc_ring"></div><span>loading...</span></div>'}
        ]

        modalList.forEach(modal => {
            const templateName = modal.getAttribute('template-name')

            if (templateName) {
                const template = templates.find(item => item.name === templateName)
                modal.innerHTML = template.value
            }
        })
    }

    function open(modalId) {
        const modal = modalList.find(item => item.getAttribute('id') === modalId)

        if (!!modal) {
            modal.classList.add('active')

            _closeModalAutoAfterTime(modal)
        }        
    }

    function close(modalId) {
        const modal = modalList.find(item => item.getAttribute('id') === modalId)

        if (!!modal && modal.classList.contains('active')) {
            modal.classList.remove('active')
        }
    }

    return { open, close }
})()
