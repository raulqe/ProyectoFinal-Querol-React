//general imports
import { Link } from "react-router-dom";
//css
import "../CardWidget/CardWidget.css"



export const CardWidget = ({StoreItems})=>{

    return(
        <>
            <Link className="Link" to="ShoppingCard">
                <button type="button" className="btnS btn d-flex flex-row  btn-secondary border ms-1 me-1 p-1" >
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bagImg bi bi-bag-fill pt-2 " viewBox="0 0 16 16"><path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z"></path></svg>
                    <span className="ms-2 me-1 mt-1 ">{StoreItems}</span>
                </button>
            </Link>
        </>
    );
}