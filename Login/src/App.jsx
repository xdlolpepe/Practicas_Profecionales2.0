import { useState } from 'react'
import './App.css'
import Login from './component/Login'
import Login2 from './component/Login2'


function App() {
//Estado:

//JSX:
  return (
    <>
    <div>
      <h1>Login</h1>
      <p>Nombre</p>
      <Login></Login>
      <p>Contraseña</p>
      <Login2></Login2>
    </div>
    </>
  )
}

export default App
