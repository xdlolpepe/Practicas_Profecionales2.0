import React, { useState } from 'react'; // Importa las funciones 'React' y 'useState' desde sus respectivos módulos
import axios from 'axios'; // Importa el módulo 'axios' para hacer solicitudes HTTP
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

// Importa una hoja de estilos CSS llamada 'App.css'

const App = () => {
  // Define un componente funcional llamado 'App'
  const [name, setUser] = useState(''); // Declara un estado 'user' con su función 'setter' 'setUser', inicializado como cadena vacía
  const [password, setPassword] = useState(''); // Declara un estado 'password' con su función 'setter' 'setPassword', inicializado como cadena vacía
  const [errorMessage, setErrorMessage] = useState(''); // Declara un estado 'errorMessage' con su función 'setter' 'setErrorMessage', inicializado como cadena vacía
  const [getOk, setgetOkey] = useState(''); // Declara un estado 'getOk' con su función 'setter' 'setgetOkey', inicializado como cadena vacía

  const handleSubmit = async (e) => {
    // Declara una función 'handleSubmit' que se ejecuta cuando el formulario se envía
    e.preventDefault(); // Previene el comportamiento de envío predeterminado del formulario
    //console.log(user, password); // Imprime en la consola los valores actuales de 'user' y 'password'

    try {
      const response = await axios.get(
        `http://localhost:4000/projects/${name}/${password}`
      );
      // Realiza una solicitud GET a una URL formada con los valores de 'user' y 'password'
      console.log(response.data); // Imprime en la consola los datos recibidos como respuesta

      if (response.data) {
        setErrorMessage('');
        setgetOkey(true); // Si los datos de respuesta existen, establece 'getOk' como verdadero (true)
      } else {
        setErrorMessage(true);
        setgetOkey(false); // Si los datos de respuesta no existen, establece un mensaje de error
      }
    } catch (error) {
      console.error(error); // Si ocurre un error en la solicitud, imprime el error en la consola
      setErrorMessage('Hubo un error al intentar iniciar sesión');
      setgetOkey(false); // Establece un mensaje de error
    }
  };

  return (
    <div className="container">
    

      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
                  <div className="form-group">
                      <label>Usuario:</label>
                            <input
                              type="text"
                              value={name}
                              onChange={(e) => setUser(e.target.value)}
                            />
                  </div>

                  <div className="form-group">
                
                    <label>Contraseña:</label>
                            <input
                              type="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                  </div>

        <button type="submit">Iniciar sesión</button>

      </form>

            {errorMessage && (
                  <div className="alert alert-danger" role="alert">
                  Error al iniciar secion: no se encuentra tu usuario
                  </div>
            )}
     

            {getOk && (
                  <div className="alert alert-success" role="alert">
                    si esta registrado
                  </div>
              )}
    </div>
    
  );
};

export default App; 