// import { Link } from "react-router-dom";
//components

import { useContext } from "react";
import { BuyForm } from "../../components/BuyForm/BuyForm.jsx";
import { CardShopping } from "../../components/CardShopping/CardShopping.jsx";
import {TitleSection} from "../../components/TitleSection/TitleSection.jsx";

//images
import logo1 from'../../images/logo1.png';
import CardContext from "../../contexts/CardContext.js";

export const ShoppingCard = () => {
     const {Buy}=useContext(CardContext)
	return (
		<>
			<TitleSection logo={logo1} mesage={"Shop area"}/>

			{
				!Buy===false?
				<CardShopping/>
				:<BuyForm/>
			}
		</>
	)
}
