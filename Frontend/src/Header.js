import React from 'react';
import './Header.css';

function Header() {
    return (
        <header>
            <nav>
        <ul class="topnav" id="Dropdown">
            <li><a href="#home">0xGery</a></li>
            <li class="nav-center-group">
                <a href="#Project">Project</a>
                <a href="#Service">Service</a>
                <a href="#Education">Education</a>
                <a href="#AboutMe">About Me</a>
                <a href="#Contact">Contact</a>
            </li>
            <li class="topnav-right"><a href="#Connect">Connect</a></li>
            <li class="dropdownIcon"><a href="javascript:void(0);" onclick="DropdownMenu()">&#9776;</a></li>
        </ul>
            </nav>



        </header>
        
        
    );
}

<script>
        function DropdownMenu() {
            var x = document.getElementById("Dropdown");
            if (x.className === "topnav") {
                x.className += " responsive";
            } else {
                x.className = "topnav";
            }
        }
</script>

export default Header;
