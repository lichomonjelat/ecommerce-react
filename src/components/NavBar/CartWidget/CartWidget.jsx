import React, {useState} from 'react';
import './CartWidget.scss';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Cart from './Cart';

function CartWidget() {

    const [showCart, setShowCart] = useState(false);
 
    const [qty, setQty] = useState(0)

    return (
        <>
        <div className="cart" onClick={()=>setShowCart(true)}>
            <span>{qty}</span>
            <ShoppingCartIcon/>
        </div>
        <Cart show={showCart} onClose={()=>setShowCart(false)}/>
        </>
    )
}

export default CartWidget;