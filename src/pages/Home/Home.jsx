//Components
import { HomeArticle } from "../../components/HomeArticle/HomeArticle";
import { TitleSection } from "../../components/TitleSection/TitleSection"
//Images
import logo1 from '../../images/logo1.png';
import Tshirt from '../../images/Tshirts.jpg';
import Sale from '../../images/Sale.jpeg';
import Shipping from '../../images/Shipping.jpg';

export const Home = () => {
  return (
    <>
        <TitleSection mesage={"Welcome to oh my T-shirt"} logo={logo1} />

        <div className="cardDetailProductShow">
			<HomeArticle 
				id={1} 
				title={"Look our designs!"} 
				info={"Since 2024 Oh my T-shirt make the most funny design in the world for our costumers."}
				img={Tshirt} alt={"Tshirt"}
				btnTitle={"Our products"} toLink={"Products"}
			/>
			<HomeArticle 
				id={2} 
				title={"Look our current offers"} 
				info={"Hey there, savvy shopper! Grab 4 of our awesome tees and get a surprise gift tee free! Don’t wait—this deal won’t last forever. Your wardrobe deserves it!"}
				img={Sale}
				alt={"Tshirt"}
				btnTitle={"Our offers"} toLink={"/category/Sale/"}
			/>
			<HomeArticle 
				id={3} 
				title={"Fast Shipping!"} 
				info={"Excited for your new tees? We get it! Enjoy fast shipping and track your order every step of the way. Plus, free shipping on orders over 50 $ ! Let’s get your style delivered!"}
				img={Shipping} alt={"Tshirt"}
				btnTitle={"Our Shipping"} toLink={"Shipping"}
			/>

        </div>
   
    </>
    
  )
}
