import React, { useContext, useEffect } from 'react'
import './CartWidget.scss'
import { CartContext } from '../../../services/context/CartContext'
function Cart(props) {

    const { cart, removeItem, emptyCart } = useContext(CartContext)

    useEffect(() => {
        cart.map(function(cart){
           console.log(cart.item.count)
        })
        
    }, [cart]);

    return (
        <div className={`cart-side ${props.show ? "cart-show" : ""}`}>
            <span onClick={props.onClose}>X</span>
            {
                cart.map((item) =>
                    <div key={item.id}>
                        <h3>{item.item.data.product_title}</h3>
                        <span>{item.item.count} unidades</span>
                        <br />
                        <span>${item.item.count * item.item.data.product_price} usd</span>
                        <button onClick={()=>removeItem(item.id)}>Eliminar</button>
                    </div>)
            }
            <button onClick={emptyCart}>Vaciar carrito</button>
        </div>
    )
}
export default Cart;