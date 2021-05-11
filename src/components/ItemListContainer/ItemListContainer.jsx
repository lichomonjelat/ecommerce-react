import React, { useEffect, useState } from 'react';
import Product from '../Products/Product';
import './ItemListContainer.scss'
import { getProducts } from '../../services/products'


function ItemListContainer(props) {

    const [items, setItems] = useState([])

    useEffect(() => {
        getProducts()
            .then(
                data => setItems(data)
            );
        console.log(items)
    }, []);
    return (
        <div>
            {
                items.length ?
                    <div className="product-container">
                        {

                            items.map((item) => (

                                <div key={item.id} className="product-show">
                                    <Product
                                        id={item.id}
                                        product_title={item.product_title}
                                        product_description={item.product_description}
                                        product_price={item.product_price}
                                        product_photo={item.product_photo}

                                    />

                                </div>

                            ))

                        }
                    </div> :
                    <div>
                        <h1>Cargando...</h1>
                    </div>
            }
        </div>
    )
};

export default ItemListContainer;