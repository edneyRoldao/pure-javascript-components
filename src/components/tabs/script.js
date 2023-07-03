const tabsEl = document.querySelectorAll('.graphic')
const tabsContentEl = document.querySelectorAll('.pie-chart-content')

tabsEl.forEach((tab, index) => {
    tab.addEventListener('click', () => {

        tabsEl.forEach(it => {
            if (it !== tab) {
                it.classList.remove('selected')
            }
        })
        
        tab.classList.add('selected')
        showContent(index)
    })
})

function showContent(index) {
    tabsContentEl.forEach((tab, i) => {

        if (index === i) {
            tab.classList.remove('hide')
        } else {
            tab.classList.add('hide')
        }

    })
}
