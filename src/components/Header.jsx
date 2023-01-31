import React from "react";
import Nav from "./Nav";
import logo from '../images/Logo.svg'
import './Header.css'

const Header = () => {
  return (
    <>
      <header> 
          <img src={logo} alt="logo" />
          <Nav />
      </header>
     
    </>
  );
};

export default Header;
