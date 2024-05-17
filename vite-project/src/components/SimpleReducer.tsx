import { useReducer } from 'react'


type StateTypes = {
    count: number;
}

type ActionTypes = {
    type: 'increment' | 'decrement';
    payload: number;
}

type ResetTypes = {
    type: 'reset';
}

type CounterType = ActionTypes | ResetTypes;


const initialCount = {count: 0};

const reducer = (state: StateTypes, action: CounterType) => {
    switch (action.type) {
        case 'increment':
            return {count: state.count + action.payload};
        case 'decrement':
            return {count: state.count - action.payload};
        case 'reset':
            return initialCount;
        default:
            return state;
    }
}

export default function ReducerContext() {
    const [state, dispatch] = useReducer(reducer, initialCount);
    return (
        <>
            <h2>Count: {state.count}</h2>
            <button type="button" onClick={() => dispatch({type: 'increment', payload: 10})}>+</button>
            <button type="button" onClick={() => dispatch({type: 'decrement', payload: 10})}>-</button>
            <button type="button" onClick={() => dispatch({type: 'reset'})}>Reset</button>   
        </>
    )
}
