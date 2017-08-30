function createFunkyParser(opt) {
    // optional params
    opt = opt || {}

    // private data
    var foo = opt.foo || 'default'

    // private functions
    function parse() {
        console.log('inside parse');
    }

    // API/data for end-user`
    return {
        foo: foo,
        parse: parse
    }
}

module.exports = createFunkyParser