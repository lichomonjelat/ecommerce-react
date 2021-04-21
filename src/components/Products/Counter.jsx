import React,{useState} from 'react';

function Counter(props){
    const [count, setCount] =useState(0)

    const onResta = () => {
        if (count > 0) {
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
            <input type="number" value={count}/>
            <button onClick={onSuma}
            disabled={count > props.stock ? "disabled" :""}
            >+</button>
        </div>
    )
}

export default Counter;