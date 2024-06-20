import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';
import './styles/ProductDetail.css'; 

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1); 
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => {
        setProduct(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching product:', error);
        setIsLoading(false);
      });
  }, [id]);

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    
    console.log('Product:', product);
    console.log('Quantity:', quantity);
  };

  if (isLoading) {
    return <p>Loading product...</p>;
  }

  return (
    <div className="product-detail">
      <div className="product-detail__image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-detail__content">
        <h2>{product.title}</h2>
        <p className="description">{product.description}</p>
        <p className="price">{product.price}</p>
        <div className="quantity-control">
          <Button icon="pi pi-minus" onClick={handleDecrement} />
          <InputNumber value={quantity} onChange={(e) => setQuantity(e.value)} showButtons min={1} />
          <Button icon="pi pi-plus" onClick={handleIncrement} />
        </div>
        <Button className='product-btn' label="Add to Cart" onClick={handleAddToCart} />
      </div>
    </div>
  );
};

export default ProductDetail;
