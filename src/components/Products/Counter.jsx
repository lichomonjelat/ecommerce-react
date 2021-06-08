import React, { useState } from 'react';
import { useHistory } from 'react-router';
import './counter.scss'

function Counter(props) {
    const [count, setCount] = useState(1)

    function toCart() {
        history.push('/cart')
    }
    const history = useHistory()

    const onResta = () => {
        if (count > 1) {
            setCount(count - 1);

        }

    }

    const onSuma = () => {
        setCount(count + 1);
    }

    return (
        <>
            <div className="counter">
                <button onClick={onResta}
                    disabled={count === 0 ? "disabled" : ""}
                >-</button>
                <input disabled type="number" value={count} />
                <button onClick={onSuma}
                    disabled={count > props.stock ? "disabled" : ""}
                >+</button>
            </div>
            <div>
                {
                    props.add ?
                        <button className="btn btn-info btn-lg btn-block mt-3" onClick={toCart} >Terminar compra</button> :
                        <button className="btn btn-info btn-lg btn-block mt-3" onClick={() => props.onAdd(count)}>Comprar</button>
                }
            </div>
        </>
    )
}

export default Counter;