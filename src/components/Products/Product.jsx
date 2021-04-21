import React from 'react'
import Counter from './Counter'
import './Product.scss'

function Product(props) {
    return (
        <div className="product">
            <div className="product-photo">
                <img src={props.product_photo} alt="product" />
            </div>
            <div className="product-info">
                <div>
                    <h3>{props.product_title}</h3>
                </div>
                <div>
                    <h4>{props.product_brand}</h4>
                </div>
                <div>
                    <p>{props.product_description}</p>
                </div>
                <div className="product-price">
                    <h5>${props.product_price}</h5>
                </div>
            </div>
            <div className="actions">
                <div className="counter">
                    <Counter/>
                </div>
                <div className="addcart">
                    <button>Añadir al carrito</button>
                </div>
                <div className="see-more">
                    <button>Mas informacion</button>
                </div>
            </div>
        </div>
    )
}

export default Product;