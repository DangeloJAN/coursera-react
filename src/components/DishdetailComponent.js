import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody, CardTitle, ListGroup, ListGroupItem,
        Breadcrumb, BreadcrumbItem } from 'reactstrap';

function RenderComments({comments}) {
    return (
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardBody>
                    <CardTitle>
                        <h4>Comments</h4>
                    </CardTitle>
                    <ListGroup>
                        {comments.map((comment) => {
                            return (
                                <ListGroupItem key={comment.id}>
                                    <CardText>
                                        <p>{comment.comment}</p>
                                        <p>-- {comment.author}, &nbsp;
                                        {new Intl.DateTimeFormat("en-US", {
                                            year: "numeric",
                                            month: "short",
                                            day: "2-digit",
                                        }).format(new Date(Date.parse(comment.date)))}
                                        </p>
                                    </CardText>
                                </ListGroupItem>
                            );
                        })};
                    </ListGroup>        
                </CardBody>
            </Card>
        </div>
    );
}

function RenderDish({dish}) {
    return(
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

const DishDetail = (props) => {
    if(props.dish != null)
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <RenderDish dish={props.dish}/>
                    <RenderComments comments={props.comments}/>
                </div>
            </div>
        );
    else
        return(
            <div></div>
        );
}

export default DishDetail;

/*
* En el metodo render se compara el estado de la props "dish" mediante "this.props.dish"
* luego se les pasalos respectivos parametros a cada funcion por medio de "this.props.dish" y
* "this.props.dish.comments" respectivamente, luego se construyen las funciones con los paraemtros
* respectivos "dish" y "comments"
* en donde "comments" es el parametro que se usa para recorrer cada uno de los atributos por metodo map().
* y "dish" es el que usa seleccionar cada uno de los atributos del JSON
* 
* Como no hay cambio de estado no es necesario this.state = {}
* ya los cambios de estado los realiza el componente padre "MenuComponent".
*/
/**********************************************************************************************************/
/*
* Se actualiza el componente de clase para que sea un componente funcional porque no maneja estados
* En la actulizacion del comoponente, como ahora los comentarios estan en otro archivo se elimina
* ".dish" de "prop.dish.comments", adicionalmente se agregan los componetes de miga de pan
*
*
*
*
*
*
*
*
*
*
*
*
*/