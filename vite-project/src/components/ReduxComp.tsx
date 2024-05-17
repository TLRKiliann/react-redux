//import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actions } from './store';

type CountActionTypes = {
    counter: number;
    increment: () => void;
    decrement: () => void;
}

export function ReduxComp({counter, increment, decrement}: CountActionTypes) {
    return (
        <div>
        
            <span>Counter: {counter}</span>

            <button type="button" onClick={()=> increment()}>+</button>
            <button type="button" onClick={() => decrement()}>-</button>
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
const mapDispatchToProps = () => ({
    increment: () => actions.increment(),
    decrement: () => actions.decrement()
});

// connect react-redux !
export default connect (
    mapStateToProps,
    mapDispatchToProps
) (ReduxComp)