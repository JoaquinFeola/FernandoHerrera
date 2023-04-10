const { render, screen } = require("@testing-library/react");
const { MainApp } = require("../../src/09-useContext/MainApp");
const { BrowserRouter, MemoryRouter } = require("react-router-dom");

describe('Pruebas en <MainApp/>', () => 
{ 
    test('Debe de mostrar el homePage', () => 
    { 
        render(
            <MemoryRouter>
                <MainApp/>
            </MemoryRouter>
        );
        expect(screen.getByText('HomePage')).toBeTruthy();
    }); 
    test('Debe de mostrar el loginPage', () => 
    { 
        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp/>
            </MemoryRouter>
        );

        expect(screen.getByText('LoginPage')).toBeTruthy();
    });
    test('Debe de mostrar el aboutPage', () => 
    { 
        render(
            <MemoryRouter initialEntries={['/about']}>
                <MainApp/>
            </MemoryRouter>
        );

        expect(screen.getByText('AboutPage')).toBeTruthy();
    });  

});