import React,{useContext, useState, useEffect} from 'react';
import './ItemDetail.scss'
import CartContext from '../../services/context/CartContext'
import Counter from '../Products/Counter'
import { Link } from 'react-router-dom';

const ItemDetail = (props) => {

    
    const [cart, setCart] = useContext(CartContext)
    const [qty, setQty] = useState()

    const onAdd = () =>{
        setCart({
            qty: qty,
            items: ["aca hay un product"]
        })
    }

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
                    <Counter stock={6} setQty={setQty}/>
                    <button onClick={onAdd} disabled={qty < 1 ? "disabled" : ""}>Add to cart</button>
                </div>
                <Link to="/cart">Terminar Compra</Link>
            </div>
        </div>
    );
}

export default ItemDetail;
