// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { ThemeProvider } from 'styled-components'; 
import './styles/global.css'
import './index.css';

import Home from './Home';
import Product from './Product';
import ProductDetail from './ProductDetail';
import { CartProvider } from './CartContext';
import CartPage from './CartPage';

const theme = {
  colors: {
    bg: '#ffffff', // Add your background color here
    black: '#000000',
    helper: '#808080',
    // Add more colors if needed
  },
  media: {
    mobile: '768px', // Example media breakpoint
  },
};

const App = () => {
  return (
    <ThemeProvider theme={theme}> {/* Wrap your entire app with ThemeProvider */}
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
    </ThemeProvider>
  );
};

export default App;
