import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import ProductContext from './contexts/ProductContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		
		setCart([...cart, item]);
		// add the given item to the cart
	};

	return (
		<div className="App">

			<ProductContext.provider value={{ products, addItem }}>
			<Navigation cart={cart} />

			{/* Routes */}
			<Route
				exact path="/"
				components = {Products}
				
			/>

			<Route
				exact path="/cart"
				component = { ShoppingCart }
			/>
			</ProductContext.provider>
		</div>
	);
}

export default App;
