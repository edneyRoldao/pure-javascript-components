const moneyMaskComponent = (function () {
    const defaultMaxLength = 9
    const inputElements = document.querySelectorAll('[moneyMask]')
    
    inputElements.forEach(input => {
        if (input.tagName === 'INPUT') {
            const maxLength = parseInt(input.getAttribute('max')) || defaultMaxLength

            input.addEventListener('keyup', (event) => {
                let inputValue = event.target.value

                // removing everything except numbers
                inputValue = inputValue.replace(/[^0-9]+/g, '')

                // removing zeros at left side
                while (inputValue.charAt(0) === '0') {
                    inputValue = inputValue.substring(1)
                }

                // limitting max value
                if (inputValue.length > maxLength) {
                    inputValue = inputValue.substring(0, maxLength)
                }

                // fulfill decimal number
                while (inputValue.length < 3) {
                    inputValue = "0" + inputValue
                }

                // formatting decimal number 
                let intValue = inputValue.substring(0, inputValue.length -2)
                const decimalValue = inputValue.substring(inputValue.length - 2)
                intValue = intValue.replace(/\B(?=(\d{3})+(?!\d))/g, ".")

                event.target.value = `${intValue},${decimalValue}`
            })
        }
    })
})()
