import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type StateTypes = {
    counter: number;
};

const initialState: StateTypes = { counter: 0 };

const countersSlice = createSlice({
    name: 'counters',
    initialState,
    reducers: {
        increment: (state: StateTypes, action: PayloadAction<number>) => {
            state.counter += action.payload;
        },
        decrement: (state: StateTypes, action: PayloadAction<number>) => {
            state.counter -= action.payload;
        },
        reset: (state: StateTypes) => {
            state.counter = 0;
        }
    }
});

export const { increment, decrement, reset } = countersSlice.actions;

export default countersSlice.reducer;
