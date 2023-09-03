import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Login";
import Registro  from "../Registro";

export const AppRouter = () => {
  return (
        <Routes >
            <Route  path="/Login" element = {<Login/>}/>   
            <Route  path="/Registro" element = {<Registro/>}/>   
        </Routes>
  )
  
}
export default AppRouter;