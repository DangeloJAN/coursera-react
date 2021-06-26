import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './components/MainComponent';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
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
*
* Se implementa el "react-router-dom" para manejar el virtual dom y tambien el componente "BrowserRouter"
* para manejar las vistas dentro del aplicacion
*
*
*
*
*
*
*/
