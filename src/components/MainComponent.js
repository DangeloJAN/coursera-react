import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { COMMENTS } from '../shared/comments';
import { DISHES } from '../shared/dishes';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import DishDetail from './DishdetailComponent';
import Footer from './FooterComponent';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: COMMENTS,
            dishes: DISHES,
            leaders: LEADERS,
            promotions: PROMOTIONS
        };
    }

    render() {
        const HomePage = () => {
            return(
                <Home 
                    dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        }

        const DishWithId = ({match}) => {
            return(
                <DishDetail
                    dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
                    comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
                />
            );
        };

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
                    <Route path='/menu/:dishId' component={DishWithId} />
                    <Route exact path='/contactus' component={Contact} />
                    <Redirect to="/home" />
                </Switch>
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
*
* Al implementar "react-router-dom" se realizaron los siguientes cambios:
* Se anadio los import de "react-router-dom" y el nuevo componente funcional "Home"
* Se elimino: la props "selectedDish: null", la funcion "onDishSelect", los componentes "Menu" y "DishDetail"
* Se agrego los componetes: "Switch" que es el manejara los cambios de ruta, el "Route" que es
* el encargado de contener las rutas de las diferentes vistas y "Redirect" que redirecciona al "home" 
* si nada coincide. la propiedad "path" y "exact path" especifican las rutas relativas y absolutas
* la propiedad component especifican los componentes duenos de las rutas, si el componente no recibe
* props se colo asi "{HomePage}" y se le desea pasar prop al componente se coloca
* de la siguiente manera "{() => <Menu dishes={this.state.dishes} />}"
*
*
*
*
*
*
*/