import React, { useState } from 'react';
import './App.css';
import loginImage from './assets/logo.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Login() {
  // State variables for username, password, and error messages
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    setUsernameError('');
    setPasswordError('');
  
    try {
      const response = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId: username, password: password })
      });
  
      if (response.ok) {
        // Store username in browser cache with expiration time of 1 hour
        const expirationTime = new Date().getTime() + 3600 * 1000; // 1 hour in milliseconds
        localStorage.setItem('username', username);
        localStorage.setItem('expirationTime', expirationTime);
        
        navigate('/team');
      } else {
        const data = await response.json();
        console.error('Login failed:', data.error);
  
        if (response.status === 401) {
          setUsernameError('Invalid username or password');
          setPasswordError('Invalid username or password');
        } else {
          setUsernameError('An error occurred while processing your request');
        }
      }
    } catch (error) {
      console.error('Invalid username or password:', error);
      setUsernameError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <img src={loginImage} alt="Login" className="login-image" />
        <h2 className="login-header">Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          {/* Display username error message */}
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
          {/* Display password error message */}
          {passwordError && <div className="error-message">{passwordError}</div>}
        </div>
        <button type="submit">Login</button>
        <div className="additional-links">
          <a href="/signup">Sign up</a>
          <span> | </span>
          <Link to="/forgot-password">Forgot password</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
