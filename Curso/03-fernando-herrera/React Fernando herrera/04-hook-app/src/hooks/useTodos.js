import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => {
    return JSON.parse( localStorage.getItem( 'todos' ) ) || [];
};

export const useTodos = () => {

    const [todos, dispatchTodos] = useReducer( todoReducer, [], init );

    useEffect(() => {
        localStorage.setItem( 'todos', JSON.stringify( todos ) );

    }, [todos]);

    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        };
        dispatchTodos(action)
    };

    const handleDeleteTodo = ( todo ) => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: todo,
        };
        dispatchTodos(action);
    };

    const handleToggleTodo = ( todo ) => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: todo
        };
        dispatchTodos(action)
    };
    const todosCount = todos.length;
    const pendingTodosCount = todos.filter( todo => todo.done == false ).length

    return {
        handleDeleteTodo,
        handleToggleTodo,
        handleNewTodo,
        todos,
        todosCount,
        pendingTodosCount,
    };

};
