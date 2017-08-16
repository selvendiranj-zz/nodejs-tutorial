const makeRequest = () => {
    return promise1()
        .then(value1 => {
            // do something
            return promise2(value1)
                .then(value2 => {
                    // do something          
                    return promise3(value1, value2)
                })
        })
}

const makeRequest = () => {
    return promise1()
        .then(value1 => {
            // do something
            return Promise.all([value1, promise2(value1)])
        })
        .then(([value1, value2]) => {
            // do something          
            return promise3(value1, value2)
        })
}

const makeRequest = async() => {
    const value1 = await promise1()
    const value2 = await promise2(value1)
    return promise3(value1, value2)
}