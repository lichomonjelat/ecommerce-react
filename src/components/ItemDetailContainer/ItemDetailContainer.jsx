import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = (props) => {

    let { id } = useParams()

    const [data, setData] = useState([])

    const items = [
        {
            id: 1,
            product_title: "IPhone 6",
            product_description: "64gb, Spacegray",
            product_price: 350,
            product_photo: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP726/SP726-iphone6s-gray-select-2015.png"
        },
        {
            id: 2,
            product_title: "IPhone 6s",
            product_description: "128gb, Spacegray",
            product_price: 410,
            product_photo: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP726/SP726-iphone6s-gray-select-2015.png"
        },
        {
            id: 3,
            product_title: "IPhone 7 Plus",
            product_description: "128gb, Spacegray",
            product_price: 510,
            product_photo: "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP726/SP726-iphone6s-gray-select-2015.png"
        },

    ];

    useEffect(() => {
        let product = items.find(x => x.id == id);
        setData(product);
        console.log(data)
    }, [id]);

    return (
        <ItemDetail
            data={data}
        />
    );
}

export default ItemDetailContainer;
