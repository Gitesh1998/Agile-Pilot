import React, { useState } from 'react';
import './App.css'; // assuming you create a separate CSS file for login styles
import loginImage from './assets/logo.png'; // import the image file
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';




function Login() {
  // State variables for username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login authentication logic here
    console.log('Username:', username);
    console.log('Password:', password);
    navigate('/team');
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <img src={loginImage} alt="Login" className="login-image" /> {/* Insert the image here */}
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
        <button type="button" onClick={handleSubmit}>Login</button>
        <div className="additional-links">
          <a href="/signup">Sign up</a>
          <span> | </span>
          <a href="/forgot-password">Forgot password</a>
        </div>
      </form>
    </div>
  );
}

export default Login;
