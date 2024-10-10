//visagra (logica item + ItemlistContainer)

import {Item} from "./Item"

export const ItemList = ({items}) => {
    return (
		<>
			<div className="cardProductShow">
				{items.map((el,i)=>(<Item key={i} item={el}/>))}
			</div>
		</>
    )
}

