import React, { useContext, useEffect, useState } from 'react';
import './Cart.scss'
import { CartContext } from '../../services/context/CartContext'



const Cartview = () => {

    const { cart, removeItem, emptyCart } = useContext(CartContext)

    const [qty, setQty] = useState(0)

    useEffect(() => {
        let cantidad = cart.reduce(function (total, currentValue) {
            return total + currentValue.item.count
        }, 0);
        setQty(cantidad)
    }, [cart]);

    return (
        <div className="cart-container">
            <div className="cart-view">
                <div className="row h-100">
                    <div className="col-8">
                        <div className="col">
                            <div className="row">
                                <div className="col-md-6 p-3">
                                    <h3>Tu carrito</h3>

                                </div>
                                <div className="col-md-6 p-3">
                                    <h3>{qty} items</h3>

                                </div>
                            </div>
                        </div>
                        <div className="shoppingcart">
                            <table class="table table-hover">
                                <thead>
                                    <tr>

                                        <th scope="col">Producto</th>
                                        <th scope="col">Cantidad</th>
                                        <th scope="col">Precio</th>
                                        <th scope="col">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cart.map((item) =>
                                            <tr className="prod-table" key={item.id}>
                                                <td>
                                                    <div className="d-flex flex-column">
                                                    <img src={item.item.data.product_photo} alt="product" className="image-table" />
                                                        {item.item.data.product_title}
                                                    </div>
                                                </td>
                                                <td>{item.item.count}</td>
                                                <td>{item.item.data.product_price}</td>
                                                <td>{item.item.count * item.item.data.product_price}</td>
                                            </tr>

                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                        <button className="btn btn-outline-info m-4">Seguir comprando</button>
                    </div>
                    <div className="col-4 p-3">
                        <h3>Tu orden</h3>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cartview;
