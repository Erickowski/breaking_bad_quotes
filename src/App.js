import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Frase({frase}) {
  return(
    <div className="frase">
      <h1>{frase.quote}</h1>
      <p>- {frase.author}</p>
    </div>
  )
}


function App() {
  const [frase, obtenerFrase] = useState({});
  
  const consultarAPI = async () => {
    const resultado = await axios('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    //Agregar el resultado de la API al state
    obtenerFrase(resultado.data[0]);
  }

  //Consultar a una REST API
  useEffect(
    () => {
      consultarAPI();
    }, [] //asi evitamos multiples llamados
  )
  return(
    <div className="contenedor">
      <div className="nulo">

      </div>
      <Frase
        frase={frase}
      />
      <div className="boton">
        <button type="button" onClick={consultarAPI}>Generar nueva</button>
      </div>
      
    </div>
  )
}

export default App;