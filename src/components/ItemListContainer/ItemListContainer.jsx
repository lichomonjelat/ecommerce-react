import React, { useEffect, useState } from 'react';
import Product from '../Products/Product';
import './ItemListContainer.scss'
import { getFeatured } from '../../services/products'
import { CircularProgress } from '@material-ui/core';


function ItemListContainer() {

    const [items, setItems] = useState([])

    useEffect(() => {
        getFeatured()
            .then(
                data => setItems(data)
            );
    }, []);
    return (
        <div>
            {
                items.length ?
                    <div className="container">
                        <div className="product-container">
                            {

                                items.map((item) => (

                                    <div key={item.id} className="product-show">
                                        <Product
                                            id={item.id}
                                            new={item.new}
                                            product_brand={item.product_brand}
                                            product_title={item.product_title}
                                            product_description={item.product_description}
                                            product_price={item.product_price}
                                            product_photo={item.product_photo}

                                        />

                                    </div>

                                ))

                            }
                        </div>
                    </div> :
                    <div className="loading">
                        <div className="d-flex align-items-center">
                            <strong>Loading...</strong>
                            <CircularProgress />
                        </div>
                    </div>
            }
        </div>

    )
};

export default ItemListContainer;