import { configureStore } from '@reduxjs/toolkit';

type StateTypes = {
    counter: number;
}

type ActionTypes = {
    type: 'increment';
    payload: number;
}

const initialCount = { counter: 0 };

const actionTypes = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement'
};

export const actions = {
    increment: () => ({type: actionTypes.INCREMENT}),
    decrement: () => ({type: actionTypes.DECREMENT})
}

const reducer = (state: StateTypes = initialCount, action: ActionTypes) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return {...state, counter: state.counter + 1};
        case actionTypes.DECREMENT:
            return {...state, counter: state.counter - 1};
        default:
            return state;
    }
}

export const store = configureStore({
    reducer
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch