import React from 'react';
import './WelcomeSection.css';

function WelcomeSection() {
    // URL of the logo
    const logoUrl = 'https://raw.githubusercontent.com/0xGery/Fullstack/main/Frontend/src/Assets/Logo.svg';

    return (
        <div class="container" id="sect-1">
        <div class="row">
            <div class="col-6"> 
                  <div class="leftSide-col">
                    <h1 class="large">For Community</h1>
                    <h1 class="large2">From Community</h1>
                    <h2 class="small">By 0xGery</h2>
                  </div>
            </div>
            <div class="col-6">
                <div class="rightSide-col">
                <img src={logoUrl} alt="Logo" className="imageA" />
                </div>
            </div>
        </div>
    </div>
    );
}

export default WelcomeSection;
