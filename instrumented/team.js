import React from 'react';
import './App.css';
import Navbar from './navbar';
import loginImage from './assets/logo.png';

import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Team() {
    return (
        <div>
            <Navbar />
            <div className="team-content">
                <h1>Team and People</h1>
                {/* Add "Create Team" and "Add People" buttons */}
                <div className="button-group">
                    <button className="create-team-button">Create Team</button>
                    <button className="add-people-button">Add People</button>
                </div>
                {/* Add team-related content here */}
            </div>
        </div>
    );
}

export default Team;
