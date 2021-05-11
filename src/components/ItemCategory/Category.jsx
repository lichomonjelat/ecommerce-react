import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Product from '../Products/Product';

const Category = () => {

    

    let { category } = useParams()

    const [data, setData] = useState([])

    const items = [
        {
            id: 1,
            product_title: "IPhone 6",
            product_description: "64gb, Spacegray",
            product_price: 350,
            category: "celular",
            product_photo: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP726/SP726-iphone6s-gray-select-2015.png"
        },
        {
            id: 2,
            product_title: "IPhone 6s",
            product_description: "128gb, Spacegray",
            product_price: 410,
            category: "celular",
            product_photo: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP726/SP726-iphone6s-gray-select-2015.png"
        },
        {
            id: 3,
            product_title: "IPhone 7 Plus",
            product_description: "128gb, Spacegray",
            product_price: 510,
            category: "celular",
            product_photo: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP726/SP726-iphone6s-gray-select-2015.png"
        },
        {
            id: 4,
            product_title: "iPad Pro",
            product_description: "512gb, spacegray",
            product_price: 750,
            category: "tablet",
            product_photo: "https://images-na.ssl-images-amazon.com/images/I/61is5y-%2BMeL._AC_SY679_.jpg"
        },
        {
            id: 5,
            product_title: "iPad Pro Max",
            product_description: "512gb, spacegray",
            product_price: 1100,
            category: "tablet",
            product_photo: "https://images-na.ssl-images-amazon.com/images/I/61is5y-%2BMeL._AC_SY679_.jpg"
        }

    ];

    useEffect(() => {
        var products = items.filter(item => item.category === category);
        setData(products);
        console.log(data)
    }, [category]);

    return (

        <div>
            {
                data.length ?
                    <div className="product-container">
                        {

                            data.map((item) => (

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
    );
}

export default Category;
