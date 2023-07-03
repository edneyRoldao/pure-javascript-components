const maxValueLength = 14

document.querySelector('.input-data').addEventListener('keyup', (event) => {
    let value = event.target.value

    // just numbers
    value = value.replace(/[^0-9]+/g, '')

    // removing zeros at left side
    while (value.charAt(0) === '0') value = value.substring(1)

    // limitting max value
    if (value.length > maxValueLength) value = value.substring(0, value.length -1)

    // fill with zeros when length < 3
    while (value.length < 3) value = "0" + value

    // formatting decimal number 
    const decimalValue = value.substring(value.length - 2)
    const intValue = value.substring(0, value.length -2)
    value = intValue.replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ',' + decimalValue

    event.target.value = value
})
