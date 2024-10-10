
//Components
import { TitleSection } from '../../components/TitleSection/TitleSection';
import {ItemListContainer} from '../../components/ItemListContainer/ItemListContainer.jsx';
//Images
import logo1 from '../../images/logo1.png';

export const Products = () => {

	return (
		<>
			<TitleSection mesage={"Products"} logo={logo1} />
			<ItemListContainer/>
		</>
	)
};
