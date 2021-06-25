import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';

function RenderMenuItem({ dish, onClick }) {
    return(
        <Card>
            <Link to={`/menu/${dish.id}`} >
                <CardImg src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    )
}

const Menu = (props) => {
    const menu = props.dishes.map((dish) => {
        return (
          <div  key={dish.id} className="col-12 col-md-5 m-1">
              <RenderMenuItem dish={dish} onClick={props.onClick} />
          </div>
        );
    });
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Menu</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Menu</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
                {menu}
            </div>
        </div>
    );   
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
* el cual es "MainComponent", adicionalmente la funcion "onClick" es recibida como props y que va
* a devolver el "id" del plato seleccionado
*
* Se pasa a realizar el cambio de componente de CLASE a componente FUNCIONAL ya que no maneja estados
* Se elimina lo siguiente: la clase "Compnent" del import de react, la declaracion de clase,
* la declaracion del render()
* Se pueden construir componentes funcionales de varias maneras pero por los momentos se veran dos 
*
* La primera para cada plato del Menu 
* Se declara de la siguiente manera: function RenderMenuItem (props) {} o
* function RenderMenuItem ({ dish, onClick }) {} por destructuring si conoces las props a recibir
* rederizara la vista indidual de las tarjetas de los platos
* En la funcion "onClick" de "Card" se elimina "this.props." a "this.props.onClick(dish.id)" 
* y se deja solamente "onClick(dis.id)" porque la propiedad se esta pasando mediante destructuring  
*
* La segunda para la vista general de todos los platos
* Se declara de la siguiente manera: 
* la funcion se declara como constante, se la asignan las "props" de forma general y luego se usa   
* la funcion "=>{}". dentro de las llaves se le elimina "this." a "this.props.dishes.map()" y se
* deja "props.dishes.map()" por que le estan pasando las props en la declaracion de la funcion
*
* Para devolver la funcionabilidad del componente "DishDetail" se eliminaron las funciones "onClick" 
* de las componentes y se importa "Link" d "react-router-dom", y esto ultimo se realiza para pasar las
* del plato seleccionado como parametros. La etiqueta Link se usa de la siguiente
* forma: <Link to={`/menu/${dish.id}`} >
*
* Luego se anaden migas de pan atraves de los componente "Breadcrumb" y "BreadcrumbItem" ene l componente
* funcional "Menu"
*
*
*
*
*
*
*/
