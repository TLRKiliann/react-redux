import { configureStore } from '@reduxjs/toolkit';

// Définition des types d'état et d'action
type StateTypes = {
    counter: number;
}

type ActionTypes = {
    type: string;
}

// État initial du compteur
const initialCount: StateTypes = { counter: 0 };

// Définition des types d'action
const actionTypes = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement',
    RESET: 'reset'
};

// Actions pour incrémenter et décrémenter le compteur
export const actions = {
    /* increment: () => ({ type: actionTypes.INCREMENT }),
    decrement: () => ({ type: actionTypes.DECREMENT }) */
    increment: () => ({ type: 'increment' } as const),
    decrement: () => ({ type: 'decrement' } as const),
    reset: () => ({ type: 'reset' } as const)
}

// Réducteur pour gérer les actions et mettre à jour l'état
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

// Configuration du store avec le réducteur
export const store = configureStore({
    reducer
});

// Définition des types RootState et AppDispatch à partir du store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch