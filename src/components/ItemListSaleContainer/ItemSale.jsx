import React from 'react'
import { Link } from 'react-router-dom'
import'../ItemListSaleContainer/ItemSale.css'

export const ItemSale = ({item}) => {
  return (
    <>
       <article className="cardProduct" key={item.id}>
			<p className='font'>{item.title}</p>
			<Link to={`/detail/${item.id}`}>
				<img className="imgProduct" src={item.image} alt={item.category} />
			</Link>
			
			<Link to={`/detail/${item.id}`}  className=" btnDetailProductLink" >More details</Link>   
        </article>
    </>
  )
}
