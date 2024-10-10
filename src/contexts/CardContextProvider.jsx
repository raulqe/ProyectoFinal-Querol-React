
import { Children } from "react";
import { useState } from "react";
import CardContext from "./CardContext";


//proveer información al contexto.
const CardContextProvider= ({children})=> {
    //funciones globales
    //inicialiced card =>[]
    const [products,setProducts]= useState([]);
    const [loading,setLoading] =useState(true);

    const [card,setCard]=useState([]);
    const [Buy,setBuy]=useState(true)
    
    const addItem=(item,q,id)=>{
         
       setCard (()=>{
        const isItemFound = card.find((item) => item.id === id);
        const addItems= [...card, { quantity: q,...item }];
        if (isItemFound) {
            return card.map((item) => {
            if (item.id === id) {
                return { ...item, quantity: q };
            } else {
                return item;
            }
            });
        } 
        return addItems
        })
    }
    const getQuantiy = (id) => {
     const quantity = card.find((item)=> item.id === id)?.quantity
     const stock= card.find((item)=>item.id ===id)?.stock
     const result= stock - quantity;
    return result || 20;
    }
  
    const removeItem=(id)=>{ 
        // const foundId= card.find((el)=>el.id === id);
        const carrito=card.filter((el)=>el.id !== id);
        setCard(carrito);
        
    }
    const clearCard=()=>{
        setCard([])
    }
    const totalQuantity =card.reduce(
        (acc,curr)=>acc + curr.quantity,0);
    const totalPrice= card.reduce(
        (acc,curr)=>acc+ curr.quantity * curr.price,0
    );
    console.log(card)
    //objeto con todas las funciones 
    //para pasar al value.
    const values={
      card,
      addItem,
      removeItem,
      clearCard,
      getQuantiy,
      totalQuantity,
      totalPrice,
      Buy,
      setBuy,
      products,
      setProducts,
      loading,
      setLoading

    }

    return (
        <>
            <CardContext.Provider value={values}>
                {children}
            </CardContext.Provider>
        </>
    )
}
export default CardContextProvider;