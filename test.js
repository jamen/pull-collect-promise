
const test = require('tape')
const { pull, map, values } = require('pull-stream')
const collectPromise = require('./lib/pull-collect-promise.js')

test('pull-collect-promise', t => {
    t.plan(1)

    const foo = pull(
        values([ 1, 2, 3, 4 ]),
        map(x => x * 3),
        collectPromise()
    )


    foo.then(results => {
        t.same(results, [ 3, 6, 9, 12 ])
    })
})
