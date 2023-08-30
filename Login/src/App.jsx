import { useState } from 'react'
import './App.css'
import Login from './component/Login'
import Login2 from './component/Login2'


function App() {
//Estado:

const [valorInput, setValorInput] = useState('hola');

const onChange = (evento) => {
  const valor = evento.target.value;
  setValorInput(valor);
} 

const [gifs, setGifs] = useState();

const getGifs = async () => {
  const url = 'https://api.giphy.com/v1/gifs/search?api_key=n17gD7jKMSMqNzV5C7inG97OvPHlC49N&q=initial d'
  const response = await fetch(url);
  const data = await response.json();
  console.log(data)
}

const onSubmit = (evento) => {
  evento.prevetDefault()
  console.log(evento)
}




//JSX:
  return (
    <>
    <div>

      <form onSubmit={onSubmit}>
        <input value={valorInput} onChange={onChange}/>
      </form>

    </div>
    </>
  )
}

export default App
