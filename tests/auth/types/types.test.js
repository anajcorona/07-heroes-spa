import { types } from "../../../src/auth/types/types";

describe('Pruebas en AuthReducer', () => {
  test('Debe de regresar estos types', () => {
    console.log(types)
    expect(types).toEqual({
      login: '[Auth] Login',
      logout: '[Auth] Logout'
    });

  });
});