import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [name, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [apellido, setSurname] = useState('');
  const [dni, setDni] = useState('');
  const [direccion, setAddressd] = useState('');
  const [genero, setGenero] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/projects/', {
        name: name,
        password: password,
        apellido: apellido,
        dni: dni,
        direccion: direccion,
        genero: genero,
      });

      console.log(response.data);

      if (response.data) {
        setErrorMessage('');
        setRegistrationSuccess(true);
      } else {
        setErrorMessage('Hubo un error en el registro');
        setRegistrationSuccess(false);
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('Hubo un error al intentar registrarse');
      setRegistrationSuccess(false);
    }
  };

  return (
    <div className="container">
      <h2>Registrarse</h2>
      <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nombre:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setUser(e.target.value)}
                        />
                </div>

        <div className="form-group">
            <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
        </div>


        <div className="form-group">
                <label>Apellido:</label>
                    <input
                        type="text"
                        value={apellido}
                        onChange={(e) => setSurname(e.target.value)}
                    />
        </div>

        <div className="form-group">
                <label>dni:</label>
                    <input
                        type="number"
                        value={dni}
                        onChange={(e) => setDni(e.target.value)}
                    />
        </div>  

        <div className="form-group">
            <label>Direccion:</label>
                    <input
                        type="text"
                        value={direccion}
                        onChange={(e) => setAddressd(e.target.value)}
                    />
        </div>

        <div className="form-group">
            <label>Genero:</label>
                <input
                    type="number"
                    value={genero}
                    onChange={(e) => setGenero(e.target.value)}
                />
        </div>
            <button type="submit">Registrarse</button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {registrationSuccess && <p className="success">Registro exitoso</p>}
    </div>
  );
};

export default App;