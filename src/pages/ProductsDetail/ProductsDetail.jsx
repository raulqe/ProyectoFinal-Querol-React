//components
import { TitleSection } from "../../components/TitleSection/TitleSection";
import { ItemDetailContainer } from "../../components/ItemDetailContainer/ItemDetailContainer";
//images
import logo1 from '../../images/logo1.png';

export const ProductsDetail = () => {
    return (
		<>
			<TitleSection mesage={"Product"} logo={logo1}/>
			<ItemDetailContainer/>
		</>
    )
}
