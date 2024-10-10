
import { TitleSection } from "../../components/TitleSection/TitleSection";
import { ItemListSaleContainer } from "../../components/ItemListSaleContainer/itemListSaleContainer";
import logo1 from '../../images/logo1.png'
export const Sale = () => {
    return (
        <>
            <TitleSection mesage={"Sale"} logo={logo1} />
            <ItemListSaleContainer/>
        </>

    )
}
