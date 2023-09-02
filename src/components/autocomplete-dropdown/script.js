// API = https://restcountries.com/v3.1/all
// https://www.youtube.com/watch?v=OXd_wv7Qi4g&ab_channel=Devistry

const autocompleteDropdown = (async function () {
    const autoCompleteInputEl = document.querySelector('.auto-drop-comp-input-search')
    const autoCompleteContainerEl = document.querySelector('.auto-drop-comp-container')

    async function getCountries() {
        let data = await fetch("https://restcountries.com/v3.1/all")
        data = await data.json()
        return data.map(item => item.name.common.toLowerCase())
    }

    const countries = await getCountries()

    function dropdownBuilder(items = []) {
        if (!items.length) return

        const listElement = document.createElement('ul')
        listElement.className = 'auto-drop-comp-list'

        items.forEach(item => {
            const listItem = document.createElement('li')
            const buttonItem = document.createElement('button')

            buttonItem.textContent = item

            buttonItem.addEventListener('click', onItemSelected)

            listItem.appendChild(buttonItem)
            listElement.appendChild(listItem)
        })

        autoCompleteContainerEl.appendChild(listElement)
    }

    function onItemSelected(event) {
        console.log('aqui');
        event.preventDefault();
        const element = event.target
        autoCompleteInputEl.value = element.textContent
        removeDropdown()
    }

    function removeDropdown() {
        const listElement = document.querySelector('.auto-drop-comp-list')
        if (!!listElement) listElement.remove()
    }

    autoCompleteInputEl.addEventListener('input', () => {
        removeDropdown()
        const inputValue = autoCompleteInputEl.value.trim().toLowerCase()

        if (!inputValue.length) return
        
        const filteredCountries = countries.filter(country => country.includes(inputValue))
        dropdownBuilder(filteredCountries)
    })

    autoCompleteInputEl.addEventListener('blur', () => {
        removeDropdown()
    })

})()
