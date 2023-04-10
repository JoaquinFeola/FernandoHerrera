const { render, screen } = require("@testing-library/react");
const { TodoApp } = require("../../src/08-useReducer/TodoApp");
const { useTodos } = require("../../src/hooks/useTodos");
jest.mock('../../src/hooks/useTodos');


describe('Pruebas en <TodoApp />', () => 
{  
    useTodos.mockReturnValue({
        todos: [
            {id:1, description: 'todo 1', done: false},
            {id:2, description: 'todo 2', done: true},
        ], 
        handleDeleteTodo:jest.fn() , 
        handleNewTodo: jest.fn(), 
        handleToggleTodo:jest.fn(), 
        todosCount: 2, 
        pendingTodosCount: 1,
    });

    test('Debe de mostrar el componente correctamente', () => 
    { 
        render(<TodoApp/>);
        // screen.debug();
        expect( screen.getByText('todo 1') ).toBeTruthy();
        expect( screen.getByText('todo 2') ).toBeTruthy();
        expect( screen.getByRole('textbox') ).toBeTruthy();
    });
});