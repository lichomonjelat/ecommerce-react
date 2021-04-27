import React from 'react'
import Counter from './Counter'
import './Product.scss'
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Link } from 'react-router-dom';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

function Product(props) {
    return (
        <div className="product">
            <div className="product-photo">
                <img src={props.product_photo} alt="product" className="image"/>
                <div className="middle">
                <Link to={`/detail/${props.id}`}>Ver más</Link>
                </div>
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

                <div className="see-more">
                    <IconButton color="primary" aria-label="add to shopping cart">
                        <AddShoppingCartIcon />
                    </IconButton>
                    <div className="counter">
                        <Counter />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;