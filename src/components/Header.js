import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";
import '../styles/Header.css'; 

const Header = () => {
  return (
    <header className="main-header">
      <NavLink to="/">
        <img src="./images/ecomm-logo.png" alt="my logo img" className="logo" />
      </NavLink>
      <Nav />
    </header>
  );
};

export default Header;