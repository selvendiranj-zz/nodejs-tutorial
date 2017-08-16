//Error Handling using promise
const makeRequest = () => {
    try {
        getJSON()
            .then(result => {
                // this parse may fail
                const data = JSON.parse(result)
                console.log(data)
            })
            // uncomment this block to handle asynchronous errors
            // .catch((err) => {
            //   console.log(err)
            // })
    } catch (err) {
        console.log(err)
    }
}

// Error handling in Async/await
const makeRequest = async() => {
    try {
        // this parse may fail
        const data = JSON.parse(await getJSON())
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}