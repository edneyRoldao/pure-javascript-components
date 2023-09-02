const cardsElement = document.querySelectorAll('.card')

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('show', entry.isIntersecting)
    })
}, { threshold: 1 })

cardsElement.forEach(card => {
    observer.observe(card)
})
