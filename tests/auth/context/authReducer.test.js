import { authReducer } from "../../../src/auth/context/authReducer";
import { types } from "../../../src/auth/types/types";

describe('Pruebas en AuthReducer', () => {

    test(' Debe de regresar el estado por defecto', () => {
        const newState = authReducer( { logged: false }, {} );
        expect( newState ).toEqual( { logged: false });
    });
    test('Debe de (login) llamar el login autenticar y establecer el usuario', () => {
        const action = {
            type: types.login,
            payload: {
                name: 'Juan',
                id: '123'
            }
        };
        const state = authReducer({ logged: false }, action);
        expect( state ).toEqual({
            logged: true,
            user: action.payload
        });
    });
    test('Debe de (logout) llamar el logout autenticar y establecer el usuario', () => {

        const state = {
            logged: true,
            user: { id: '123', name: 'Jesus'}
        };
        const action = { type: types.logout };
        const newState = authReducer( state, action );
        expect( newState ).toEqual( { logged: false } );
    });

});