import React from 'react';
import './Header.css';

function Header() {
    function DropdownMenu() {
        var x = document.getElementById("Dropdown");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }

    return (
        <header>
            <nav>
                <ul className="topnav" id="Dropdown">
                    <li><a href="#welcome-section">0xGery</a></li>
                    <li className="nav-center-group">
                        <a href="#project-section">Project</a>
                        <a href="#service-section">Service</a>
                        <a href="#team-section">Team</a>
                        <a href="#documentation-section">Documentation</a>
                        <a href="#contact-section">Contact</a>
                    </li>
                    <li className="topnav-right"><a href="#connect-section">Connect</a></li>
                    <li className="dropdownIcon">
                         <button onClick={DropdownMenu}>&#9776;</button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;