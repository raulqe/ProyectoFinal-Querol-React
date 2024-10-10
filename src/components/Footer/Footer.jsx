//Fragments
import { FooterBrand } from "./FooterBrand";
import { FooterSocialMedia } from "./FooterSocialMedia";
//Css
import "./Footer.css";

export const Footer=({logo})=>{
    return(
        <>
            <footer>
                <section className="d-flex flex-wrap justify-content-between align-items-center py-3 border-secondary-subtle border-top">
                    <FooterBrand logo={logo}/>
                    <FooterSocialMedia/>
                </section>
            </footer>
        </>
    );
}