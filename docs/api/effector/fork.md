---
id: fork
title: fork
---

:::note since
effector 21.0.0
:::

```ts
fork(domain: Domain, { values?, handlers? }?): Scope
```

Creates a fully isolated instance of application.
The primary purpose of fork includes SSR (but is not limited to). Fork clones all the units and connections between them leading to completely independents copy of all logic defined within domain.

**Arguments**

1. `domain` ([_Domain_](Domain.md)): Original domain to clone, required
2. `values` Optional object with either a mapping from store sids ([_babel-plugin_](babel-plugin.md) is required to allow `sid` generation) to store values or a Map where keys are [_Store_](Store.md) objects and values contains initial store value
3. `handlers` Optional object with either a mapping from effect sids ([_babel-plugin_](babel-plugin.md) is required to allow `sid` generation) to effect handlers or a Map where keys are [_Effect_](Effect.md) objects and values contains handlers

**Returns**

[_Scope_](./Scope.md) object containing information about cloned domain

### Example

Create two instances with independent counter state

```js
import {
  createStore,
  createEvent,
  createDomain,
  forward,
  fork,
  allSettled,
} from 'effector'

const domain = createDomain()
const inc = domain.createEvent()
const dec = domain.createEvent()
const $counter = domain
  .createStore(0)
  .on(inc, value => value + 1)
  .on(dec, value => value - 1)

const scopeA = fork(domain)
const scopeB = fork(domain)

await allSettled(inc, {scope: scopeA})
await allSettled(dec, {scope: scopeB})

console.log($counter.getState()) // => 0
console.log(scopeA.getState($counter)) // => 1
console.log(scopeB.getState($counter)) // => -1
```

[Try it](https://share.effector.dev/0grlV3bA)

### Support Map in values

:::note since
effector 20.11.0
:::

```ts
fork(domain: Domain, { values?: Map<Store, any> , handlers? }?): Scope
```

### Support change effects

:::note since
effector 20.16.0
:::
Support for handlers to fork to change effect handlers for forked scope `(useful for testing)`

```js
//app
const app = createDomain()
const fetchFriends = app.createEffect<{limit: number}, string[]>({
  async handler({limit}) {
    /* some client-side data fetching */
    return []
  },
})
const user = app.createStore('guest')
const friends = app
  .createStore([])
  .on(fetchFriends.doneData, (_, result) => result)

/*
  test to ensure that friends value is populated
  after fetchFriends call
*/
const testScope = fork(app, {
  values: {
    [user.sid]: 'alice',
  },
  handlers: {
    [fetchFriends.sid]: () => ['bob', 'carol'],
  },
})

/* trigger computations in scope and await all called effects */
await allSettled(fetchFriends, {
  scope: testScope,
  params: {limit: 10},
})

/* check value of store in scope */
console.log(testScope.getState(friends))
// => ['bob', 'carol']
```
