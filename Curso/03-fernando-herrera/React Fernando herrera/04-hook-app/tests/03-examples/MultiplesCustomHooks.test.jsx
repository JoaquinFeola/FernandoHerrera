import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en MultipleCustomHooks', () => 
{ 
    const mockIncrement =  jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement,
    });

    beforeEach(() => {
        jest.clearAllMocks()
    }); 

    test('Debe de mostrar el componente por defecto', () => 
    { 
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

         render( <MultipleCustomHooks/> );
         expect(screen.getByText('Loading...'));
         expect(screen.getByText('Breaking bad quotes'));
         const nextButton = screen.getByRole('button', {name: 'Next quote'});
         expect( nextButton.disabled ).toBeTruthy();
         screen.debug();
    }); 
    test('Debe de mostar un Quote', () => 
    {  
        useFetch.mockReturnValue({
            data: [{ author: 'Fernando', quote: 'Hola mundo' }],
            isLoading: false,
            hasError: null
        });


        render( <MultipleCustomHooks /> );
        expect( screen.getByText('Hola mundo') ).toBeTruthy();
        expect( screen.getByText('Fernando') ).toBeTruthy();
        const nextQuote = screen.getByRole('button', {name:'Next quote'});
        expect(  nextQuote.disabled ).toBeFalsy();
        // screen.debug();
    });
    test('Debe de  llamar la funcion de incrementar', () => 
    {  

        useFetch.mockReturnValue({
            data: [{ author: 'Fernando', quote: 'Hola mundo' }],
            isLoading: false,
            hasError: null
        });

        render( <MultipleCustomHooks /> );

        const nextQuote = screen.getByRole('button', {name:'Next quote'});
        fireEvent.click( nextQuote );
        expect(mockIncrement).toHaveBeenCalled();
    });
});