function configScript1() {
    const body = 'script 1'

    function getBody() {
        return body
    }

    return {
        getBody
    }
}

configScript1()
