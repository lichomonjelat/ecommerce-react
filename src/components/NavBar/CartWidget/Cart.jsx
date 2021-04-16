import React from 'react'
import './CartWidget.scss'

function Cart(props){
    return( 
        <div className={`cart-side ${props.show ? "cart-show" : ""}`} onClick={props.onClose}>
            <h2>Muchos productos por aca</h2>
        </div>
    )
}
export default Cart;