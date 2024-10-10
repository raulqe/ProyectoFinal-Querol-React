//General imports
import { Outlet } from "react-router-dom";
//Components
import { NavBar } from "../../components/NavBar/NavBar";
import { Footer } from "../../components/Footer/Footer";
//Images
import logo1 from '../../images/logo1.png';

export const Layout = () => {
    return (
		<>
			<NavBar logo={logo1} />
				
			<main>
				<Outlet/>
			</main>

			<Footer logo={logo1}/> 
		</>
    )
};
