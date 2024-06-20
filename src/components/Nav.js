import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCart } from '../CartContext'; 
import { useAuth0 } from '@auth0/auth0-react';
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import '../styles/Nav.css'
import '../styles/Button.css'


const Nav = () => {
  const [menuIcon, setMenuIcon] = useState(false);
  const { cartItems } = useCart(); // Use cartItems from CartContext
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <nav className="nav">
      <div className={`navbar ${menuIcon ? "active" : ""}`}>
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

        {/* Button to toggle menu */}
        <div className="mobile-navbar-btn" onClick={() => setMenuIcon(!menuIcon)}>
          {menuIcon ? (
            <CgClose name="close-outline" className="mobile-nav-icon close-outline" />
          ) : (
            <CgMenu name="menu-outline" className="mobile-nav-icon" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
