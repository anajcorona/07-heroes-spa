import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { PublicRoute } from "../../src/router/PublicRoute";

describe('Pruebas en PublickRouter', () => {
  test('Debe de mostrar el children si no está autenticado', () => {

    const contextValue= {
        logged: false
    };
    render(
        <AuthContext.Provider value={ contextValue }>
            <PublicRoute>
                <h1>Ruta publica</h1>
            </PublicRoute>
        </AuthContext.Provider>
    )
    expect( screen.getByText('Ruta publica')).toBeTruthy;
  });

  test('Debe de navegar si está autenticado', () => {

    const contextValue= {
        logged: true,
        user: {
            id:'123',
            name: 'Strider'
        }
    };
    render(
        <AuthContext.Provider value={ contextValue }>
            <MemoryRouter initialEntries={['/login']}>    
                <Routes>
                    <Route path='login' element={ 
                        <PublicRoute>
                            <h1>Ruta publica</h1>
                        </PublicRoute>} />

                    <Route path='marvel' element={<h1>Página Marvel</h1>} />
                </Routes>
            </MemoryRouter>
        </AuthContext.Provider>
    );
    // expect( screen.getByText('Página Marvel')).toBeTruthy();

  });
});