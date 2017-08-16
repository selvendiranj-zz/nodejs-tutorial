// ********************************************************
// use map, filter and reduce with async functions, although 
// they behave pretty unintuitively. Try guessing what the 
// following scripts will print to the console
// ********************************************************

// map
function asyncThing(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(value), 100)
    })
}

async function main() {
    return [1, 2, 3, 4].map(async(value) => {
        const v = await asyncThing(value)
        return v * 2
    })
}

main()
    .then(v => console.log(v))
    .catch(err => console.error(err))

// filter
function asyncThing(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(value), 100)
    })
}

async function main() {
    return [1, 2, 3, 4].filter(async(value) => {
        const v = await asyncThing(value)
        return v % 2 === 0
    })
}

main()
    .then(v => console.log(v))
    .catch(err => console.error(err))

// reduce
function asyncThing(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(value), 100)
    })
}

async function main() {
    return [1, 2, 3, 4].reduce(async(acc, value) => {
        return await acc + await asyncThing(value)
    }, Promise.resolve(0))
}

main()
    .then(v => console.log(v))
    .catch(err => console.error(err))

// if you want to get your values, you'll need to unwrap them 
// by passing the returned array to a Promise.all:
main()
    .then(v => Promise.all(v))
    .then(v => console.log(v))
    .catch(err => console.error(err))


// Originally, you would first wait for all your promises 
// to resolve and then map over the values:
function main() {
    return Promise.all([1, 2, 3, 4].map((value) => asyncThing(value)))
}

main()
    .then(values => values.map((value) => value * 2))
    .then(v => console.log(v))
    .catch(err => console.error(err))