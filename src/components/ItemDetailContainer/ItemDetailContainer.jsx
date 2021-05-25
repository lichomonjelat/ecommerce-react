import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import {getDetail} from '../../services/products'
import db from '../../db'



const ItemDetailContainer = (props) => {

    

    let { id } = useParams()

    const [data, setData] = useState([])

    useEffect(() => {
        getDetail(id)
        .then(
            data => setData(data)
        )
    }, []);
   
    
    return (
        <ItemDetail
            data={data}
        />
    );
}

export default ItemDetailContainer;
