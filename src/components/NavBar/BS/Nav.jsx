import React, { useState } from 'react';
import { NavDropdown } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';
import CartWidget from '../CartWidget/CartWidget';
import './Nav.scss'



const Nav = () => {

    const [show, setShow] = useState(false)

    return (
        <nav className="navbar navbar-expand-md navbar-light bg-nav">
            <div className="container">
                <span className="navbar-brand" href="#">
                    <div className="nav-logo">
                        <Link to="/">
                            <h2>Flipper
                            <span>gadgets</span>
                            </h2>
                        </Link>
                    </div>
                </span>
                <button onClick={() => { setShow(!show) }} className="navbar-toggler" type="button">
                    <span className="burger-menu"></span>
                </button>

                <div className={`justify-content-end not-show ${show ? "show" : ""}`} >
                    <div className={`${show ? "blur-bg" : ""}`}>
                        <div className="navbar-nav nav">
                            <ul className="navbar-nav mr-auto">

                                <li>
                                    <Link className="nav-link" to="/#featured">DESTACADOS</Link>
                                </li>
                                <NavDropdown title="PRODUCTOS" id="nav-dropdown">
                                    <NavDropdown.Item eventKey="4.1"><Link to="/products/celulares">Celulares</Link></NavDropdown.Item>
                                    <NavDropdown.Item eventKey="4.2"><Link to="/products/tablet">Tablets</Link></NavDropdown.Item>
                                    <NavDropdown.Item eventKey="4.3"><Link to="/products/camaras">Camaras</Link></NavDropdown.Item>
                                </NavDropdown>
                                <li>
                                    <CartWidget />
                                </li>
                            </ul>

                        </div>


                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
