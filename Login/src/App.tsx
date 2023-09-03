import React  from 'react';
//importando estilos css
import './App.css'
//importando el archivo login
import Login from './Login.jsx'
import {AppRouter} from "./router/AppRouter";
//importar bootstrap
import 'bootstrap/dist/css/bootstrap.css';
//importar router
import { BrowserRouter as Router, Route} from 'react-router-dom';



const App = () => {
//Estado:

//JSX:
  return (

      <React.Fragment>

                <AppRouter/>

      </React.Fragment>

  );
}

export default App
