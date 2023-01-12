import { Route, Routes } from "react-router-dom";
import { HeroesRoutes } from "../heroes";
import { LoginPage } from "../auth";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <>
        <Routes>
            {/* Otra manera de las rutas pero generales(no privadas) */}
            {/* <Route path="login" element={ <LoginPage/> } /> */}
            {/* <Route path="/*" element={ <HeroesRoutes/> } /> */}

            {/* Dos ejemplos de como utilizar las rutas y subrutas */}
            <Route path="login" element={
              <PublicRoute>
                <Routes>
                  <Route path='/*' element={ <LoginPage/>} />
                </Routes>
              </PublicRoute> } />

            <Route path="/*" element={
              <PrivateRoute>
                <HeroesRoutes/>
              </PrivateRoute> } />
        </Routes>
    </>
  )
}
