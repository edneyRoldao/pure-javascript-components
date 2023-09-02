const script1 = (function () {
    const body = 'from script 1111'

    return {
        getBody: () => body
    }
}())

console.log(script1.getBody());