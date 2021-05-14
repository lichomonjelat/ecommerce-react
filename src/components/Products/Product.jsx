import React from 'react'
import Counter from './Counter'
import './Product.scss'
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Link, useHistory } from 'react-router-dom';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

function Product(props) {

    let history = useHistory()

    function toDetail(){
        history.push(`/detail/${props.id}`)
    }
    return (
        <div className="product" onClick={toDetail}>
            <div className="product-photo">
                <img src={props.product_photo} alt="product" className="image" />
                
            </div>

            <div className="product-info">
                <div>
                    <p>{props.product_brand}</p>
                </div>
                <div className="d-flex flex-row">
                    <h3>{props.product_title}</h3>
                    {

                        props.new ?
                            <div className="new">NUEVO</div>
                            : ""
                    }
                </div>
                <div>
                    <p>{props.product_description}</p>
                </div>
                <div className="product-price">
                    <h5>${props.product_price}</h5>
                </div>
            </div>
            {/*<div className="actions">

                <div className="see-more">
                    <IconButton color="primary" aria-label="add to shopping cart">
                        <AddShoppingCartIcon />
                    </IconButton>
                    <div className="counter">
                        <Counter />
                    </div>
                </div>
                </div>*/}
        </div>
    )
}

export default Product;