const { render, screen, fireEvent } = require("@testing-library/react")
const { LoginPage } = require("../../src/09-useContext/LoginPage");
const { UserContext } = require("../../src/09-useContext/context/UserContext");

describe('Pruebas en <LoginPage/>', () => 
{ 
    const user = {
        id: 123, 
        name:'Juan', 
        email:'Joaquin@gmail.com'
    };

    test('Debe de mostrar el componente sin el usuario', () => 
    {
         render(
            <UserContext.Provider value={{user: null}}>
                <LoginPage/>
            </UserContext.Provider>
         );
         const preTag = screen.getByLabelText('pre');
         expect(preTag.innerHTML).toBe('null')
    });
    test('Debe de llamar el setUser cuando se hace click en el boton', () => 
    { 
        const setUserMock = jest.fn();
        render(
            <UserContext.Provider value={{user: null, setUser: setUserMock}}>
                <LoginPage/>
            </UserContext.Provider>
         );
         const btn = screen.getByRole('button');
         fireEvent.click(btn);
         expect(setUserMock).toHaveBeenCalledWith(user);
         
    })
})  