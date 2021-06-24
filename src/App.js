import React, { Component } from 'react';
import './App.css';
import Main from './components/MainComponent';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;

/*
* Como es el componente padre tiene como propiedad el JSON que sera pasado a sus hijos mediante
* la prop "dishes" por medio del estado "this.state.dishes"
*/

/*********************************************************************************************************/

/*
* Se convirtio en componente CONTENEDOR para la el componente "MainComponent" 
* para ello se elimino el construcctor que tenia la props "dishes" asi como el impor del JSON
* y el resto del estilo en el render()
*/
