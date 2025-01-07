import React from 'react';
import './css/header.css';
import { Link } from 'react-router-dom'; // React Router para navegación

function Header() {
  return (
    <header className='header'>
        
      <h2 className='title' ><Link to="/" className='button'>MI CURSO DE REACT</Link> </h2>
      <nav className='nav'>
        {/* Submenu for Products */}
        <div className="submenu">
          <button className="submenu-button">PARTES DE CURSO</button>
          <div className="submenu-content">
            <Link to="/parte2" className='button'>Parte 2</Link>
            <Link to="/productos-con-stock" className='button'>Productos con stock</Link>
            <Link to="/product-sin-stock" className='button'>Productos sin stock</Link>
          </div>
        </div>

        {/* Submenu for Clients */}
        <div className="submenu">
          <button className="submenu-button">Clientes</button>
          <div className="submenu-content">
            <Link to="/ver-clientes" className='button'>Ver clientes</Link>
            <Link to="/serch-customer" className='button'>Buscar Cliente</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
