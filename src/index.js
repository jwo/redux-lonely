import {createStore, combineReducers} from 'redux';

function numberReducer(state=0, action){
  if (action.type === 'INCREMENT'){
    state += 1
  } else if (action.type === 'DECREMENT'){
    state -= 1
  } else if (action.type === 'SET'){
    state = action.newValue
  }
  return state
}
function lastAction(state, action){
  if (!state){
    return new Date();
  }
  return state
}

// We need to have a store.
// A store _stores_ our state
const reducer = combineReducers({
  number: numberReducer,
  lastAction
})
const store = createStore(reducer)

// Optional: what should happen when we update our state
store.subscribe( () => {
  const state = store.getState()
  console.log("state", state)

  document.querySelector("#important").textContent = state.number

})

// let's dispatch some actions
setTimeout(() => store.dispatch({ type: 'SET', newValue: 5}), 2000)
setTimeout(() => store.dispatch({ type: 'INCREMENT'}), 4000)
setTimeout(() => store.dispatch({ type: 'DECREMENT'}), 6000)
setTimeout(() => store.dispatch({ type: 'INCREMENT'}), 8000)
