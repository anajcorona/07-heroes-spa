import { Navigate, Route, Routes } from "react-router-dom";

import { DcPage, MarvelPage } from "../heroes";
import { LoginPage } from "../auth";
import { Navbar } from "../ui";

export const AppRouter = () => {
  return (
    <>
        <Navbar></Navbar>
        <Routes>
            <Route path="Marvel" element={ <MarvelPage/> } />
            <Route path="dc" element={ <DcPage/> } />
            <Route path="login" element={ <LoginPage/> } />
            <Route path="/" element={ <Navigate to="/marvel"/> } />


        </Routes>
    </>
  )
}
