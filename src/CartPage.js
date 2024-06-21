
import React from 'react';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';
import './styles/CartPage.css';

const CartPage = () => {
  const { cartItems, addToCart, removeFromCart } = useCart();

  const handleIncrement = (item) => {
    addToCart(item);
  };

  const handleDecrement = (item) => {
    removeFromCart(item);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(item => (
              <tr key={item.id} className="cart-item">
                <td><img src={item.images} alt={item.title} className="cart-item-image" /></td>
                <td className='cart-size'><Link to={`/products/${item.id}`}>{item.title}</Link></td>
                <td className='cart-size' >₹{item.price}</td>
                <td>
                  <button onClick={() => handleDecrement(item)}>-</button>
                  <span className='cart-count' >{item.quantity}</span>
                  <button onClick={() => handleIncrement(item)}>+</button>
                </td>
                <td className='cart-size'>₹{(item.price * item.quantity).toFixed(2)}</td>
                <td><button onClick={() => removeFromCart(item, true)}>Remove</button></td>
                <hr/>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div className="cart-total">
        <h3>Total: ₹{getTotalPrice()}</h3>
        <button className="checkout-button">Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
