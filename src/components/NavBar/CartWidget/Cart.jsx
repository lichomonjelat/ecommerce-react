import React, { useContext, useEffect } from 'react'
import './CartWidget.scss'
import { CartContext } from '../../../services/context/CartContext'
function Cart(props) {

    const { cart, removeItem, emptyCart } = useContext(CartContext)

    useEffect(() => {
        cart.map(function (cart) {
            console.log(cart.item.count)
        })

    }, [cart]);

    return (
        <div className={`cart-side ${props.show ? "cart-show" : ""}`}>
            <span onClick={props.onClose}>X</span>
            {
                cart.length ?
                    <div>
                        {
                            cart.map((item) =>
                                <div key={item.id} className="d-flex flex-column cart-item justify-content-between">
                                    <div className="d-flex flex-row justify-content-around align-items-center">
                                        <h3>{item.item.data.product_title}</h3>
                                        <span>{item.item.count} unidades</span>
                                        <br />
                                        <span>${item.item.count * item.item.data.product_price}</span>
                                    </div>
                                    <button className="btn btn-outline-danger" onClick={() => removeItem(item.id)}>Eliminar producto</button>
                                </div>)
                        }
                        <div className="d-flex flex-column mt-5">
                            <button className="btn btn-outline-danger m-2" onClick={emptyCart}>Vaciar carrito</button>
                            <button className="btn btn-outline-success m-2">Terminar compra</button>
                        </div>
                    </div> :
                    <div className="w-100 h-100 d-flex justify-items-center align-items-center">
                        <h3>Oops! no hay nada en tu carrito aún!</h3>
                    </div>
            }
        </div>
    )
}
export default Cart;