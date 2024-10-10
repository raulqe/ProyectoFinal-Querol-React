import { useContext,useEffect,useState } from 'react';
// import { useParams } from 'react-router-dom';
import {getDocs,getFirestore, collection} from 'firebase/firestore'
import CardContext from '../../contexts/CardContext';
import { ItemSList } from './ItemSList';
import { Loading } from '../Loading/Loading';

export const ItemListSaleContainer = () => {
    const { loading, setLoading } = useContext(CardContext)
    // const { categoryId } = useParams
	const [products2,setProducts2]= useState([]);
    useEffect(()=>{
		const db=getFirestore();
		const PoductsCollection= collection(db,"Products");
		getDocs(PoductsCollection)
		.then((snapshot)=>{
		setProducts2( snapshot.docs.map(
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
        <>
		  {!loading?
           <ItemSList items={products2}/>
		  :<Loading/>}
        </>
    )
}
