import React from 'react';
import './Body.css';
import logo from '../path-to-your-logo/logo.png'; // Update with the correct path to your logo

function WelcomeSection() {
    return (
        <div className="welcome-section">
            <img src={logo} alt="Logo" className="logo" />
            <h1>Welcome to My Portfolio</h1>
        </div>
    );
}

export default WelcomeSection;
