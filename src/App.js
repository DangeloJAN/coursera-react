import React, { Component } from 'react';
import './App.css';
import Main from './components/MainComponent';
import { DISHES } from './shared/dishes';

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