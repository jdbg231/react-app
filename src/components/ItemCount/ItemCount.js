import "./style.css"
import {useState} from "react";

function ItemCount() {
  const [counter,setCounter] = useState(0)

    const increment = () =>  setCounter(counter+1)
    const decrement = () => setCounter(counter-1)

    return <>
        <div className="qty mt-5">
                <button className="minus bg-dark" onClick={decrement}>-</button>
                <p className="count">{counter}</p>
                <button className="plus bg-dark" onClick={increment}>+</button>
        </div>
    </>;
}

export default ItemCount;
