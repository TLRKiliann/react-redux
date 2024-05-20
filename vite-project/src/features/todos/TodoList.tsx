import React, { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { getTodos, removeTodo, updateTodo, addTodo } from './todosSlice';

type TodoProps = {
    id: number;
    todo: string;
}

const TodoList: React.FC = () => {
    const todos = useAppSelector((state) => state.todos);
    const dispatch = useAppDispatch();
    const [newTodoText, setNewTodoText] = useState<string>('');
    const [updateText, setUpdateText] = useState<string>('');
    const [boolChange, setBoolChange] = useState<boolean>(false);

    useEffect(() => {
        dispatch(getTodos());
    }, [dispatch]);

    const handleAddTodo = () => {
        if (newTodoText.trim() !== '') {
            const newTodo: TodoProps = {
                id: todos.length + 1,
                todo: newTodoText.trim()
            };
            dispatch(addTodo({ todo: newTodo }));
            setNewTodoText('');
        }
    };
    const handleBool = () => {
        setBoolChange(!boolChange);
    }
    const handleRemoveTodo = (id: number) => {
        dispatch(removeTodo({ todoId: id }));
    };

    const handleUpdateTodo = (id: number) => {
        const updatedData = { todo: `Updated: ${id} ${updateText}` };
        dispatch(updateTodo({ todoId: id, data: updatedData }));
        setUpdateText('');
        setBoolChange(!boolChange);
    };

    const displayTodo: TodoProps[] = todos.map((t: TodoProps) => t);
    console.log(displayTodo, "display todo");

    return (
        <div>
            <h1>Todo List</h1>
            <input
                type="text"
                value={newTodoText}
                onChange={(e) => setNewTodoText(e.target.value)}
                placeholder="Enter new todo"
            />
            <button onClick={handleAddTodo}>Add Todo</button>
            <ul>
                {todos.map((todo: TodoProps) => (
                    <li key={todo.id}>
                        {todo.todo}
                        <button onClick={handleBool}>{boolChange ? "Hide" : "Change"}</button>
                        
                        {boolChange === true ? (
                            <>
                                <input type="text" value={updateText} 
                                    onChange={(e) => setUpdateText(e.target.value)} 
                                    placeholder="Change & update"
                                />
                                <button onClick={() => handleUpdateTodo(todo.id)}>Update</button>
                            </>
                        ) : (
                            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
                        )}
                        
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
