import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Welcome to ClubHub!</h1>
            <p>Navigate to your pages:</p>
            <ul>
                <li>
                    <Link to="/clubs">Clubs</Link>
                </li>
                <li>
                    <Link to="/clubdetails">Club Details</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/admin">Admin Panel</Link>
                </li>
                <li>
                    <Link to="/colors">Color pallette</Link>
                </li>
            </ul>
        </div>
    );
};

export default Home;
