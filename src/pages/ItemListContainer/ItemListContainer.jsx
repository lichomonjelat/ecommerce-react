import React from 'react';
import Product from '../../components/Products/Product';
import './ItemListContainer.scss'


function ItemListContainer(props){

    const items =[
        {
            id:1,
            product_title:"IPhone 6",
            product_description:"64gb, Spacegray",
            product_price:350,
            product_photo:"https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP726/SP726-iphone6s-gray-select-2015.png"
        },
        {
            id:2,
            product_title:"IPhone 6s",
            product_description:"128gb, Spacegray",
            product_price:410,
            product_photo:"https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP726/SP726-iphone6s-gray-select-2015.png"
        },
        {
            id:3,
            product_title:"IPhone 7 Plus",
            product_description:"128gb, Spacegray",
            product_price:510,
            product_photo:"https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP726/SP726-iphone6s-gray-select-2015.png"
        },
        
    ]
    
    return(
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
        </div>
    )
};

export default ItemListContainer;