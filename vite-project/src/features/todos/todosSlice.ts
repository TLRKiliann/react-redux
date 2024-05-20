import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type StateTodo = {
    id: number;
    todo: string;
};

type TodosState = StateTodo[];

const initialState: TodosState = [];

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        getTodos(state: TodosState) {
            return state;
        },
        addTodo: (state: TodosState, action: PayloadAction<{ todo: StateTodo }>) => {
            state.push(action.payload.todo);
        },
        updateTodo: (state: TodosState, action: PayloadAction<{ todoId: number; data: Partial<StateTodo> }>) => {
            return state.map((todo) =>
                todo.id === action.payload.todoId ? { ...todo, ...action.payload.data } : todo
            );
        },
        removeTodo: (state: TodosState, action: PayloadAction<{ todoId: number }>) => {
            return state.filter((todo) => todo.id !== action.payload.todoId);
        }
    }
});

export const { getTodos, addTodo, updateTodo, removeTodo } = todosSlice.actions;

export default todosSlice.reducer;
