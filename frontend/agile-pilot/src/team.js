// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './navbar';
import userImage from './assets/user.png';

const users = [
    { id: 1, name: "John Doe", username: "john_doe" },
    { id: 2, name: "Jane Smith", username: "jane_smith" },
    { id: 3, name: "Alice Johnson", username: "alice_johnson" },
    { id: 4, name: "Bob Brown", username: "bob_brown" }
];

function Team() {
    const [showPopup, setShowPopup] = useState(false);
    const [teamName, setTeamName] = useState('');
    const [owner, setOwner] = useState('');
    const [category, setCategory] = useState('');
    const [showAddPeoplePopup, setShowAddPeoplePopup] = useState(false);
    const [showRemovePeoplePopup, setShowRemovePeoplePopup] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [selectedUsersToRemove, setSelectedUsersToRemove] = useState([]);

    useEffect(() => {
        // Check if the user is authenticated
        const username = localStorage.getItem('username');
        const expirationTime = localStorage.getItem('expirationTime');
        const currentTime = new Date().getTime();

        // If username is not stored or expiration time is expired, redirect to login
        if (!username || (expirationTime && currentTime > expirationTime)) {
            // Redirect to login page
            window.location.href = '/';
        }
    }, []);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    const toggleAddPeoplePopup = () => {
        setShowAddPeoplePopup(!showAddPeoplePopup);
    };

    const toggleRemovePeoplePopup = () => {
        setShowRemovePeoplePopup(!showRemovePeoplePopup);
    };

    const handleCreateTeam = () => {
        console.log("Team created:", teamName, owner, category);
        setShowPopup(false);
        setTeamName('');
        setOwner('');
        setCategory('');
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const handleAddPeople = (username) => {
        if (selectedUsers.includes(username)) {
            setSelectedUsers([]);
        } else {
            setSelectedUsers([username]);
        }
    };

    const handleRemovePeople = (username) => {
        if (selectedUsersToRemove.includes(username)) {
            setSelectedUsersToRemove([]);
        } else {
            setSelectedUsersToRemove([username]);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="team-content">
                <h1>Team and People</h1>
                <div className="button-group">
                    <button className="create-team-button" onClick={togglePopup}>Create Team</button>
                    <button className="add-people-button" onClick={toggleAddPeoplePopup}>Add People</button>
                    <button className="remove-people-button" onClick={toggleRemovePeoplePopup}>Remove People</button>
                </div>
                <div className="user-list">
                    {users.map(user => (
                        <div className="user-card" key={user.id}>
                            <img src={userImage} alt="User" className="user-image-team" />
                            <div className="user-details">
                                <div className="user-name">{user.name}</div>
                                <div className="user-username">@{user.username}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {showPopup && (
                <div className="popup">
                    <div className="popup-inner">
                        <div className="close-button" onClick={togglePopup}>×</div>
                        <h2>Create Team</h2>
                        <div className="input-group">
                            <label htmlFor="teamName">Team Name:</label>
                            <input
                                type="text"
                                id="teamName"
                                placeholder="Type the name of the Team"
                                value={teamName}
                                onChange={e => setTeamName(e.target.value)}
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="owner">Owner:</label>
                            <input
                                type="text"
                                id="owner"
                                placeholder="Type the name of the Owner"
                                value={owner}
                                onChange={e => setOwner(e.target.value)}
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="category">Category:</label>
                            <input
                                type="text"
                                id="category"
                                placeholder="Category"
                                value={category}
                                onChange={e => setCategory(e.target.value)}
                            />
                        </div>
                        <button className="create-team-submit" onClick={handleCreateTeam}>Create Team</button>
                    </div>
                </div>
            )}
            {showAddPeoplePopup && (
                <div className="popup">
                    <div className="popup-inner">
                        <div className="close-button" onClick={toggleAddPeoplePopup}>×</div>
                        <h2>Add People</h2>
                        <input
                            type="text"
                            placeholder="Search people"
                            value={searchQuery}
                            onChange={e => handleSearch(e.target.value)}
                        />
                        <div className="user-list-container"> {/* Wrap user list in a container */}
                            <ul className="user-list">
                                {users.map(user => (
                                    <li key={user.id} onClick={() => handleAddPeople(user.username)} className={`user-list-item ${selectedUsers.includes(user.username) ? 'selected' : ''}`}>
                                        {user.username}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <button className="add-people-submit" onClick={handleAddPeople}>Add People</button>
                    </div>
                </div>
            )}
            {showRemovePeoplePopup && (
                <div className="popup">
                    <div className="popup-inner">
                        <div className="close-button" onClick={toggleRemovePeoplePopup}>×</div>
                        <h2>Remove People</h2>
                        <input
                            type="text"
                            placeholder="Search people to remove"
                            value={searchQuery}
                            onChange={e => handleSearch(e.target.value)}
                        />
                        <div className="user-list-container"> {/* Wrap user list in a container */}
                            <ul className="user-list">
                                {users.map(user => (
                                    <li key={user.id} onClick={() => handleRemovePeople(user.username)} className={`user-list-item ${selectedUsersToRemove.includes(user.username) ? 'selected' : ''}`}>
                                        {user.username}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="remove-button-pop">
                            <button className="remove-button" onClick={handleRemovePeople}>Remove People</button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}

export default Team;
