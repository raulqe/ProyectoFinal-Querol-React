export const FooterBrand=({logo})=>{
    return(
        <>
            <div className="col-md-4 d-flex align-items-center">
                <img className=" logo mb-3 me-2 ms-2 mb-md-0 text-body-secondary text-decoration-none lh-1" src={logo} alt="Logo brand" />
            
                <span className=" mb-3 mb-md-0 text-body-secondary">
                    © 2024 Company, Inc
                </span>
            </div>

        </>
    );
}