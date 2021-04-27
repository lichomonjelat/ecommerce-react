import React from 'react';
import './ItemDetail.scss'

const ItemDetail = (props) => {
    return (
        <div key={props.id} className="prod-container">
            <div className="product-image">
                <img src={props.product_photo}/>
            </div>
            <div className="actions">
                <div className="title">
                    <h2>{props.product_title}</h2>
                </div>
                <div className="description">
                    <h4>{props.product_description}</h4>
                </div>
                <div className="product-price">
                    <h4>${props.product_price}</h4>
                </div>
                <div className="buy">
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
