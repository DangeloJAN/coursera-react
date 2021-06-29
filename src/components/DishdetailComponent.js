import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Card, CardImg, CardText, CardBody, CardTitle, ListGroup, ListGroupItem,
        Breadcrumb, BreadcrumbItem, Button, Row, Col, Label, 
        Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
        
class CommentForm extends Component{
    constructor(props){
        super(props);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmitComment = this.handleSubmitComment.bind(this);
        this.state = {
            isModalOpen: false
        }
    }
        
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
        
    handleSubmitComment(values) {
        this.toggleModal();
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
    }
        
    render(){
        return(
            <div>
                <Button outline className="mt-1" onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Commets</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmitComment(values)}>
                            <Row className="form-group">
                                <Label htmlFor="rating" md={3}>Rating: </Label>
                                <Col md={9}>
                                    <Control.select model=".rating" id="rating" className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="author" md={3}>Your Name: </Label>
                                <Col md={9}>
                                    <Control.text model=".author" id="author" name="author"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            required: 'Required ',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>   
                            <Row className="form-group">
                                <Label htmlFor="comment" md={3}>Comment: </Label>
                                <Col md={9}>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="6"
                                        className="form-control" 
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10, offset: 3}}>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>                                               
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}


function RenderComments({comments, addComment, dishId}) {
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
            <CommentForm dishId={dishId} addComment={addComment} />
        </div>
    );
}

function RenderDish({dish}) {
    return(
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg top src={baseUrl + dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

const DishDetail = (props) => {
    if (props.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return(
            <div className="container">
                <div className="row">            
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.dish != null) 
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
                    <RenderComments 
                        comments={props.comments}
                        addComment={props.addComment}
                        dishId={props.dish.id}
                    />
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