import React from 'react';
import { Link } from "react-router-dom";
import CartWidget from './CartWidget';
import Titulo from './Titulo';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="./bolsa2.PNG" alt="logo de BodyBags" className="logo" />
        <Titulo />
      </div>
      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/category/bandoleras">Bandoleras</Link></li>
        <li><Link to="/category/riñoneras">Riñoneras</Link></li>
        <li><Link to="/category/mate">Set Materos</Link></li>
        <li><Link to="/cart">Carrito</Link></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;



