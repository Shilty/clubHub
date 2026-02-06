import React from 'react';
import { Link } from "react-router-dom";
import '../styles/main.css';

const Header: React.FC = () => {
    return (
        <header id="header">
            <Link to="/" className="logo">
                <strong>ClubHub</strong>
            </Link>

            <ul className="auth-links">
                <li>
                    <Link to="/login" className="login-link">
                        Log In
                    </Link>
                </li>
                <li>
                    <Link to="/signup" className="signup-link">
                        Sign Up
                    </Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;
