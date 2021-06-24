import React, { Component, Fragment } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component{

    render() {
        return(
            <Fragment>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </Fragment>
        );
    }
}

export default Header;

/*
* Se creo para mejorar la funcionalidad de la app y se trajo del "MainComponent" el import de reactstrap
* y el "Navbar" y se complemento con el "Jumbotron"
*/