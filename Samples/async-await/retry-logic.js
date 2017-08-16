// ********************************************************
// Classical Async/Await programming using promise
// ********************************************************
function requestWithRetry(url, retryCount) {
    if (retryCount) {
        return new Promise((resolve, reject) => {
            const timeout = Math.pow(2, retryCount)

            setTimeout(() => {
                console.log('Waiting', timeout, 'ms')
                _requestWithRetry(url, retryCount)
                    .then(resolve)
                    .catch(reject)
            }, timeout)
        })
    } else {
        return _requestWithRetry(url, 0)
    }
}

function _requestWithRetry(url, retryCount) {
    return request(url, retryCount)
        .catch((err) => {
            if (err.statusCode && err.statusCode >= 500) {
                console.log('Retrying', err.message, retryCount)
                return requestWithRetry(url, ++retryCount)
            }
            throw err
        })
}

requestWithRetry('http://localhost:3000')
    .then((res) => {
        console.log(res)
    })
    .catch(err => {
        console.error(err)
    });


// ********************************************************
// Classical Async/Await programming using promise
// ********************************************************
function wait(timeout) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, timeout)
    })
}

async function requestWithRetry(url) {
    const MAX_RETRIES = 10
    for (let i = 0; i <= MAX_RETRIES; i++) {
        try {
            return await request(url)
        } catch (err) {
            const timeout = Math.pow(2, i)
            console.log('Waiting', timeout, 'ms')
            await wait(timeout)
            console.log('Retrying', err.message, i)
        }
    }
}