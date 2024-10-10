//General imports
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes,Route } from 'react-router-dom';
//component Pages Routes
import { Layout } from './pages/Layout/Layout';
import { Home } from './pages/Home/Home.jsx';
import {Products} from './pages/Products/Products.jsx';
import { ProductsDetail } from './pages/ProductsDetail/ProductsDetail.jsx';
import { Shipping } from './pages/Shipping/Shipping.jsx';
import {Sale} from './pages/Sale/Sale.jsx';
import { ShoppingCard } from './pages/ShoppingCard/ShoppingCard.jsx';

import { Error } from './pages/Error/Error.jsx';
//context
import CardContextProvider from './contexts/CardContextProvider.jsx';


const App = () => {
	return (
		<>
			<CardContextProvider>
				<Routes>
					<Route path="/" element={<Layout/>}>
						<Route index element={<Home />}/>
						<Route path="Products" element={<Products />}/>
						<Route path ="/category/:categoryId" element={<Sale/>}/>
						<Route path="Shipping" element={<Shipping/>}/>
						<Route path="/detail/:id" element={<ProductsDetail/>}/>
						<Route path="ShoppingCard" element={<ShoppingCard/>}/>
						<Route path="*" element={<Error/>}/> 
					</Route>
				</Routes>
			</CardContextProvider>
		</>
	)
}

export default App