# pull-collect-promise

[Pull-stream sink][1] that collects values into an array then returns a promise. allowing you to interop between pull-streams and promises. 

## Install

```sh
npm i pull-collect-promise
```

## Usage

### `collectPromise()`

Returns a sink stream that returns a promise.

```js
const { pull, map, values } = require('pull-stream')
const collectPromise = require('pull-collect-promise')

const foo = pull(
    values([ 1, 2, 3, 4 ]),
    map(x => x * 3),
    collectPromise()
)

foo.then(results => {
    t.same(results, [ 3, 6, 9, 12 ])
})
```

[1]: https://github.com/pull-stream/pull-stream/blob/master/docs/spec.md#sink-streams