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
