//general imports
import { Link } from "react-router-dom";
//css
import "./HomeArticle.css";

export const HomeArticle = ({ id, title, info, img, alt, toLink, btnTitle }) => {
  return (

		<>
			<article className="cardInfoRedirect" id={`Paragraph ${id}`}>
				<div>
					<p className="font">{title}</p>
					
					<img className="imgProductInfo" src={img} alt={alt} />
				</div>
				<div>
					<p className="font-paragraph p-5">{info}</p>

					<Link to={toLink} className="btnDetailProductLink">{btnTitle}</Link>
				</div>

			</article>
		</>
    )
}
