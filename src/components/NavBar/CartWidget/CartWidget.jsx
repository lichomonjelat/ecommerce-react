import React, { useState, useContext, useEffect } from 'react';
import './CartWidget.scss';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Cart from './Cart';
import { CartContext } from '../../../services/context/CartContext'

function CartWidget() {

    const [showCart, setShowCart] = useState(false);

    const { cart } = useContext(CartContext)

    useEffect(() => {
       
    }, []);
    return (
        <>
            <div className="cart" onClick={() => setShowCart(true)}>
                <span>{cart.qty}</span>
                <ShoppingCartIcon />
            </div>
            <Cart show={showCart} onClose={() => setShowCart(false)} />
        </>
    )
}

export default CartWidget;