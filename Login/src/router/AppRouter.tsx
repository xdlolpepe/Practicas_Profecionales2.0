import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Login";

export const AppRouter = () => {
  return (
        <Routes >
            <Route  path="/Login" element = {<Login/>}/>   
            <Route  path="/Registro " element = {<h1>aqui va el registro</h1>}/>   
        </Routes>
  )
  
}
export default AppRouter;