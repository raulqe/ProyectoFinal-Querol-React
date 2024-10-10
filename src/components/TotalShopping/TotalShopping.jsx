//general imports
import { Link } from "react-router-dom"
import { useContext, useState } from "react"
//context
import CardContext from "../../contexts/CardContext"
//css
import "../TotalShopping/TotalShopping.css"

export const TotalShopping = () => {

    const{clearCard,totalQuantity,totalPrice,setBuy }=useContext(CardContext)
     
	return (
		<>
			<div className="cardTotalShopBtnShow">
			{totalPrice ===0 ? <h4 className="infoTitle">Add some items to your card</h4> : null}

			<div className="totalContainer">
				<h5 className="totalTitle">Total</h5>
				<p className="font">{totalPrice} $</p>
				<p className="font">Items: {totalQuantity}</p>
			</div>
			
			<div className=" btnsCardContainer d-flex flex-row">
				<button className="btnBuy"onClick={()=>setBuy(false)}>Buy</button>
				<button className='BtnDeleteAll' onClick={()=>clearCard()}> Delete all</button>
			</div>
			<Link className="btnBack" to="/Products">Back</Link>
			
			</div>
		</>
    )
}
