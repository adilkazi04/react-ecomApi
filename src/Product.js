import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useCart } from './CartContext'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/product.css';
import { Link } from 'react-router-dom';

const Product = () => {
  const { addToCart } = useCart(); 
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // axios.get('https://fakestoreapi.com/products')
    axios.get('https://api.escuelajs.co/api/v1/products')
      .then(response => {
        setProducts(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.title} added to cart!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      <ToastContainer />
      <section className="product-container product-page">
        <h2 className='fn'>Products we offer?</h2>
        <div className="product-page__grid">
          {isLoading ? (
            <p>Loading products...</p>
          ) : (
            products.map(product => (
              <div key={product.id} className="product-page__grid-item">
                <div className='product-page__grid-content'>
                  <Link to={`/product/${product.id}`}>
                    <img src={product.images[0]} alt={product.title} />
                  </Link>
                  <h3>{product.title}</h3>
                  <h3>${product.price}</h3>
                  <p>{product.description}</p>
                  <button onClick={() => handleAddToCart(product)}>Add to cart</button>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </>
  );
};

export default Product;
