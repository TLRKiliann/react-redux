# react-redux

Comparing react-redux with useReducer &amp; useContext

It's not always necessary to use Redux. It's depends of many things.

Local state (react) or global state (redux store) ?

Immutability: redux copy or make a new version of state.

If you wants access to data from components without relation between them, you can use `react-redux` or `useReducer & useContext` from React. It's a question of preference.

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

Store:

`app/store.ts`
`app/hooks.ts`

Counter:

`features/counter/counterSlice.ts`
`features/counter/Counter.tsx`

Todo:

`features/todos/todosSlice.tsx`
`features/todos/TodoList.tsx`

## useReducer of React only:

`components/SimpleReducer.tsx`

---

