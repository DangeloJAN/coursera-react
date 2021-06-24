import React, { Component } from 'react';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Footer from './FooterComponent';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId});
    }

    render() {
        return (
            <div>
                <Header />
                <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
                <Footer />
            </div>
        );
    }
}

export default Main;

/*
* El componente se creo para ser un componente CONTENEDOR y mejorar el rendimiento y funcionamiento
* de la aplicacion REACT JS, para ello se importaron los componentes "MenuComponent" y "DishdetailComponent"
* el constructor es el que manejara todos los estados por lo tanto se implamentan las props
* "dishes" y "selectedDish" que estaban en los componentes "App" y "MenuComponent" respectivamente
* se anade la funcion "onDishSelect". En el metodo render() al compopnente "Menu" se le pasa su respectiva
* prop y adicionalmente tambien como props la funcion "onClick" que recibira como retorno el id del plato
* seleccionado "dishId" que sera enviada por el mismo componente "Menu" y que se usara para cambiar el
* de la props "selectedDish"
* 
* luego con esta props "selectedDish" cuyo unico valor es el "id" se filtra para pasar ese plato al
* componete "DishDetail" y poder pasarlo como la props "dish"
*
* Tambien se trajo de componente "App" el estilo del renderizado
*
* Se agregaron los componentes de "Header" y "Footer" y se elimino el "Navbar" asi como el import de reactstrap
*/