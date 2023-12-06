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
                    <li><a href="#Welcome">0xGery</a></li>
                    <li className="nav-center-group">
                        <a href="#Project">Project</a>
                        <a href="#Service">Service</a>
                        <a href="#Team">Team</a>
                        <a href="#Documentation">Documentation</a>
                        <a href="#Contact">Contact</a>
                    </li>
                    <li className="topnav-right"><a href="#connect-section">Connect Wallet</a></li>
                    <li className="dropdownIcon">
                         <button onClick={DropdownMenu}>&#9776;</button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
