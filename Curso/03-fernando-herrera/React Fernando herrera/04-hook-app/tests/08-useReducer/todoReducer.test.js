import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe('Pruebas  en el todoReducer', () => 
{ 
    const initialState = [{
        id:1,
        description: 'Demo Todo',
        done: false
    }];

    test('Debe de regresar el estado inicial', () => 
    { 
        const newState = todoReducer(initialState, {});
        expect( newState ).toBe( initialState );
    });
    
    test('Debe de agregar un todo', () => 
    { 
        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id:2,
                description: 'Nuevo Todo',
                done:false
            }
        };
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
    });
    test('Debe de eliminar un todo', () => 
    { 
        const action = {
            type: '[TODO] Remove Todo',
            payload: {
                id: 1,
                description: 'nuevo todo',
                done: false
            },
        };
        const newState = todoReducer(initialState, action);
        expect( newState.length ).toBe(0)
    });

    test('Debe de realizar el Toggle del todo', () => 
    { 
        const action = {
            type: '[TODO] Toggle Todo',
            payload: {
                id: 1,
                description: 'Toggle todo',
                done: false
            },
        };
        const newState = todoReducer(initialState, action);
        expect(newState[0].done).toBe(true);
    });
 })