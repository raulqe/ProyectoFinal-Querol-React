//components
import { useContext, useState } from 'react';
//context
import CardContext from '../../contexts/CardContext';
//css
import'../BuyForm/BuyForm.css';

export const BuyForm = () => {

    const {card,totalPrice,totalQuantity,setBuy}= useContext(CardContext)
    const [buyer,setBuyer]=useState({
        name: "",
        email:"",
        address:"",
        bankAcount:"",
    });
    const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const validPostalAddress = /^[a-zA-Z0-9\s,.'-]{3,}$/;
    const validBankAccount = /^(?!\s*$)(\d{10,20}|\d{1,20}([- ]\d{1,20})*)$/;

    const validateData = (e) => {
        const field = e.target;
        const fieldValue = field.value.trim();

        const showError = (e, message) => {
            field.nextElementSibling.classList.add("error");
            field.nextElementSibling.innerText = message;
        };
        const clearError = (e) => {
            field.nextElementSibling.classList.remove("error");
            field.nextElementSibling.innerText = '';
        };
        const validations=(e,validationParams)=>{
            !validationParams.test(fieldValue)
            ? showError(e, `${field.name} isn't valid`)
            : (clearError(e), handleChange(e));
        }
        const handleChange = (e) => {  
            setBuyer({
                ...buyer,
                [e.target.name]: e.target.value
            });
        };
        
        switch (field.id) {
            case "name":
                fieldValue.length <= 0 || !isNaN(fieldValue)
                    ? showError(e, `${field.name} isn't valid`)
                    : (clearError(e), handleChange(e));
                break;

            case "email":
                validations(e,validEmail);
                break;

            case "direction":
                 validations(e,validPostalAddress);
                break;

            case "bankAcount":
                validations(e,validBankAccount); 
                break;
            default:
                console.log("error en el formulario")
                break;
        };
    };
    console.log(buyer);
    
    const submit=(e)=>{
        e.preventDefault();
        const purchase = {
            InfoBuyer: buyer,
            Products: card,
            TotalcurrentPurchase:`${totalPrice} $`,
            ItemsQuantity: totalQuantity  
        }
        console.log(purchase)
    }
  
    
  return (
        <>
            <form onSubmit={submit} className="FormContainer d-flex-row ">
                <section className='FormCardContainer'>

                    <fieldset className='UserDataFormContainer'>
                        <legend>Thank you, introduce your data to continue:</legend>
                        
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" onBlur={validateData} id="name" className="input" placeholder="  Enter your name." required></input>
                        {<p></p>}

                        <label htmlFor="email">Email:</label>
                        <input type="text" name="email" onBlur={validateData} id="email" className="input" placeholder="  Enter your email." required/>
                        {<p></p>}

                        <label htmlFor="address">Address:</label>
                        <input type="text" name="address" onBlur={validateData} id="direction" className="input" placeholder="  Enter your current direction." required/>
                        {<p></p>}

                        <label htmlFor="bankAcount"> Acount:</label>
                        <input type="password" name="bankAcount" onBlur={validateData} id="bankAcount" className="input" placeholder="  Enter your bank acount." required/>
                        {<p></p>}
                    </fieldset>

                    <fieldset className='termsAndConditions-Container'>
                        <label htmlFor="termsAndConditions" className='TrmsAndCond font'>Accept our terms and conditions:
                            <input type="radio" id="termsAndConditions" required name="termsAndConditions" className="input termsAndConditions" value="true"/>
                        </label>
                       
                    </fieldset>
                    <button className="btn_submit" type="submit"  id="continueBtn">Continue</button>
                    <button className="btnChange" onClick={()=>setBuy(true)} >cancel</button>
                </section>

               
            </form>
                    
        </>
    )
};
