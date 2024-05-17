//import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions } from './store';

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
// If you don't use TypeScript
/* ReduxComp.protoTypes =  {
    counter: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired
} */

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