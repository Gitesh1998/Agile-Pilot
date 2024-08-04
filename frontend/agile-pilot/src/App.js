import React from 'react';
import './App.css';
import Login from './login';
import Signup from './signup';
import Team from './team';
import Dashboard from './dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/team' element={<Team/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
