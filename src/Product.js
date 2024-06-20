import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useCart } from './CartContext'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/product.css';
import { Link } from 'react-router-dom';

const Service = () => {
  const { addToCart } = useCart(); 
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setServices(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []);

  const handleAddToCart = (service) => {
    addToCart(service);
    toast.success(`${service.title} added to cart!`, {
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
            <p>Loading services...</p>
          ) : (
            services.map(service => (
              <div key={service.id} className="product-page__grid-item">
                <div className='product-page__grid-content'>
                  <Link to={`/product/${service.id}`}>
                    <img src={service.image} alt={service.title} />
                  </Link>
                  <h3>{service.title}</h3>
                  <h3>{service.price}</h3>
                  <p>{service.description}</p>
                  <button onClick={() => handleAddToCart(service)}>Add to cart</button>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </>
  );
};

export default Service;
