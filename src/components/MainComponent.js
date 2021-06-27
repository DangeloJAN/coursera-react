import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { addComment, fetchDishes } from '../redux/ActionCreators';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Menu from './MenuComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import DishDetail from './DishdetailComponent';
import Footer from './FooterComponent';

const mapStateToProps = state => {
    return {
      dishes: state.dishes,
      comments: state.comments,
      promotions: state.promotions,
      leaders: state.leaders
    }
  }

const mapDispatchToProps = dispatch => ({
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
    fetchDishes: () => { dispatch(fetchDishes())}  
}); 


class Main extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchDishes();
      }

    render() {
        const HomePage = () => {
            return(
                <Home 
                    dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                    dishesLoading={this.props.dishes.isLoading}
                    dishesErrMess={this.props.dishes.errMess}
                    promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        }

        const DishWithId = ({match}) => {
            return(
                <DishDetail 
                    dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
                    isLoading={this.props.dishes.isLoading}
                    errMess={this.props.dishes.errMess}
                    comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
                    addComment={this.props.addComment}
              />
            );
        };

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
                    <Route path='/menu/:dishId' component={DishWithId} />
                    <Route exact path='/aboutus' component={() => <About leaders={this.props.leaders} />} />
                    <Route exact path='/contactus' component={Contact} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

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