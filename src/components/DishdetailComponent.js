import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component{
    constructor(props) {
        super(props);
        this.state = {
            comment: [],
            dish: this.props.dish
        };
    }

    renderComments(comment) {
        const comments = this.props.dish.map((comment) => {
            return (
                <div  className="col-12 col-md-5 m-1">
                    <Card key={comments.id}>
                        <CardBody>
                            <CardTitle>
                                <h4>Comments</h4>
                            </CardTitle>
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
                        </CardBody>
                    </Card>
                </div>
            );
        });
    }

    renderDish(dish) {
            return(
                <div  className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
    }

    render(dish) {
        if (dish != null)
            return(
                <div className="container">
                    <div className="row">
                        <div>{dish}</div>
                        <div>{this.renderComments(this.state.comments)}</div>
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