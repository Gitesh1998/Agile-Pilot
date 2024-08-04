import React, { useState } from 'react';
import './App.css';
import Navbar from './navbar';

function Dashboard() {
    return (
        <div>
            <Navbar />
            <div className="team-content">
                <h1>Dashboard</h1>
                {/* Add team-related content here */}
            </div>
        </div>
    );
}

export default Dashboard;