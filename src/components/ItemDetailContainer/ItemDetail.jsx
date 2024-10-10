//general imports
import { Link } from 'react-router-dom'
//components
import { Counter } from '../Counter/Counter.jsx'


export const ItemDetail = ({ item, onAdd, quantityStock }) => {

    return (
		<>
			<div className="cardDetailProductShow">
				<article className="cardDetailProduct" key={item.id}>
					
					<p className="font">{item.title}</p>

					<div className="imgDetailContainer">
						<img className="imgDetailProduct" src={item.image} alt={item.category} />
						<img className="imgDetailProductCloseUp" src={item.closeUp} alt={item.category} />
					</div>

					<p className="priceDetail">{`${item.price} $`}</p>
					<p className="font-paragraph">{item.description}</p>
					<p className='font'>
						{(item.stock > 0) ? `In Stock: ${quantityStock}` : `Unavaliable`}

					</p>
					<Counter onAdd={onAdd} quantityStock={quantityStock} />
				</article>
				<Link className="btnBack" to="/Products">Back</Link>
			</div>
		</>
    )
}
