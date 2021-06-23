import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

class Menu extends Component {

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div  className="col-12 col-md-5 m-1">
                <Card key={dish.id}
                  onClick={() => this.props.onClick(dish.id)}>
                  <CardImg src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }
}

export default Menu;

/*
* En el metodo render() se define la constante "menu" que se usara para mapear el JSON
* el objeto JSON es recibido por el padre "App.js" pormedio de la props "this.props.dishes"
* y se asigna mediante "const menu = this.props.dishes"
* para el mapeo se necesita una "key" a la cual se le debe asignar una valor unico, el cual viene dado
* mediante el parametro "dish" de la funcion map(), el cual sera "dish.id"
* luego en el objeto se utiliza el controlador de eventos "onClick" el cual controlara la funcion 
* onDishSelect() al momento en el que usuario interactue con la aplicacion.
* 
* Al metodo onDishSelect se le pasara como parametro, el parametro dish de la funcion map()
* luego se construye la funcion "onDishSelect()" cuyo argumento es "dish" (por convencion, ya que puede tener otro nombre)
* para que realice el cambio de estado de la prop "selectedDish" al valor del parametro recibido por la funcion
*
* NOTA: Si se quiere se puede pasar como parametro a la funcion render el parametro "dishes"
* y en vez de asignarle "this.props.dishes" al "const menu", se le puede asignar directamente "dishes"
*/

/*********************************************************************************************************/

/*
* Se convirtio en un componente completamente REPRESENTACIONAL para que sea mejor el funcionamiento del mismo
* para ello se elimino: el constructor, la funcion "onDishSelect" y el bloque que 
* contenia al componente "DishDetail" junto con el import del mismo, los cuales se pasaron
* al nuevo componente que funcionara como componente CONTENEDOR de los componente representativos
* el cual es "MainComponent"
*
*
*
*
*
*
*/