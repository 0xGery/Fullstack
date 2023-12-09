import React from 'react';
import './WelcomeSection.css';

function WelcomeSection() {
    // URL of the logo
    const logoUrl = 'https://raw.githubusercontent.com/0xGery/Fullstack/main/Frontend/src/Assets/Logo.svg';

    return (
        <div class="containerW" id="sect-w">
        <div class="rowW">
            <div class="col-6"> 
                  <div class="leftSide-col">
                    <h1 class="large">0xGERY</h1>
                    <h1 class="large2">A Professional team specialized on Blockchain Architecture, we help community to understand more Blockchain Architerture and we help projects to connect with community </h1>
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
