import React from 'react';
import CartWidget from './CartWidget';
import Titulo from './Titulo';
import './NavBar.css';
const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <Titulo />
      </div>
      <ul className="nav-links">
        <li><a href="#home">Inicio</a></li>
        <li><a href="#products">Productos</a></li>
        <li><a href="#contact">Contacto</a></li>
        <li><a href="#cart">🛒 Carrito</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;



