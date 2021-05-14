import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget/CartWidget';
import './NavBar.scss';

function NavBar(){
        
    
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
                    <Link to="/products">PRODUCTOS</Link>
                    <Link to="#">SUCURSALES</Link>
                    <Link to="#">CONTACTO</Link>
                </div>
                <CartWidget/>
            </div>
        )
    
}
export default NavBar;