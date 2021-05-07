import React,{useContext, useState, useEffect} from 'react';
import './ItemDetail.scss'
import CartContext from '../../services/context/CartContext'
import Counter from '../Products/Counter'
import { Link } from 'react-router-dom';

const ItemDetail = ({data}) => {

    
    const [cart, setCart] = useContext(CartContext)
    const [qty, setQty] = useState()

    const onAdd = (count) =>{
        setCart({
            qty: count,
            items: ["aca hay un product"]
        })
    }

    return (
        <div key={data.id} className="prod-container">
            <div className="product-image">
                <img src={data.product_photo}/>
            </div>
            <div className="actions">
                <div className="title">
                    <h2>{data.product_title}</h2>
                </div>
                <div className="description">
                    <h4>{data.product_description}</h4>
                </div>
                <div className="product-price">
                    <h4>${data.product_price}</h4>
                </div>
                <div className="buy">
                    <Counter onAdd={onAdd} stock={6} setQty={setQty}/>
                    
                </div>
                {cart.product ? <Link to="/cart">Terminar Compra</Link> :""}
            </div>
        </div>
    );
}

export default ItemDetail;
