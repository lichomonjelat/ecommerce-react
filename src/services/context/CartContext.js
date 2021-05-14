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
            const updated  = cart[prodIndex].item.count + data.items.count
            setCart([...cart, updated])
        }
        else {
            setCart([...cart, data])
        }
    }
    function removeItem(id) {
        const newToCart = cart.filter((item) => item.id !== id)
        setCart(newToCart)
    }
    function emptyCart() {
        setCart([])
    }

    return (
        <CartContext.Provider value={{ cart, setCart, addToCart, removeItem, emptyCart }}>
            {children}
        </CartContext.Provider>
    )
}