import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type StateTypes = {
    counter: number;
};

const initialState: StateTypes = { counter: 0 };

const countersSlice = createSlice({
    name: 'counters',
    initialState,
    reducers: {
        increment: (state, action: PayloadAction<number>) => {
            state.counter += action.payload;
        },
        decrement: (state, action: PayloadAction<number>) => {
            state.counter -= action.payload;
        },
        reset: (state) => {
            state.counter = 0;
        }
    }
});

export const { increment, decrement, reset } = countersSlice.actions;

export default countersSlice.reducer;
