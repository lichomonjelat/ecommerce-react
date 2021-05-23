import { Link } from '@material-ui/core';
import React from 'react'
import './Footer.scss'

function Footer() {
    return (
        <footer className="footer">
            <div className="container d-flex flex-row justify-content-between">
                <div className="nav-logo">
                    <Link to="/">
                        <h2>Flipper
                            <span>gadgets</span>
                        </h2>
                    </Link>
                </div>
                <div className="d-flex flex-column justify-content-center">
                    <h5>2021, FlipperGadgets</h5>
                    <h5>Buenos Aires, 2235, Rosario, Argentina</h5>
                </div>
            </div>
        </footer>
    )
}

export default Footer;