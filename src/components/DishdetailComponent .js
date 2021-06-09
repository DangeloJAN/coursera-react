import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component{
    contructor(props){
        super(prop);
        this.state({

        });
    }

    renderComments(comment) {
        const comments = this.props.dish.comments.map((comment) => {
            return (
                <Card key={comment.id}>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>

                        </CardText>
                    </CardBody>
                </Card>
            );
        });
    }

    render() {
        if (dish != null)
            return(
                <div className="container">
                    <div className="row">
                        <div  className="col-12 col-md-5 m-1">
                            {dish}
                        </div>
                        <div  className="col-12 col-md-5 m-1">
                            {comment}
                        </div>
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