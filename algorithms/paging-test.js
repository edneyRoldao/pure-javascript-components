const list = ['banana', 'maca', 'uva', 'laranja', 'pera', 'abacate', 'sal', 'acucar', 'carne', 'ovo', 'oleo', 'feijao', 'arroz']


function getPagedResult(page, size) {
    if (typeof(page) != 'number' || typeof(size) != 'number')
        throw new Error('is not a number')

    if (!page)
        page = 1

    const pagedList = {
        content: [],
        total: 0,
        pages: 0,
        current: 0
    }
    
    // descubrindo o total de paginas
    let pages = parseInt(list.length / size)
    if (list.length % size > 0) {
        pages++
    }

    // descubrindo o index inicial
    const startIndex = (page - 1) * size

    // descubrindo o index final    
    const endIndex = startIndex + size < list.length ? startIndex + size : list.length

    const sublist = list.slice(startIndex, endIndex)

    pagedList.total = list.length
    pagedList.content = sublist
    pagedList.pages = pages
    pagedList.current = page

    return pagedList
}

const result = getPagedResult(2, 10)
console.log(result);
