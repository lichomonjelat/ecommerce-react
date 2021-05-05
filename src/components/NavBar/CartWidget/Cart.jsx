import React, {useContext} from 'react'
import './CartWidget.scss'
import CartContext from '../../../services/context/CartContext'
function Cart(props){

    const [cart, setCart] = useContext(CartContext)

    return( 
        <div className={`cart-side ${props.show ? "cart-show" : ""}`} onClick={props.onClose}>
            {/*
                cart.items.map((item) =>
                <h3>{item}</h3>
                )
            */}
        </div>
    )
}
export default Cart;