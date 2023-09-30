import { Link } from 'react-router-dom';
import React from 'react';
import './index.css';
const Header = (props) => {
  return (
    <div className="header">
      <p className="logo">pat.co</p>
      <nav className="nav">
        <Link to="/" className="eleme">
          <li>Home</li>
        </Link>
        <Link to="/about" className="eleme">
          <li>About us</li>
        </Link>
        <Link to="/work" className="eleme">
          <li>Our work</li>
        </Link>
        <Link to="/services" className="eleme">
          <li>Services</li>
        </Link>
        <Link to="/contact" className="eleme">
          <li>Contact Us</li>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
