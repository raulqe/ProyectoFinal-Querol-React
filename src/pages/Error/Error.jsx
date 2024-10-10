
//general imports
import { Link } from "react-router-dom";
//components
import { TitleSection } from "../../components/TitleSection/TitleSection";
import { ErrorCardInfoMesage } from "../../components/ErrorCardInfoMesage/ErrorCardInfoMesage";
//images
import logo1 from '../../images/logo1.png';

export const Error = () => {
  return (
    <>
    
        <TitleSection logo={logo1} mesage={"Página no encontrada "} />
        <div className="btnBackContainer">
            <ErrorCardInfoMesage/>
            <div className="btnDiv">
                <Link className="btnBack" to="/">Home</Link>
            </div>
        </div>
   
    </>
  )
}
