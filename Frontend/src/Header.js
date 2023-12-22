import React, { useState } from 'react';
import './Header.css';

function Header() {
    const [activeLink, setActiveLink] = useState('');

    function DropdownMenu() {
        var x = document.getElementById("Dropdown");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }

    function handleNavLinkClick(link) {
        setActiveLink(link);
    }

    return (
        <header>
            <nav>
                <ul className="topnav" id="Dropdown">
                    <li><a href="#Welcome" onClick={() => handleNavLinkClick('Welcome')} className={activeLink === 'Welcome' ? 'selected' : ''}>Nocturn</a></li>
                    <li className="nav-center-group">
                        <a href="#Project" onClick={() => handleNavLinkClick('Project')} className={activeLink === 'Project' ? 'selected' : ''}>Project</a>
                        <a href="#Service" onClick={() => handleNavLinkClick('Service')} className={activeLink === 'Service' ? 'selected' : ''}>Service</a>
                        <a href="#Team" onClick={() => handleNavLinkClick('Team')} className={activeLink === 'Team' ? 'selected' : ''}>Team</a>
                        <a href="#Contact" onClick={() => handleNavLinkClick('Contact')} className={activeLink === 'Contact' ? 'selected' : ''}>Contact</a>
                        <a href="https://docs.nocturnode.tech" target="_blank" onClick={() => handleNavLinkClick('Documentation')} className={activeLink === 'Documentation' ? 'selected' : ''}>Documentation</a>
                    </li>
                    <li className="topnav-right"><a href="#connect-section" onClick={() => handleNavLinkClick('ConnectWallet')} className={activeLink === 'ConnectWallet' ? 'selected' : ''}>Connect Wallet (soon)</a></li>
                    <li className="dropdownIcon">
                        <button onClick={DropdownMenu}>&#9776;</button>
                    </li>
                </ul>
                <div className='social'>
                    <a href="https://twitter.com/NocturnDao" target="_blank" rel="noopener noreferrer">
                        <img src="https://raw.githubusercontent.com/0xGery/Fullstack/main/Frontend/src/Assets/social/twitter.svg" alt="" />
                    </a>
                    <a href="https://t.me/NocturnDao" target="_blank" rel="noopener noreferrer">
                        <img src="https://raw.githubusercontent.com/0xGery/Fullstack/main/Frontend/src/Assets/social/telegram.svg" alt="" />
                    </a>
                    <a href="https://discord.gg/XWd58f9MxN" target="_blank" rel="noopener noreferrer">
                        <img src="https://raw.githubusercontent.com/0xGery/Fullstack/main/Frontend/src/Assets/social/discord.svg" alt="" />
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Header;
