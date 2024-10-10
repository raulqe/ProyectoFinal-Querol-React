//general imports
import { useState } from "react";
//css
import'../Counter/Counter.css';



export const Counter = ({ onAdd, q = 0 }) => {
	const [count, setCount] = useState(q);
	const increment = () => {if(count<20){setCount(count+1)}};
	const decrement = () => { if (count >= 1) { setCount(count - 1) } };
    
	return (
		<>
			<div>
				<button className=" decrecBtn me-3" onClick={decrement}> - </button>
				<span>{count}</span>
				<button className=" addBtn ms-3" onClick={increment}> + </button>
			</div>
			<button className="btnAddProduct" onClick={() => onAdd(count)}>
				{count<1?"agregar al carrito":"add more"}
			</button>
		</>
	)
}
