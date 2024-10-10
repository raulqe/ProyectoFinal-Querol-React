// Tomar información (x parametro) 

//General imports
import { useParams } from 'react-router-dom'
import { useState,useEffect, useContext } from 'react'
import {getDoc,doc,getFirestore} from 'firebase/firestore'
//context
import CardContext from '../../contexts/CardContext';
//components
import { ItemDetail } from './ItemDetail';
import { Loading } from '../Loading/Loading';
//css
import "./ItemDetailContainer.css"



export const ItemDetailContainer = () => {
  
	
	const [product,setProduct] = useState({})
	const [loading,setLoading] = useState(true)
	const {id} = useParams();
	//useContext
	const {addItem,getQuantiy} = useContext(CardContext);

	//funcion carrito[agregar objeto]
	const onAdd = (q) => {
		if (q !== 0){ 
		addItem(product, q,id)
		}
	}
	const quantityStock= getQuantiy(id)

  
	useEffect(() => {
    
		const db=getFirestore();
		const docRef=doc(db,"Products", id)

		getDoc(docRef)
		.then((snapshot) => {
			
			setProduct({
			id: snapshot.id,
			...snapshot.data()
			});
			setLoading(false);
			})

	},[])

	return (
    
		<div>
			{
				!loading ?
				<ItemDetail item={product} onAdd={onAdd} quantityStock={quantityStock}/>
				:<Loading/>
			
			}
		</div>
    )
}
