import React from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';
import logo from './assets/logo.png'; // Import the logo image

function Navbar() {
  // Function to handle logout
  const handleLogout = () => {
    // Clear localStorage items
    localStorage.removeItem('username');
    localStorage.removeItem('expirationTime');
  };

  // Retrieve username from localStorage
  const username = localStorage.getItem('username');

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

 <div className="vertical-space"></div>

 {/* User info and logout button */}
  <div className="user-info">
  <div className="username-info">
    {username && <span className="username">User logged in: {username}</span>}
  </div>
  <div className="logout-info">
    {/* Logout button */}
    <NavLink to="/" onClick={handleLogout} className="logout-link">
      Logout
    </NavLink>


  </div>
  </div>

</div>
  );
}

export default Navbar;