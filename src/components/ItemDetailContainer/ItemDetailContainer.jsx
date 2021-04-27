import React from 'react';
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = (props) => {

    let id = useParams()

    const items = [
        {
            id: 1,
            product_title: "IPhone 6",
            product_description: "64gb, Spacegray",
            product_price: 350,
            product_photo: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP726/SP726-iphone6s-gray-select-2015.png"
        }
       
    ]

    return (
        <div>
            {
                items.map((item) =>(
                    <div key={item.id}>
                        <ItemDetail
                         product_title={item.product_title}
                         product_description={item.product_description}
                         product_price={item.product_price}
                         product_photo={item.product_photo}
                        />
                    </div>
                ))
            }
        </div>
    );
}

export default ItemDetailContainer;
