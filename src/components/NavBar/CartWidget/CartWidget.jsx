import React, { useState, useContext, useEffect } from 'react';
import './CartWidget.scss';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Cart from './Cart';
import { CartContext } from '../../../services/context/CartContext'
import { IconButton } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';

function CartWidget() {

    const [showCart, setShowCart] = useState(false);

    const { cart } = useContext(CartContext)

    const [qty, setQty] = useState(0)

    const StyledBadge = withStyles((theme) => ({
        badge: {
          right: -3,
          top: 13,
          border: `2px solid ${theme.palette.background.paper}`,
          padding: '0 4px',
        },
      }))(Badge);
    useEffect(() => {
        let cantidad = cart.reduce(function (total, currentValue) {
            return total + currentValue.item.count
        }, 0);
        setQty(cantidad)
    }, [cart]);
    return (
        <>
            <div onClick={() => setShowCart(!showCart)}>
                <IconButton aria-label="cart">
                    <StyledBadge badgeContent={qty} color="secondary">
                        <ShoppingCartIcon />
                    </StyledBadge>
                </IconButton>
            </div>
            <Cart show={showCart} onClose={() => setShowCart(false)} />
        </>
    )
}

export default CartWidget;