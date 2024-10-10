//images
import logo1 from '../../images/logo1.png';
//css
import './Loading.css'

export const Loading = () => {
    return (
        <>

            <div className='background'>
                
                <img className='Loading' src={logo1} alt="Loading logo"/>
                <h2>Loading...</h2>
            
            </div>

        </>
    
    )
}
