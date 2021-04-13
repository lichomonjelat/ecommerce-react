import { MDBIcon } from 'mdbreact';
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';

class NavBar extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="navContainer">
                <div className="nav-logo">
                    <Link to="/">
                        <h2>Flipper
                        <span>gadgets</span>
                        </h2>
                    </Link>
                </div>
                <div className="nav-links">
                    <Link to="/products">Productos</Link>
                    <Link to="#">Sucursales</Link>
                    <Link to="#">Contacto</Link>
                </div>
                <div className="cart">
                    <div>
                        <span>0</span>
                       
                    </div>
                </div>
            </div>
        )
    }
}
export default NavBar;