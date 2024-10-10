
//components
import { HomeArticle } from '../HomeArticle/HomeArticle';
import { ShippingStepsSection } from './ShippingStepsSection';
//css
import '../ShippingSection/ShippingSection.css';

export const ShippingSection = () => {
  return (
    <>
        <div className='cardShippingProductShow'>
			<section className='ShippingInfoContainer '>
				<HomeArticle
					id={1}
					title={"We work hard every day to provide the best service to our customers"}
					info={"We understand how important it is to receive your favorite t-shirts quickly and safely. That's why we offer fast and reliable shipping straight to your door! As soon as you place your order, our team gets to work to ensure your selection is processed efficiently. You’ll receive a tracking number so you can follow your package on its journey, giving you peace of mind. Plus, enjoy free shipping on orders over 50 $ it’s our way of saying thank you for choosing us! We’re committed to providing a seamless shopping experience so you can start showcasing your new style in no time!"}
					img={'https://www.theboxery.com/blog/wp-content/uploads/2024/05/An-e-commerce-worker-sticking-a-shipping-label-on-a-cardboard-shipping-box.-The-worker-is-in-a-well-lit-warehouse-setting-with-shelves-of-boxes-in-the-shelves.jpg'}
					alt={"Man"}
					btnTitle={"Our products"} toLink={"/Products"}
				/>
				<ShippingStepsSection/>

			</section>


        </div>
    </>
  )
}
