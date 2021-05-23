import React, { useState, useContext, useEffect } from 'react';
import './CartWidget.scss';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Cart from './Cart';
import { CartContext } from '../../../services/context/CartContext'

function CartWidget() {

    const [showCart, setShowCart] = useState(false);

    const { cart } = useContext(CartContext)

    const [qty, setQty] = useState(0)

    useEffect(() => {
        let cantidad = cart.reduce(function(total, currentValue){
            return total + currentValue.item.count
        }, 0);
        setQty(cantidad)
    }, [cart]);
    return (
        <>
            <div className="cart" onClick={() => setShowCart(!showCart)}>
                <span>{qty}</span>
                <ShoppingCartIcon />
            </div>
            <Cart show={showCart} onClose={() => setShowCart(false)} />
        </>
    )
}

export default CartWidget;