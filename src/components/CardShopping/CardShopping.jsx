//general imports
import { useContext } from 'react'
//context
import CardContext from '../../contexts/CardContext'
//css
import "./CardShopping.css"
import { TotalShopping } from '../TotalShopping/TotalShopping';

export const CardShopping = () => {
    const {card,removeItem}=useContext(CardContext);
   
    return (
        <div className='cardProductShowShop'>
            
            {card.map((el)=>(
                <div key={el.id}>

                    <div className='cardProductShop'>
                        <div className='subSection'>
                            <img className='imgFixProduct' src={el.image} alt={el.category} />
                        </div>

                        <div className='subSection'>
                            <p>{el.title}</p>

                            <p>
                                Quantity
                                <br />
                                {`${el.quantity}`}
                            </p>
                            <p>
                                Price
                                <br />
                                {`${el.price} $`}
                            </p>
                    
                            <button className='BtnDeleteItem' onClick={()=>removeItem(el.id)}>
                                 delete
                            </button>

                        </div>
                    </div>
                </div>   
            ))}
            <TotalShopping/>
        </div>
    )
}
