//TOMAR INFORMACIÓN
//general imports
import React, {useState,useEffect } from 'react'
import { useParams} from 'react-router-dom';
import {getDocs,getFirestore, collection} from 'firebase/firestore'
//componentes
import {ItemList} from './ItemList';
import { Loading } from '../Loading/Loading';
//css
import "./Item.css";




export const ItemListContainer = () => {
  //Ojo esta ruta no funciona linkea con nav /App/Nav
	const{categoryId}=useParams
  //Ojo con el nombre coincide con col Firebase
//   const { products, setProducts, loading, setLoading } = useContext(CardContext)
	const [products,setProducts]= useState([]);
	const [loading,setLoading] =useState(true);
  //montaje
  // petición asinc (despues de renderizado)
	useEffect(()=>{
		const db=getFirestore();
		const PoductsCollection= collection(db,"Products");
		getDocs(PoductsCollection)
		.then((snapshot)=>{
		setProducts( snapshot.docs.map(
			(doc)=>({id: doc.id,...doc.data()})
		));
		setLoading(false);
		})
		.catch((err)=>{
		console.log(`se ha producido un error .
					el producto solicitado no existe.`)
		})
	},[])

    return (
      //rederizado
		<div>
			{
			!loading ?
			<ItemList items={products}/>
			:<Loading/>
			}
		</div>
    )
}

