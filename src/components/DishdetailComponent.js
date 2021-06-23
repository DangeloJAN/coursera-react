import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';

class DishDetail extends Component{

    renderComments(comments) {
        return (
            <Card>
                <CardBody>
                    <CardTitle>
                        <h4>Comments</h4>
                    </CardTitle>
                    <ListGroup>
                        {this.props.dish.comments.map((comment) => {
                            return (
                                <ListGroupItem key={comment.id}>
                                    <CardText>
                                        <p>{comment.comment}</p>
                                        <p>-- {comment.author}, &nbsp;
                                        {new Intl.DateTimeFormat("en-US", {
                                            year: "numeric",
                                            month: "long",
                                            day: "2-digit",
                                        }).format(new Date(comment.date))}
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

    renderDish(dish) {
        console.log({dish});
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

    render() {
        if(this.props.dish != null)
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">{this.renderDish(this.props.dish)}</div>
                        <div className="col-12 col-md-5 m-1">{this.renderComments(this.props.dish.comments)}</div>
                    </div>
                </div>
            );
        else
            return(
                <div></div>
            );
    }
}

export default DishDetail;