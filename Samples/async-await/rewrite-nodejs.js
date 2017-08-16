/*
Rewriting callback - based Node.js applications

Async functions
return a Promise by
default, so you can rewrite any callback based
function to use Promises, then await their resolution.You can use the util.promisify
function in Node.js to turn callback - based functions to
return a Promise - based ones.

Rewriting Promise - based applications

Simple.then chains can be upgraded in a pretty straightforward way, 
so you can move to using async / await right away.

*/

function asyncTask() {
    return functionA()
        .then((valueA) => functionB(valueA))
        .then((valueB) => functionC(valueB))
        .then((valueC) => functionD(valueC))
        .catch((err) => logger.error(err))
}

// will turn into
async function asyncTask() {
    try {
        const valueA = await functionA()
        const valueB = await functionB(valueA)
        const valueC = await functionC(valueB)
        return await functionD(valueC)
    } catch (err) {
        logger.error(err)
    }
}