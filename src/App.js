
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import './styles/global.css'
import './index.css';

import Home from './Home';
import Product from './Product';
import ProductDetail from './ProductDetail';
import { CartProvider } from './CartContext';
import CartPage from './CartPage';


const App = () => {
  return (
  
      <Router>
        <CartProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Product />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </CartProvider>
      </Router>
  
  );
};

export default App;
