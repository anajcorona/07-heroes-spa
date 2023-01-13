import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../src/auth";
import { PrivateRoute } from "../../src/router/PrivateRoute";


describe('Pruebas en PublickRouter', () => {
  test('Debe de mostrar el children SI está autenticado', () => {
    Storage.prototype.setItem = jest.fn();

    const contextValue= {
        logged: true,
        user: {
            id:'123',
            name: 'Juan'
        }
    };
    render(
        <AuthContext.Provider value={ contextValue }>
            <MemoryRouter initialEntries={['']}>
                <PrivateRoute>
                    <h1>Ruta privada</h1>
                </PrivateRoute>
            </MemoryRouter>
        </AuthContext.Provider>
    )
    expect( screen.getByText('Ruta privada')).toBeTruthy;
    expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/');

  });

//   test('Debe de navegar si está autenticado', () => {

//     const contextValue= {
//         logged: true,
//         user: {
//             id:'123',
//             name: 'Strider'
//         }
//     };
//     render(
//         <AuthContext.Provider value={ contextValue }>
//             <MemoryRouter initialEntries={['/login']}>    
//                 <Routes>
//                     <Route path='login' element={ 
//                         <PublicRoute>
//                             <h1>Ruta publica</h1>
//                         </PublicRoute>} />

//                     <Route path='marvel' element={<h1>Página Marvel</h1>} />
//                 </Routes>
//             </MemoryRouter>
//         </AuthContext.Provider>
//     );
//     // expect( screen.getByText('Página Marvel')).toBeTruthy();

//   });
});