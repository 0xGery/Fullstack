import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// nav
import Header from './Header';

// Section
import WelcomeSection from './WelcomeSection';
import ProjectSection from './ProjectSection';
import ServiceSection from './ServiceSection';
import TeamSection from './TeamSection';
import ContactSection from './ContactSection';
import CalculationForm from './CalculationForm';

function App() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 680);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 680);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

        return (
            <Router>
                <div>
                    {isMobile ? (
                        <div className="mobile-message">
                            \\.. We do not support mobile yet, please continue using desktop ..//
                        </div>
                    ) : (
                        <Routes>
                            <Route exact path="/" element={
                                <div className="hide-on-mobile">
                                    <Header />
                                    <div id="Welcome"><WelcomeSection /></div>
                                    <div id="Project"><ProjectSection /></div>
                                    <div id="Service"><ServiceSection /></div>
                                    <div id="Team"><TeamSection /></div>
                                    <div id="Contact"><ContactSection /></div>
                                </div>
                            }/>
                            <Route path="/calculation" element={
                                <div className="App">
                                    <h1>Debt Ratio Calculation</h1>
                                    <CalculationForm />
                                </div>
                            }/>
                        </Routes>
                    )}
                </div>
            </Router>
        );
}

export default App;
