const { render, screen, fireEvent } = require("@testing-library/react");
const { TodoItem } = require("../../src/08-useReducer/TodoItem");

describe('Pruebas en el componente <TodoItem />', () => 
{ 
    const todo = {
        id: 1,
        description: 'Piedra del alma',
        done: false
    };
    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();
    beforeEach(() => jest.clearAllMocks());

    test('Debe de mostrar el todo pendiente de completar', () => 
    { 
        render(
            <TodoItem 
                todo={todo} 
                onToggleTodo={onToggleTodoMock} 
                onDeleteTodo={onDeleteTodoMock} 
            />
        );
        const liElement = screen.getByRole('listitem');
        expect( liElement.className ).toBe('list-group-item d-flex justify-content-between');
        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('align-self-center')
        screen.debug();
        
    });
    test('Debe de mostrar el Todo completado', () => 
    { 
        todo.done = true;
        render(
            <TodoItem 
                todo={todo} 
                onToggleTodo={onToggleTodoMock} 
                onDeleteTodo={onDeleteTodoMock} 
            />
        );
        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('align-self-center')
        screen.debug(); 
    });
    test('El span debe de llamar al ToggleTodo cuando se hace clcik', () => 
    { 
        render(
            <TodoItem 
                todo={todo} 
                onToggleTodo={onToggleTodoMock} 
                onDeleteTodo={onDeleteTodoMock} 
            />
        );
        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement);
        expect( onToggleTodoMock ).toHaveBeenCalledWith(todo)
    });
    test('El boton debe de llamar el DeleteTodo', () => 
    { 
        render(
            <TodoItem 
                todo={todo} 
                onToggleTodo={onToggleTodoMock} 
                onDeleteTodo={onDeleteTodoMock} 
            />
        );
        const buttonElement = screen.getByRole('button', {name:'Borrar'});
        fireEvent.click(buttonElement);
        expect( onDeleteTodoMock ).toHaveBeenCalledWith(todo);
    });

})