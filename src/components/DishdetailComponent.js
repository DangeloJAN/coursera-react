import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';

function RenderComments({comments}) {
    return (
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
    );
}

function RenderDish({dish}) {
   return(
        <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
}

const DishDetail = (props) => {
    if(props.dish != null)
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1"><RenderDish dish={props.dish}/></div>
                    <div className="col-12 col-md-5 m-1"><RenderComments comments={props.dish.comments}/></div>
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