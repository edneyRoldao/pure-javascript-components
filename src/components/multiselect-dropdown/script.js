const className = 'select-open'
const items = document.querySelectorAll('.select-item')
const selectBtn = document.querySelector('.select-btn')
const itemsElement = document.querySelector('.select-list-items')
const selectBoxSelected = document.querySelector('.select-box-selected')

const spanEl = document.createElement('span')
spanEl.classList.add('select-btn-text')
spanEl.textContent = 'Select Language'
selectBoxSelected.appendChild(spanEl)

selectBtn.addEventListener('click', () => {
    selectBtn.classList.toggle(className)

    if (selectBtn.classList.contains(className)) {
        itemsElement.style.maxHeight = itemsElement.scrollHeight + 'px'
    } else {
        itemsElement.style.maxHeight = 0
        itemsElement.style.padding = 0
    }
})

items.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('select-item-checked')
        const selectedItems = document.querySelectorAll('.select-item-checked')

        while (selectBoxSelected.firstChild) {
            selectBoxSelected.removeChild(selectBoxSelected.firstChild)
        }

        if (!selectedItems.length) {
            selectBoxSelected.appendChild(spanEl)
        }
        
        selectedItems.forEach(selectedItem => {
            const content = selectedItem.querySelector('.select-item-text').textContent
            const newSpan = document.createElement('span')
            newSpan.classList.add('select-item-selected')
            newSpan.textContent = content
            selectBoxSelected.appendChild(newSpan)
        })

    })    
})

document.onclick = (e) => {
    if (!e.target.className.includes('select-')) {
        itemsElement.style.maxHeight = 0
        selectBtn.classList.remove(className)
    }
}
