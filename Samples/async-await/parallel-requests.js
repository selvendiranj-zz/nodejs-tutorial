// ********************************************************
// execute several asynchronous tasks at once and then use 
// their values at different places, you can do it easily 
// with async / await
// ********************************************************
async function executeParallelAsyncTasks() {
    const [valueA, valueB, valueC] = await Promise.all([functionA(), functionB(), functionC()])
    doSomethingWith(valueA)
    doSomethingElseWith(valueB)
    doAnotherThingWith(valueC)
}