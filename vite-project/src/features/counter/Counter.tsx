import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './counterSlice';

const Counter: React.FC = () => {
    const counter = useSelector((state: any) => state.counters.counter);
    const dispatch = useDispatch();

    // Increment
    const handleIncrement = () => {
        dispatch(increment(1));
    }

    // Decrement
    const handleDecrement = () => {
        dispatch(decrement(1));
    }

    // Reset
    const handleReset = () => {
        dispatch(reset());
    }

    return (
        <div>
            <h2>Counter: {counter}</h2>
            <button type="button" onClick={handleIncrement}>+</button>
            <button type="button" onClick={handleDecrement}>-</button>
            <button type="button" onClick={handleReset}>RESET</button>
        </div>
    );
};

export default Counter;
