
const { drain } = require('pull-stream')

function collectPromise () {
    const result = [] 

    const sink = drain(item => {
        result.push(item)
    })
    
    return function (read) {
        return new Promise((resolve, reject) => {
            sink((end, cb) => {
                read(null, (end, data) => {
                    if (end === true) {
                        cb(true)
                        resolve(result)
                    } else if (end) {
                        cb(end)
                        reject(end)
                    } else {
                        cb(null, data)
                    }
                })
            })
        })
    }
}

module.exports = collectPromise
