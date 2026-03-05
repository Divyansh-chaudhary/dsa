function myCombineReducers(reducers) {
  // 1. Get the keys (e.g., 'user', 'posts')
  const reducerKeys = Object.keys(reducers);

  // 2. Return the "Root Reducer" function
  return function (state = {}, action) {
    let hasChanged = false;
    const nextState = {};

    // 3. Loop through each reducer
    for (let i = 0; i < reducerKeys.length; i++) {
      const key = reducerKeys[i]; // (e.g., 'user', 'posts')
      const reducer = reducers[key]; // reducer function

      // Get the current slice of state for this key
      const previousStateForKey = state[key];

      // Execute the child reducer
      const nextStateForKey = reducer(previousStateForKey, action);

      // Update the new state object
      nextState[key] = nextStateForKey;

      // 4. Optimization: Check if state actually changed
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    // 5. If nothing changed, return the old state (Referential Integrity)
    return hasChanged ? nextState : state;
  };
}

const rootReducer = myCombineReducers({
  counter: (state = 0, action) => (action.type === "INC" ? state + 1 : state),
  user: (state = null, action) => state,
});

// The state will now look like: { counter: 0, user: null }
