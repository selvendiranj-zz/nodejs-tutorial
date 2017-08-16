// ********************************************************
// Solution 1: The .then Christmas tree
// ********************************************************
function executeAsyncTask() {
    return functionA()
        .then((valueA) => {
            return functionB(valueA)
                .then((valueB) => {
                    return functionC(valueA, valueB)
                })
        })
}

// ********************************************************
// Solution 2: Moving to a higher scope
// ********************************************************
function executeAsyncTask() {
    let valueA
    return functionA()
        .then((v) => {
            valueA = v
            return functionB(valueA)
        })
        .then((valueB) => {
            return functionC(valueA, valueB)
        })
}

// ********************************************************
// Solution 3: The unnecessary array
// ********************************************************
function executeAsyncTask() {
    return functionA()
        .then(valueA => {
            return Promise.all([valueA, functionB(valueA)])
        })
        .then(([valueA, valueB]) => {
            return functionC(valueA, valueB)
        })
}

// ********************************************************
// Solution 4: Write a helper function
// ********************************************************
const converge = (...promises) => (...args) => {
    let [head, ...tail] = promises
    if (tail.length) {
        return head(...args)
            .then((value) => converge(...tail)(...args.concat([value])))
    } else {
        return head(...args)
    }
}

functionA(2)
    .then((valueA) => converge(functionB, functionC)(valueA));


// ********************************************************
// using async/await our problems are magically gone
// ********************************************************
async function executeAsyncTask() {
    const valueA = await functionA()
    const valueB = await functionB(valueA)
    return function3(valueA, valueB)
}