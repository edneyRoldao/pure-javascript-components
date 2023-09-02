
const modalComponent = (function () {
    const options = {
        openOnLoad: false,
        type: 'alert-success',
        closeAfterSeconds: 5,
        titleColor: '#67CB95',
        buttonHover: '#5FB989',
        icon: 'checkmark-circle-outline',
        title: 'Success',
        message: 'Usuário criado com sucesso',
        closeOnOverlayClick: true,
        redirectBtn: {
            path: 'https://meet.google.com/',
            content: 'Login'
        }
    }

    const styles = `
        @import url('https://fonts.cdnfonts.com/css/glacial-indifference-2');
        * { font-family: 'Glacial Indifference', sans-serif; }
        .mc_overlay { position: fixed; opacity: 0; transition: 600ms ease-in-out; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(0, 0, 0, .5); pointer-events: none; display: flex; justify-content: center; align-items: center; }
        .mc_overlay.active { pointer-events: all; opacity: 1; }
        .mc_center { display: flex; text-align: center; justify-content: center; align-items: center; min-height: 100vh; z-index: 10; }
        .mc_ring { position: absolute; width: 200px; height: 200px; border-radius: 50%; animation: ring 2s linear infinite; }
        .mc_center span { color: #737373; font-size: 20px; letter-spacing: 1px; text-transform: uppercase; line-height: 200px; animation: text 3s ease-in-out infinite; }
        .mc_ring:before { position: absolute; content: ''; left: 0; top: 0; height: 100%; width: 100%; border-radius: 50%; box-shadow: 0 0 5px rgba(255, 255, 255, 0.3); }
        @keyframes text { 50% { color: white; } }    
        @keyframes ring { 0% { transform: rotate(0deg); box-shadow: 1px 5px 2px #e65c00; } 50% { transform: rotate(180deg); box-shadow: 1px 5px 2px #18b201; } 100% { transform: rotate(360deg); box-shadow: 1px 5px 2px #0456c8; } }                
     
        
        .mc_modal_content {
            padding-top: 10px;
            height: 400px;
            width: 32%;
            background-color: white;
            border-radius: 10px
        }

        .mc_close_modal {
            color: #aaa;
            float: right;
            font-size: 30px;
            font-weight: bold;
            margin-right: 15px;
            margin-top: -7px;      
        }
    
        .mc_close_modal:hover,
        .mc_close_modal:focus {  
            text-decoration: none;
            cursor: pointer;
        }
        
        .mc_text_div {
            width: 100%;
            text-align: center;
            margin-top: 20px;
            height: 295px;
        }

        .mc_modal_div_icon {
            width: 100%;
            margin-bottom: 20px;
        }
    
        .mc_modal_icon {
            font-size: 140px;
            color: ${options?.titleColor};
            margin-left: 3%
        }

        .mc_modal_title {
            font-size: 30px;
            color: ${options?.titleColor};
            letter-spacing: 3px;
            font-weight: bold;
            margin-top: 20px;
        }

        .mc_modal_message {
            font-size: 22px;
            margin-top: 15px;
        }

        .mc_modal_btn {
            float: right;
            letter-spacing: 3px;
            font-size: 27px;
            width: 100%;
            height: 85px;
            border-radius: 5px;
            background: ${options?.titleColor};
            border: 0px;
            transition: 0.4s;
            color: #fff;
            text-decoration: none;
            margin-top: 25px;
            padding-top: 24px;
            text-align: center;
        }
            
        .mc_modal_btn:hover{
            cursor: pointer;
            background-color: ${options?.buttonHover};
        }        
    `

    // modal overlay construct
    const body = document.querySelector('body')
    const overlay = document.createElement('div')
    const style = document.createElement('style')

    style.innerText = styles
    document.head.appendChild(style)
    overlay.classList.add('mc_overlay')
    body.appendChild(overlay)

    const open =  () => {
        overlay.classList.add('active')

        if (options.closeAfterSeconds) {
            setTimeout(close, options.closeAfterSeconds * 1000)
        }    
    }

    const close = () => {
        if (overlay.classList.contains('active')) {
            overlay.classList.remove('active')    
        }                
    }

    if (options.openOnLoad) {
        open()
    }

    if (options.closeOnOverlayClick) {
        overlay.addEventListener('click', () => {
            close()
        })                
    }

    switch (options.type) {
        case 'loading':
            overlay.innerHTML = `<div class="mc_center"><div class="mc_ring"></div><span>loading...</span></div>`
            break
        case 'alert-error':
        case 'alert-success':
        case 'alert-warning':            
            let modalContent = `
                <div class="mc_modal_content">
                    <span class="mc_close_modal" onclick="modalComponent.close()">&times;</span>
                    <div class="mc_text_div">
                        <div class="_modal_div_icon">
                            <ion-icon class="mc_modal_icon" name="${options?.icon}"></ion-icon>
                        </div>
                        <span class="mc_modal_title">${options?.title}</span>
                        <p class="mc_modal_message">${options?.message}</p>
                    </div>
                    {button_replace}
                </div>`

            const button = !!options?.redirectBtn ? `<a href="${options?.redirectBtn?.path}" class="mc_modal_btn">${options?.redirectBtn?.content}</a>` : ''
            modalContent = modalContent.replace('{button_replace}', button)
            overlay.innerHTML = modalContent   
    }
    
    return {
        open,
        close
    }
}())
