# react-redux

Comparing react-redux with useReducer &amp; useContext

It's not always necessary to use Redux. It's depends of many things.

Local state (react) or global state (redux store) ?

If you wants access to data from components without relation between them, you can use redux or useReducer & useContext from React. It's a question of preference.

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

`components/ReduxComp.tsx`

ReduxComp is called from App.tsx and require store:

```
import { actions } from './store';
```



