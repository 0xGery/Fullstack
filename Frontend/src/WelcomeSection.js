import React from 'react';
import './WelcomeSection.css';

function WelcomeSection() {
    const logoUrl = 'https://raw.githubusercontent.com/0xGery/Fullstack/main/Frontend/src/Assets/LogoA.svg';

    return (
        <div className="containerW" id="sect-w">
            <div className="rowW">
                <div className="col-6"> 
                    <div className="leftSide-col">
                        <h1 className="large">NOCTURN NODE</h1>
                        <h1 className="large2">Nocturn is a team of accomplished validators with a strong focus on blockchain architecture. We deliver relayer services and contribute actively to the growth of various blockchain projects.</h1>
                        <h1 className="large2">Our primary aim is to enable communities to engage meaningfully with projects they are enthusiastic about. We provide complimentary tutorials that guide users on how to become active contributors to their selected projects. Although we offer our services free of charge, we plan to introduce features for those who wish to support our team monetarily. Furthermore, those interested in delegating to our validator can look forward to the 'Connect Wallet' feature, scheduled to be available soon.</h1>
                        <h1 className="large2">Founded in 2021, Nocturn had its fair share of funding challenges that initially slowed our development. Fast-forward to 2024, and we have fully assembled our team. Resembling nocturnal bats on the hunt, we are prepared to excel in the blockchain ecosystem.</h1>
                    </div>
                </div>
                <div className="col-6">
                    <div className="rightSide-col">
                        <img src={logoUrl} alt="NocturnNode Logo" className="logo" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WelcomeSection;
