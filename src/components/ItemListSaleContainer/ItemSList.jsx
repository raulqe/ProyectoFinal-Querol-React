import { ItemSale } from "./ItemSale.jsx"

export const ItemSList = ({items}) => {
  const productSale=items;
  const SaleProducts= productSale.filter((product)=>( product.price <= 20))
  return (
    <>
     
     <div className="cardSaleProductShow">

         <div className="SaleContainer">
          <div className="SubtitleContainer">
            <p className="SubTitleSale"> Offers </p>
            <p className="SubTitleSale"> the best offers at the best price for a limited time . . . </p>
          </div>

        {SaleProducts.map((el,i)=>(<ItemSale key={i} item={el}/>))}

           <div className="SubtitleContainer-right">
             <p className="SubTitleSale">Unleash Your Quirkiness: Score 1 Freak-Tastic Tee and Get One FREE!</p>
             <div><p className="SalePrice"> 20 $</p></div>
             <iframe src="https://giphy.com/embed/Qs7ukyDE96izfxp4fz" width="300" height="255" className="giphy-embed" allowFullScreen></iframe>

           </div>
         </div>
     </div>
    </>
  )
}
