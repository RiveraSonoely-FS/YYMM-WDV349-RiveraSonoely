import React from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Sonoely Rivera</h1>
      </div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
        </ul>
      </nav>
      <div className="social-media">
        <a href="https://github.com/RiveraSonoely-FS" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </header>
  );
};

export default Header;
