import React from 'react';
import './App.css';
import Navbar from './navbar';

function Dashboard() {
    // Sample data for table entries
    const tableData = [
        { issueName: 'Sample Issue 1', deadline: '2024-04-25', assign: 'John Doe', status: 'In Progress', tags: 'Bug', assignee: 'Jane Smith' },
        { issueName: 'Sample Issue 2', deadline: '2024-04-26', assign: 'Alice Johnson', status: 'New', tags: 'Feature', assignee: 'Bob Brown' },
        { issueName: 'Sample Issue 3', deadline: '2024-04-27', assign: 'Emily Clark', status: 'Completed', tags: 'Enhancement', assignee: 'Chris Wilson' },
        { issueName: 'Sample Issue 1', deadline: '2024-04-25', assign: 'John Doe', status: 'In Progress', tags: 'Bug', assignee: 'Jane Smith' },
        { issueName: 'Sample Issue 2', deadline: '2024-04-26', assign: 'Alice Johnson', status: 'New', tags: 'Feature', assignee: 'Bob Brown' },
        { issueName: 'Sample Issue 3', deadline: '2024-04-27', assign: 'Emily Clark', status: 'Completed', tags: 'Enhancement', assignee: 'Chris Wilson' },
        { issueName: 'Sample Issue 1', deadline: '2024-04-25', assign: 'John Doe', status: 'In Progress', tags: 'Bug', assignee: 'Jane Smith' },
        { issueName: 'Sample Issue 2', deadline: '2024-04-26', assign: 'Alice Johnson', status: 'New', tags: 'Feature', assignee: 'Bob Brown' },
        { issueName: 'Sample Issue 3', deadline: '2024-04-27', assign: 'Emily Clark', status: 'Completed', tags: 'Enhancement', assignee: 'Chris Wilson' },
        // Add more entries as needed
    ];

    return (
        <div>
            <Navbar />
            <div className="team-content">
            <div className="activity-section">
                    <h3 className="activity-heading">Activity</h3>
                    <div className="activity-tiles">
                        {/* Rectangle-shaped tiles in front of the table */}
                        <div className="activity-tile"><img src={require('./assets/user1.jpg')} alt="User 1" className="user-image" /></div>
                        <div className="activity-tile"><img src={require('./assets/user1.jpg')} alt="User 1" className="user-image" /></div>
                        <div className="activity-tile"><img src={require('./assets/user1.jpg')} alt="User 1" className="user-image" /></div>
                        <div className="activity-tile"><img src={require('./assets/user1.jpg')} alt="User 1" className="user-image" /></div>
                        <div className="activity-tile"><img src={require('./assets/user1.jpg')} alt="User 1" className="user-image" /></div>
                        <div className="activity-tile"><img src={require('./assets/user1.jpg')} alt="User 1" className="user-image" /></div>
                        <div className="activity-tile"><img src={require('./assets/user1.jpg')} alt="User 1" className="user-image" /></div>
                        <div className="activity-tile"><img src={require('./assets/user1.jpg')} alt="User 1" className="user-image" /></div>
                        <div className="activity-tile"><img src={require('./assets/user1.jpg')} alt="User 1" className="user-image" /></div>
                        {/* Add more tiles as needed */}
                    </div>
                </div>
                <h1>Dashboard</h1>
                <div className="tiles-container">
                    <div className="tile"><h4 className='tile-heading'>Open Tasks</h4></div>
                    <div className="tile"><h4 className='tile-heading'>In Progress Tasks</h4></div>
                    <div className="tile"><h4 className='tile-heading'>Completed Tasks</h4></div>
                    
                </div>
                <h3 className="tasks-heading">Tasks</h3>
                <div className="status-options">
                    <span>New</span>
                    <span className="spacer"></span>
                    <span>In Progress</span>
                    <span className="spacer"></span>
                    <span>Completed</span>
                    <button className="create-task-button" >Create New Task</button>
                    <button className="sort-by-button" >Sort by</button>
                </div>
                <table className="issue-table">
                    <thead>
                        <tr>
                            <th>Issue Name</th>
                            <th>Deadline</th>
                            <th>Assign</th>
                            <th>Status</th>
                            <th>Tags</th>
                            <th>Assignee</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((data, index) => (
                            <tr key={index}>
                                <td>{data.issueName}</td>
                                <td>{data.deadline}</td>
                                <td>{data.assign}</td>
                                <td>{data.status}</td>
                                <td>{data.tags}</td>
                                <td>{data.assignee}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                
            </div>
        </div>
    );
}

export default Dashboard;
