import React, { createContext, useState, useEffect } from 'react';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';

export const CartContext = createContext()

export default function CartProvider({ children }) {


    const [cart, setCart] = useState([])

    useEffect(() => {
        console.log(cart)
    }, [cart]);
    function isInCart(id) {
        //Chequear si el producto esta en el carro
        if (cart.find(item => item.id === id)) {
            //Esta? 
            return true
        }
        else {
            //No está
            return false
        }
    }
    function addToCart(data) {
        if (isInCart(data.id)) {
            var prodIndex = cart.findIndex((obj => obj.id == data.id));
            cart[prodIndex].item.count = cart[prodIndex].item.count + data.item.count;
            console.log(data)
        }
        else {
            setCart([...cart, data])
        }
    }
    function removeItem(data) {
        var prodIndex = cart.findIndex((obj => obj.id == data.id));
        console.log(cart[prodIndex])
    }
    function emptyCart() {

    }

    return (
        <CartContext.Provider value={{ cart, setCart, addToCart, removeItem, emptyCart }}>
            {children}
        </CartContext.Provider>
    )
}