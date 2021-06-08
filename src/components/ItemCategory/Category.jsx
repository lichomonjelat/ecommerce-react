import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Product from '../Products/Product';
import { getCategory, getProducts } from '../../services/products'
import './Category.scss'
const Category = () => {

    let { category } = useParams()

    const [data, setData] = useState([])

    useEffect(() => {
        getCategory(category)
            .then(
                data => setData(data)
            )
    }, [category]);

    return (

        <div>
            <h1 className="text-center text-uppercase m-3">{category}</h1>
            {
                data.length ?
                    <div className="product-container">
                        
                        {

                            data.map((item) => (

                                <div key={item.id} className="product-show">
                                    <Product
                                        product_brand={item.product_brand}
                                        id={item.id}
                                        new={item.new}
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
    );
}

export default Category;
