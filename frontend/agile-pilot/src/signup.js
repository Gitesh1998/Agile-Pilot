import React, { useState } from 'react';
import './App.css';
import loginImage from './assets/logo.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Signup() {
  // State variables for username, password, full name, and error messages
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [fullNameError, setFullNameError] = useState('');
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    setUsernameError('');
    setPasswordError('');
    setFullNameError('');

    try {
      const response = await fetch('http://localhost:3001/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ fullName, username, password })
      });

      if (response.ok) {
        navigate('/'); // Redirect to the login page after successful signup
      } else {
        if (response.status === 409) {
          setUsernameError('Username already exists');
        } else {
          throw new Error('An error occurred while processing your request');
        }
      }
    } catch (error) {
      console.error('Error during signup:', error);
      // Handle other errors if needed
      setFullNameError('An error occurred while processing your request');
      setUsernameError('An error occurred while processing your request');
      setPasswordError('An error occurred while processing your request');
    }
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
          {fullNameError && <div className="error-message">{fullNameError}</div>}
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
          {usernameError && <div className="error-message">{usernameError}</div>}
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
          {passwordError && <div className="error-message">{passwordError}</div>}
        </div>
        <button type="submit">Sign Up</button>
        <div className="additional-links">
          <a href="/">Login</a>
          <span> | </span>
          <Link to="/forgot-password">Forgot password</Link>
        </div>
      </form>
    </div>
  );
}

export default Signup;
