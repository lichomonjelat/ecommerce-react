import React, { useState, useContext, useEffect } from 'react';
import './counter.scss'
import CartContext from '../../services/context/CartContext'
function Counter(props) {
    const [count, setCount] = useState(1)

    const [cart, setCart] = useContext(CartContext)

    

    const onResta = () => {
        if (count > 1) {
            setCount(count - 1);

        }

    }

    const onSuma = () => {
        setCount(count + 1);
    }
    useEffect(() => {
        
    }, [count]);
    return (
        <div className="counter">
            <button onClick={onResta}
                disabled={count === 0 ? "disabled" : ""}
            >-</button>
            <input disabled type="number" value={count} />
            <button onClick={onSuma}
                disabled={count > props.stock ? "disabled" : ""}
            >+</button>
        </div>
    )
}

export default Counter;