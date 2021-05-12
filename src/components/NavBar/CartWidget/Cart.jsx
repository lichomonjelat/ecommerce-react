import React, { useContext } from 'react'
import './CartWidget.scss'
import { CartContext } from '../../../services/context/CartContext'
function Cart(props) {

    const { cart, removeItem } = useContext(CartContext)

    return (
        <div className={`cart-side ${props.show ? "cart-show" : ""}`} onClick={props.onClose}>
            {
                cart.map((item) =>
                    <div key={item.id}>
                        <h3>{item.item.data.product_title}</h3>
                        <span>{item.item.count} unidades</span>
                        <br />
                        <span>${item.item.count * item.item.data.product_price} usd</span>
                        <button onClick={()=>removeItem()}>Eliminar</button>
                    </div>)
            }
        </div>
    )
}
export default Cart;