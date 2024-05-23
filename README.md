# react-redux

Comparing react-redux with useReducer &amp; useContext

It's not always necessary to use Redux. It's depends of many things.

Local state (react) or global state (redux store) ?

**Immutability**: Redux expects that all state updates are done immutably. We'll look at where and how this is important a bit later, as well as some easier ways to write immutable update logic.

**Reducer**: A reducer is a function that receives the current state and an action object, decides how to update the state if necessary, and returns the new state: (state, action) => newState. You can think of a reducer as an event listener which handles events based on the received action (event) type.

If you wants to access data from components without relation between them, you can use `react-redux` or `useReducer & useContext` from React. It's a question of preference.

## Lib installed

`$ pnpm add redux react-redux`

`$ pnpm add @reduxjs/toolkit`

## Installation

`$ git clone ...`

`$ cd vite-project`

`$ pnpm install`

`$ pnpm run dev`

## Tutorial

`main.tsx`

To access to store, you need to add a Provider as shown below:

```
import {Provider} from 'react-redux'
import {store} from './components/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
```

---

## Example of old manner to use Redux with React:

- `app/ExampleOfOldStore.tsx`
- `features/OldReduxManner.tsx`

---

## How to use react-redux

- Files:

**Store:**

- `app/store.ts`
- `app/hooks.ts`

**Counter:**

- `features/counter/counterSlice.ts` (actions)
- `features/counter/Counter.tsx`

**Todo:**

- `features/todos/todosSlice.tsx` (actions)
- `features/todos/TodoList.tsx`

**Initial setup:**

    A Redux store is created using a root reducer function.
    The store calls the root reducer once, and saves the return value as its initial state.

**Updates:**

    Something happens in the app, such as a user clicking a button.
    The app code dispatches an action to the Redux store, like dispatch({type: 'counter/increment'}).
    The store (runs & saves state) runs the reducer function again with the previous state and the current action, and saves the return value as the new state.
    The store notifies all parts of the UI that are subscribed that the store has been updated.
    Each UI component that needs data from the store checks to see if the parts of the state they need have changed.
    Each component that sees its data has changed forces a re-render with the new data, so it can update what's shown on the screen.

Store/State => UI => events => dispatch => Actions => Reducer/Store/new State !

---

- store.ts

The current Redux application state lives in an object called the store .

The store is created by passing in a reducer, and has a method called getState that returns the current state value:

import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({ reducer: counterReducer })

console.log(store.getState())
// {value: 0}

- Dispatch

The Redux store has a method called dispatch. The only way to update the state is to call store.dispatch() and pass in an action object. The store will run its reducer function and save the new state value inside, and we can call getState() to retrieve the updated value:

store.dispatch({ type: 'counter/increment' })

console.log(store.getState())
// {value: 1}

```
(store.ts)

import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/todos/todosSlice';
import counterReducer from '../features/counter/counterSlice';

const store = configureStore({
    reducer: {
        todos: todosReducer,
        counters: counterReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
```

- Selectors

Selectors are functions that know how to extract specific pieces of information from a store state value. As an application grows bigger, this can help avoid repeating logic as different parts of the app need to read the same data:

const selectCounterValue = state => state.value

const currentValue = selectCounterValue(store.getState())
console.log(currentValue)
// 2

- Slice

Redux Toolkit has a function called createSlice, which takes care of the work of generating action type strings, action creator functions, and action objects.

---

## useReducer of React only:

- reducer:

just a reducer from React for a demo.

`components/SimpleReducer.tsx`

- useContext:

useContext required another application because it's not possible to add a `context Provider` with a `store Provider`. But we can use it with a reducer normaly setup in same file.

---

References: https://redux.js.org/

Enjoy it ! :koala:
