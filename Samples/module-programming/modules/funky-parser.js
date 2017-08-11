function createFunkyParser(opt) {
    // optional params
    opt = opt || {}

    // private data
    var foo = opt.foo || 'default'

    // API/data for end-user
    return {
        foo: foo
    }

    // private functions
    function parse() {

    }
}

module.exports = createFunkyParser