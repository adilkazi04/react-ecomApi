import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { useCart } from '../CartContext'; // Import useCart hook
import { useAuth0 } from '@auth0/auth0-react';
import '../styles/Nav.css';
import '../styles/Button.css';

const Nav = () => {
  const { cartItems } = useCart(); // Use cartItems from CartContext
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <nav className="nav">
      <div className="navbar">
        <ul className="navbar-lists">
          <li>
            <NavLink to="/" className="navbar-link">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products" className="navbar-link">Products</NavLink>
          </li>
          {isAuthenticated ? (
            <li><button className='button' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button></li>
          ) : (
            <li><button className='button' onClick={() => loginWithRedirect()}>Log In</button></li>
          )}
          <li>
            <NavLink to="/cart" className="navbar-link cart-trolley--link">
              <FiShoppingCart className="cart-trolley" />
              <span className="cart-total--item">{cartItems.length}</span> {/* Display cartItems length */}
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;