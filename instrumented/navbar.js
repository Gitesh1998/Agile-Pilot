import React from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';
import logo from './assets/logo.png'; // Import the logo image

function Navbar() {
  return (
    <div className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-image" />
      </div>
      {/* Navbar links */}
      <nav>
        <ul className="navbar-nav">
          <li>
            <NavLink to="/team" activeClassName="active" className="nav-link">
              Team
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard" activeClassName="active" className="nav-link">
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active" className="nav-link">
              My Profile
            </NavLink>
          </li>
          {/* Add more navigation items as needed */}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;