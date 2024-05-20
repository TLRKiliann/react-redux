import { configureStore } from '@reduxjs/toolkit';

type StateTypes = {
    counter: number;
}

type ActionTypes = {
    type: string;
}

const initialCount: StateTypes = { counter: 0 };

const actionTypes = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement',
    RESET: 'reset'
};

export const actions = {
    increment: () => ({ type: 'increment' } as const),
    decrement: () => ({ type: 'decrement' } as const),
    reset: () => ({ type: 'reset' } as const)
}

// Manage actions & update state
const reducer = (state: StateTypes = initialCount, action: ActionTypes): StateTypes => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return { ...state, counter: state.counter + 1 };
        case actionTypes.DECREMENT:
            return { ...state, counter: state.counter - 1 };
        case actionTypes.RESET:
            return initialCount;
        default:
            return state;
    }
}

// createStore is deprecated & has been replaced by configureStore
export const store = configureStore({
    reducer
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch