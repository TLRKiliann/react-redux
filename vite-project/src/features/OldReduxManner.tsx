import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from '../app/ExampleOfOldStore';

type CountActionTypes = {
    counter: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
}

export function ReduxComp({counter, increment, decrement, reset}: CountActionTypes) {
    return (
        <div>
        
            <h2>Counter: {counter}</h2>

            <button type="button" onClick={()=> increment()}>+</button>
            <button type="button" onClick={() => decrement()}>-</button>
            <button type="button" onClick={() => reset()}>RESET</button>
        </div>
    )
}

// update state by dispatching action increment into redux store
const mapStateToProps = (state: {counter: number}) => ({
    counter: state.counter
});

// map actions to dispatch
const mapDispatchToProps = (dispatch: any) => bindActionCreators({
    increment: actions.increment,
    decrement: actions.decrement,
    reset: actions.reset
}, dispatch);

// connect react-redux !
export default connect (
    mapStateToProps,
    mapDispatchToProps
) (ReduxComp)