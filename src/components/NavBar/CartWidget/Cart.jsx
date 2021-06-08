import React, { useContext} from 'react'
import './CartWidget.scss'
import { CartContext } from '../../../services/context/CartContext'
import { useHistory } from 'react-router'
function Cart(props) {

    const { cart, removeItem, emptyCart } = useContext(CartContext)

    const history = useHistory()

    function endOrder() {
        history.push('/cart');
        props.onClose()
    }
     return (
        <div className={`cart-side ${props.show ? "cart-show" : ""}`}>
            <span onClick={props.onClose}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><defs>
                </defs><g transform="translate(-305 -17)"><rect className="a" width="16" height="16" transform="translate(305 17)" /><path class="b" d="M7.778,9.192,1.414,15.557,0,14.142,6.364,7.778,0,1.414,1.414,0,7.778,6.364,14.142,0l1.415,1.414L9.192,7.778l6.364,6.364-1.415,1.415Z" transform="translate(305 17)" /></g></svg>
            </span>
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
                            <button className="btn btn-outline-success m-2" onClick={endOrder}>Terminar compra</button>
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