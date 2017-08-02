# Redux-Lonely: a simplistic redux example

Redux by itself. No react. No action-creators or connect. Just a simplistic store.

1. clone, yarn, and `yarn dev`
2. open the index.html
3. View the console. Watch it INCREMENT

OK BuT what

* The `src/index.js` has comments but:


```js
import {createStore} from 'redux';

// handleActions is our "reducer"
// it it what gets called when an action happens
// tldr: actions happen. Reducers decide what to do.
// reducers set the state
function handleActions(state=0, action){
  if (action.type === 'INCREMENT'){
    state += 1
  }
  return state
}

// We need to have a store.
// A store _stores_ our state
const store = createStore(handleActions)

// Optional: what should happen when we update our state
store.subscribe( () => {
  const state = store.getState()
  console.log("state", state)
})

// let's dispatch some actions
store.dispatch({ type: 'INCREMENT'})
store.dispatch({ type: 'INCREMENT'})
store.dispatch({ type: 'INCREMENT'})
```
