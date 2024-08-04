import React, { useState } from 'react';
import './App.css';
import loginImage from './assets/logo.png';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Signup() {
  // State variables for username, password, and full name
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform sign-up logic here
    console.log('Full Name:', fullName);
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <img src={loginImage} alt="Login" className="login-image" />
        <h2 className="login-header">Sign Up</h2>
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
        <div className="additional-links">
          {/* Use Link component to navigate to login page */}
          <a href="/">Login</a>
          <span> | </span>
          <Link to="/forgot-password">Forgot password</Link>
        </div>
      </form>
    </div>
  );
}

export default Signup;
