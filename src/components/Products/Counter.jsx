import React,{useState} from 'react';
import './counter.scss'

function Counter(props){
    const [count, setCount] =useState(1)

    const onResta = () => {
        if (count > 1) {
            setCount(count - 1);
        }
        
    }

    const onSuma = () =>{
        setCount(count+1);
    }

    return(
        <div className="counter">
            <button onClick={onResta}
            disabled={count === 0 ? "disabled" :""}
            >-</button>
            <input disabled type="number" value={count}/>
            <button onClick={onSuma}
            disabled={count > props.stock ? "disabled" :""}
            >+</button>
        </div>
    )
}

export default Counter;