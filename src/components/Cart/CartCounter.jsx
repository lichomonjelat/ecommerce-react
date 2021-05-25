import { ButtonGroup } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import React, { useState } from 'react';
import './Cart.scss'

const CartCounter = (props) => {

    const [count, setCount] = useState(props.count)


    const onResta = () => {
        if (count > 1) {
            setCount(count - 1);

        };
        props.onUpdate(count)

    }

    const onSuma = () => {
        setCount(count + 1);
        props.onUpdate(count);
    }


    return (

        <ButtonGroup>
            <Button onClick={onResta}
                disabled={count === 0 ? "disabled" : ""}>-</Button>
            <input type="text" disabled value={props.count} />
            <Button onClick={onSuma}
                disabled={count > props.stock ? "disabled" : ""}>+</Button>
        </ButtonGroup>

    );
}

export default CartCounter;
